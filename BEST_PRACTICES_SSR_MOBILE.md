# Best Practices: Preventing Mobile Layout Shifts in React SSR

## Core Principles

### 1. **SSR-Client Consistency is Everything**
The golden rule: **Server and client must render identically during initial hydration**.

```typescript
// ✅ GOOD: Safe default that works on both server and client
const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
useEffect(() => {
  setIsMobile(window.innerWidth < 768);
});
return isMobile ?? false;  // Defaults to false (server-safe)

// ❌ BAD: Client-only logic that mismatches server
return typeof window !== 'undefined' && window.innerWidth < 768;
// Server returns false, client might return true → mismatch

// ❌ BAD: Undefined returns causing type issues
return isMobile;  // Might be undefined during hydration
```

### 2. **Constrain Framer Motion Animations**
Never let animations trigger layout recalculations.

```typescript
// ✅ GOOD: Position-only animation
<motion.div
  animate={{ opacity: 1, y: 0 }}
  layout="position"  // Only position changes, no layout recalc
>

// ✅ GOOD: Specific transform
<motion.div
  animate={{ opacity: 1 }}
  style={{ transform: 'translateY(10px)' }}  // CSS transform, not layout
>

// ❌ BAD: Unspecified animation with no layout constraint
<motion.div animate={{ opacity: 1, y: 0 }}>
// Might trigger layout recalculation

// ❌ BAD: Animating width/height
<motion.div animate={{ width: '100px', height: '100px' }}>
// Forces constant reflow during animation
```

### 3. **Use Explicit Width Constraints**
Avoid responsive classes that change mid-render.

```typescript
// ✅ GOOD: Explicit max-width
<div className="w-full px-4">
  <div className="mx-auto max-w-7xl">
    {/* Always the same width on all screen sizes */}
  </div>
</div>

// ✅ GOOD: CSS media queries (static, determined at build time)
<div className="w-full px-4 md:px-8 lg:px-12">
  {/* Padding changes at breakpoints, but width is predictable */}
</div>

// ❌ BAD: Responsive container with dynamic breakpoints
<div className="container mx-auto px-4">
  {/* Width can change during hydration based on JS logic */}
</div>

// ❌ BAD: Conditional rendering based on media query hook
{isMobile ? <MobileLayout /> : <DesktopLayout />}
// Different components = different layout = hydration mismatch
```

### 4. **Handle Viewport Height Carefully**
Never trust `100vh` on mobile - use static heights.

```css
/* ✅ GOOD: Static height with fallback */
.hero {
  min-height: 100vh;
  min-height: 100svh; /* 100 Small Viewport Height - excludes address bar */
  min-height: calc(var(--vh) * 100); /* JS variable if needed */
}

/* ✅ GOOD: Explicit pixel heights on mobile */
@media (max-width: 768px) {
  .hero {
    min-height: 500px; /* Predictable on all mobile devices */
  }
}

/* ❌ BAD: Changing height after hydration */
.hero {
  height: ${isMobile ? '60vh' : '100vh'};  /* Changes post-hydration */
}

/* ❌ BAD: Dynamic viewport calculation */
const heroHeight = window.innerHeight - navHeight;
// This can change during hydration/layout pass
```

### 5. **Test for Hydration Mismatches**
Implement systematic checks during development.

```typescript
// In your development environment:
if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    // Server-side during SSR: window is undefined
    // Client-side after hydration: window is defined
    
    // If this condition changes between SSR and client, hydration will break
    const serverValue = 'expected';
    const clientValue = typeof window === 'undefined' ? 'expected' : 'actual';
    
    if (serverValue !== clientValue) {
      console.warn('Hydration mismatch detected!', { serverValue, clientValue });
    }
  }
}
```

---

## Common Patterns to Use

### Pattern 1: Safe Mobile Detection Hook

```typescript
// hooks/use-is-mobile.ts
import { useState, useEffect } from 'react';

export function useIsMobile() {
  // Initialize with undefined (safe default)
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // This only runs on client, so no hydration mismatch
    const mql = window.matchMedia('(max-width: 767px)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    // Set initial value
    setIsMobile(mql.matches);
    
    // Listen for changes
    mql.addEventListener('change', handleChange);
    
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Return safe default if undefined (during SSR/hydration)
  return isMobile ?? false;  // or return null if you prefer
}

// Usage:
function MyComponent() {
  const isMobile = useIsMobile();
  
  // After hydration, isMobile will accurately reflect mobile state
  // During SSR, it safely defaults to false
  
  return (
    <div>
      {/* Can safely use isMobile here */}
    </div>
  );
}
```

### Pattern 2: Safe Viewport Height CSS

```css
:root {
  /* Set CSS variable on both server and client */
  --vh: 1vh;
  
  /* On client, update it with actual viewport height */
  @supports (height: 100dvh) {
    --vh: 1dvh; /* Dynamic viewport height (modern browsers) */
  }
}

.hero {
  min-height: 100vh;              /* Fallback */
  min-height: 100svh;             /* Small viewport height (excludes address bar) */
  min-height: calc(var(--vh) * 100); /* CSS variable (if needed) */
}
```

```typescript
// JS to update viewport height variable (optional)
// Only run this on client if you need precise mobile measurements
if (typeof window !== 'undefined') {
  const updateViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  updateViewportHeight();
  window.addEventListener('resize', updateViewportHeight);
  window.addEventListener('orientationchange', updateViewportHeight);
}
```

### Pattern 3: Safe Framer Motion Animation

```typescript
import { motion } from 'framer-motion';

export function SafeAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      layout="position"  // ✅ Crucial: Only animate position
      className="my-component"
    >
      {/* Content */}
    </motion.div>
  );
}

// If you need to animate width/height, use a separate key to remount
export function SafeResizable() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    // Option 1: Use layout animation only
    <motion.div
      animate={{ height: isExpanded ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      layout  // Allow layout animation only here
    />
    
    // Option 2: Conditional render with layout="position"
    {isExpanded && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout="position"  // Doesn't measure/animate bounds
      />
    )}
  );
}
```

### Pattern 4: Safe Responsive Container

```typescript
export function SafeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
}

// Or as a reusable utility class in CSS
export const containerClass = "w-full px-4 md:px-6 lg:px-8";
export const containerInnerClass = "mx-auto max-w-7xl";

// Usage:
<div className={containerClass}>
  <div className={containerInnerClass}>
    {/* Content */}
  </div>
</div>
```

### Pattern 5: Safe Theme Provider

```typescript
// Root component
export default function Root() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
        <Links />
        {/* Inline critical styles to prevent flash */}
        <style>{`
          :root {
            color-scheme: light;
          }
          .dark {
            color-scheme: dark;
          }
        `}</style>
      </head>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light"
          enableSystem={false}  // Disable system theme detection during SSR
          storageKey="theme"
        >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

---

## Debugging Checklist

When you suspect hydration mismatches:

### 1. Browser Console
```javascript
// Copy-paste in console during page load
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name === 'measure' && entry.name.includes('hydration')) {
      console.log('Hydration took:', entry.duration, 'ms');
    }
  }
});
observer.observe({ entryTypes: ['measure'] });
```

### 2. React DevTools
- Install React DevTools browser extension
- Open Profiler tab
- Look for unexpected re-renders during/after hydration
- Check why components are re-rendering

### 3. Manual Testing
```html
<!-- Add this to your HTML during development -->
<script>
  const originalInner = HTMLElement.prototype.innerHTML;
  let hydrationComplete = false;
  
  window.addEventListener('load', () => {
    setTimeout(() => { hydrationComplete = true; }, 100);
  });
  
  Object.defineProperty(HTMLElement.prototype, 'innerHTML', {
    set: function(value) {
      if (hydrationComplete && value.includes('updated')) {
        console.warn('⚠️ DOM mutation after hydration!', this);
        console.trace();
      }
      originalInner.call(this, value);
    }
  });
</script>
```

### 4. Performance Timeline
1. Open Chrome DevTools → Performance tab
2. Record while loading page
3. Look for pattern: "Parse HTML" → "Hydrate React" → check for "Layout" events
4. Any "Layout" after "hydration" likely indicates mismatch

---

## Testing Strategy

### Unit Tests
```typescript
// __tests__/use-is-mobile.test.ts
import { renderHook } from '@testing-library/react';
import { useIsMobile } from '../use-is-mobile';

describe('useIsMobile', () => {
  it('should return false on initial render (SSR safe)', () => {
    // During SSR, before useEffect
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);  // Safe default
  });
  
  it('should return correct value after hydration', () => {
    // Simulate hydration by waiting for useEffect
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBeDefined();  // Has value
  });
});
```

### Integration Tests
```typescript
// Test actual page on mobile device
cy.viewport(375, 812);  // iPhone size
cy.visit('/');
cy.window().then((win) => {
  const scrollBefore = win.scrollY;
  // Wait for hydration
  cy.wait(2000);
  const scrollAfter = win.scrollY;
  // Should not jump
  expect(scrollAfter).toBe(scrollBefore);
});
```

### E2E Tests
```typescript
// Real mobile browser test
test('layout stable on mobile after hydration', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Use mobile user agent
  await page.setUserAgent('iPhone user agent');
  await page.setViewport({ width: 375, height: 812 });
  
  // Navigate to page
  await page.goto('http://localhost:3000');
  
  // Wait for hydration
  await page.waitForFunction(() => {
    return window.__hydrationComplete === true;
  });
  
  // Take screenshot
  await page.screenshot({ path: 'mobile.png' });
  
  await browser.close();
});
```

---

## Production Monitoring

### Track Layout Shifts
```typescript
// In your analytics setup
import { getCLS } from 'web-vitals';

getCLS((metric) => {
  if (metric.value > 0.1) {
    // Unexpected layout shift detected
    analytics.track('cumulative_layout_shift_high', {
      value: metric.value,
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }
});
```

### Monitor Hydration Errors
```typescript
// In your root component
useEffect(() => {
  const handleError = (event: ErrorEvent) => {
    if (event.message.includes('hydration')) {
      analytics.track('hydration_error', {
        message: event.message,
        url: window.location.href
      });
    }
  };
  
  window.addEventListener('error', handleError);
  return () => window.removeEventListener('error', handleError);
}, []);
```

---

## Summary

**Key Takeaways:**
1. ✅ Always provide safe defaults for client-only hooks
2. ✅ Use `layout="position"` for Framer Motion animations
3. ✅ Use explicit max-widths instead of responsive container classes
4. ✅ Test on real mobile devices, not just desktop with device emulation
5. ✅ Monitor Core Web Vitals (CLS) in production
6. ✅ Use `suppressHydrationWarning` strategically
7. ✅ Keep SSR and client rendering in sync

**Remember:** A pixel-perfect mobile layout is worthless if it jumps after loading. Stability first, polish second! 🎯
