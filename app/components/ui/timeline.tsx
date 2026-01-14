import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Center Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <TimelineItem
            key={event.year}
            event={event}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({
  event,
  index,
  isLeft,
}: {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-secondary rounded-full mb-3">
            {event.year}
          </span>
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
