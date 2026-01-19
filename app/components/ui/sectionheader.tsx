import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  children,
}: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${alignClass}`}
    >
      {subtitle && (
        <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeader;
