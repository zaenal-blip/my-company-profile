import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
  slug: string;
  index?: number;
}

const NewsCard = ({ title, excerpt, date, image, category, slug, index = 0 }: NewsCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/20">TMMIN</span>
          </div>
        )}
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
          <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
          <time>{date}</time>
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2">{excerpt}</p>
        <Link
          to={`/news/${slug}`}
          className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read More
          <ArrowRight className="ml-1 h-3 sm:h-4 w-3 sm:w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

export default NewsCard;
