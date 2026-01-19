import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  size?: 'default' | 'large';
  children?: ReactNode;
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = true,
  size = 'default',
  children,
}: HeroProps) => {
  // Use svh (small viewport height) on mobile, regular viewport on desktop
  // This prevents layout shift when mobile address bar appears/disappears
  const heightClass = size === 'large' 
    ? 'min-h-screen lg:min-h-screen md:min-h-screen' 
    : 'min-h-[70vh]';

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Gradient Background (when no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 gradient-green opacity-10" />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-foreground/60" />
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"  />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
          layout="position"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 ${
                backgroundImage ? 'text-primary-foreground/80' : 'text-primary'
              }`}
              layout="position"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
              backgroundImage ? 'text-background' : 'text-foreground'
            }`}
            layout="position"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
                backgroundImage ? 'text-background/90' : 'text-muted-foreground'
              }`}
              layout="position"
            >
              {description}
            </motion.p>
          )}

          {(primaryAction || secondaryAction) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              layout="position"
            >
              {primaryAction && (
                <Button asChild size="lg" className="group">
                  <Link to={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  asChild
                  size="lg"
                  variant={backgroundImage ? 'secondary' : 'outline'}
                >
                  <Link to={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              )}
            </motion.div>
          )}

          {children}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {size === 'large' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          layout="position"
        >
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-background/70 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
