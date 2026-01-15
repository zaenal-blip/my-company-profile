import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import Layout from '@/components/layout/layout';
import Hero from '@/components/sections/hero';
import NewsCard from '@/components/ui/newscard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const newsCategories = ['All', 'Production', 'Sustainability', 'Awards', 'Events', 'Community'];

const newsArticles = [
  {
    title: 'TMMIN Achieves Carbon Neutral Milestone in Manufacturing',
    excerpt: 'Our Karawang plant has successfully achieved carbon neutral status, marking a significant step in our sustainability journey toward a greener future.',
    date: 'January 3, 2026',
    category: 'Sustainability',
    slug: 'carbon-neutral-milestone',
    image: '/xev.png',
  },
  {
    title: 'New Hybrid Vehicle Production Line Launched',
    excerpt: 'Expanding our commitment to electrification with a state-of-the-art hybrid vehicle production facility that will produce 50,000 units annually.',
    date: 'December 28, 2025',
    category: 'Production',
    slug: 'hybrid-production-line',
    image: '/velozhev.jpg',
  },
  {
    title: 'TMMIN Receives Manufacturing Excellence Award',
    excerpt: 'Recognized for outstanding quality and innovation in automotive manufacturing by the Indonesian Ministry of Industry.',
    date: 'December 15, 2025',
    category: 'Awards',
    slug: 'excellence-award',
    image: '/award.jpg',
  },
  {
    title: 'Annual Community Health Fair Serves 5,000 Residents',
    excerpt: 'Our annual health fair provided free medical check-ups, health education, and wellness resources to local communities.',
    date: 'December 10, 2025',
    category: 'Community',
    slug: 'health-fair-2025',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Export Volume Reaches New Record High',
    excerpt: 'TMMIN exports over 150,000 vehicles this year, setting a new record for Indonesian automotive exports.',
    date: 'December 5, 2025',
    category: 'Production',
    slug: 'export-record',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Partnership with Local Universities for R&D',
    excerpt: 'TMMIN announces collaboration with leading Indonesian universities to advance automotive research and develop local talent.',
    date: 'November 28, 2025',
    category: 'Events',
    slug: 'university-partnership',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: '100,000 Trees Planted in Reforestation Initiative',
    excerpt: 'Our environmental conservation program reaches a major milestone with 100,000 trees planted across West Java.',
    date: 'November 20, 2025',
    category: 'Sustainability',
    slug: 'reforestation-milestone',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'New Employee Training Center Opens',
    excerpt: 'State-of-the-art training facility will enhance skill development for our workforce and prepare them for Industry 4.0.',
    date: 'November 15, 2025',
    category: 'Events',
    slug: 'training-center',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Quality Award from Toyota Motor Corporation',
    excerpt: 'TMMIN receives the prestigious Quality Excellence Award from Toyota Motor Corporation for outstanding manufacturing quality.',
    date: 'November 8, 2025',
    category: 'Awards',
    slug: 'tmc-quality-award',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&q=80',
  },
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="News & Updates"
        title="Latest From TMMIN"
        description="Stay informed about our latest developments, achievements, and contributions to Indonesia's automotive industry."
      />

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article, index) => (
                <NewsCard key={article.slug} {...article} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive the latest news and updates from TMMIN.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
