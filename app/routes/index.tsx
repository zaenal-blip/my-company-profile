import { Link } from "react-router";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Award, 
  Shield, 
  Lightbulb, 
  Leaf, 
  RefreshCcw,
  ArrowRight,
  Car,
  Factory,
  Globe,
  Users
} from 'lucide-react';
import Layout from '@/components/layout/layout';
import Hero from '@/components/sections/hero';
import StatsCounter from '@/components/sections/statscounter';
import ValueCard from '@/components/ui/valuecard';
import NewsCard from '@/components/ui/newscard';
import SectionHeader from '@/components/ui/sectionheader';
import { Button } from '@/components/ui/button';


const coreValues = [
  {
    icon: Award,
    title: 'Quality',
    description: 'Unwavering commitment to delivering products that exceed customer expectations through rigorous quality standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously pushing boundaries with cutting-edge technology and creative solutions for the future of mobility.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Prioritizing the safety of our employees, customers, and communities in everything we do.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Leading the way in environmental responsibility through green manufacturing and eco-friendly practices.',
  },
  {
    icon: RefreshCcw,
    title: 'Kaizen',
    description: 'Embracing continuous improvement as a way of life, always seeking better ways to work and serve.',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Years of Excellence' },
  { value: 400, suffix: 'K+', label: 'Vehicles Produced Annually' },
  { value: 8000, suffix: '+', label: 'Dedicated Employees' },
  { value: 80, suffix: '+', label: 'Export Countries' },
];

const latestNews = [
  {
    title: 'TMMIN Achieves Carbon Neutral Milestone in Manufacturing',
    excerpt: 'Our Karawang plant has successfully achieved carbon neutral status, marking a significant step in our sustainability journey.',
    date: 'January 3, 2026',
    category: 'Sustainability',
    slug: 'carbon-neutral-milestone',
    image: '/xev.png',
  },
  {
    title: 'New Hybrid Vehicle Production Line Launched',
    excerpt: 'Expanding our commitment to electrification with a state-of-the-art hybrid vehicle production facility.',
    date: 'December 28, 2025',
    category: 'Production',
    slug: 'hybrid-production-line',
    image: '/velozhev.jpg',
  },
  {
    title: 'TMMIN Receives Manufacturing Excellence Award',
    excerpt: 'Recognized for outstanding quality and innovation in automotive manufacturing.',
    date: 'December 15, 2025',
    category: 'Awards',
    slug: 'excellence-award',
    image: '/award.jpg',
  },
];

const Index = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        size="large"
        subtitle="PT Toyota Motor Manufacturing Indonesia"
        title="Driving Indonesia's Automotive Future"
        description="As a leading automotive manufacturer, we combine innovation, quality, and sustainability to create vehicles that move the nation forward while protecting our planet."
        primaryAction={{ label: 'Explore Our Story', href: '/about' }}
        secondaryAction={{ label: 'View Careers', href: '/careers' }}
        backgroundImage="/pabrik1.jpeg"
      />

      {/* Stats Section */}
      <StatsCounter stats={stats} className="bg-secondary/30" />

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Core Values"
            title="Principles That Drive Us"
            description="These values guide every decision we make, from the factory floor to the boardroom, ensuring we deliver excellence in everything we do."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                About TMMIN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Tomorrow's Mobility Today
              </h2>
              <p className="text-muted-foreground mb-6">
                Since 1971, PT Toyota Motor Manufacturing Indonesia has been at the forefront
                of Indonesia's automotive industry. We combine the legendary Toyota Production
                System with local expertise to manufacture world-class vehicles that serve both
                domestic and international markets.
              </p>
              <p className="text-muted-foreground mb-8">
                Our commitment to quality, continuous improvement (Kaizen), and environmental
                sustainability has made us a trusted partner in Indonesia's economic development.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">4 Plants</p>
                    <p className="text-sm text-muted-foreground">Across Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Global Reach</p>
                    <p className="text-sm text-muted-foreground">Export to 80+ countries</p>
                  </div>
                </div>
              </div>

              <Button asChild className="group">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden">
                <img
                  src="/engine.jpg"
                  alt="TMMIN Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">50+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Business"
            title="Manufacturing Excellence"
            description="From vehicle assembly to component production, we deliver quality at every step of the manufacturing process."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl aspect-3/4"
            >
              <img
                src="/veloz.avif"
                alt="Vehicle Production"
                className="w-full h-full object-cover object-[50%_10%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Car className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold text-background mb-2">Vehicle Production</h3>
                <p className="text-background/80 text-sm">
                  Manufacturing a wide range of Toyota vehicles for domestic and export markets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-3/4"
            >
              <img
                src="/hev.jpg"
                alt="Engine Manufacturing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Factory className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold text-background mb-2">Component Production</h3>
                <p className="text-background/80 text-sm">
                  Precision engineering of engines, transmissions, and essential components.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-3/4"
            >
              <img
                src="/export.avif"
                alt="Global Export"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Globe className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold text-background mb-2">Global Export</h3>
                <p className="text-background/80 text-sm">
                  Supplying vehicles and components to markets across the globe.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="group">
              <Link to="/business">
                Explore Our Business
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Preview */}
      <section className="py-20 md:py-28 bg-secondary/30 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Sustainability
              </p>
              <h2 className="text-black text-3xl md:text-4xl  font-bold mb-6">
                Committed to a Greener Future
              </h2>
              <p className="text-muted-foreground mb-6">
                Environmental responsibility is at the heart of everything we do. From reducing
                carbon emissions to implementing circular economy practices, we're leading the
                way in sustainable manufacturing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="text-muted-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <span>Carbon neutral manufacturing by 2030</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                    <RefreshCcw className=" h-5 w-5" />
                  </div>
                  <span>95% waste recycling rate</span>
                </div>
                <div className=" text-muted-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span>Zero environmental incidents target</span>
                </div>
              </div>

              <Button asChild variant="secondary" className="group">
                <Link to="/sustainability">
                  Our Sustainability Initiatives
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/env.jpg"
                  alt="Solar panels"
                  className="w-full h-full object-cover object-[50%_10%]"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                <img
                  src="/xev.png"
                  alt="Green factory"
                  className="w-full h-full object-cover object-[20%_10%]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <SectionHeader
              subtitle="News & Updates"
              title="Latest From TMMIN"
              align="left"
            />
            <Button asChild variant="outline" className="group self-start">
              <Link to="/news">
                View All News
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <NewsCard key={news.slug} {...news} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of a company that's shaping the future of automotive manufacturing in
              Indonesia. Discover exciting career opportunities at TMMIN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/careers">
                  Explore Careers
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

// index.tsx