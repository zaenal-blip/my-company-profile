import { motion } from 'framer-motion';
import { Link } from "react-router";
import { Target, Eye, Award, Users, Lightbulb, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/layout';
import Hero from '@/components/sections/hero';
import SectionHeader from '@/components/ui/sectionheader';
import Timeline from '@/components/ui/timeline';
import { Button } from '@/components/ui/button';

const historyEvents = [
  {
    year: '1971',
    title: 'Foundation',
    description: 'PT Toyota-Astra Motor was established as a joint venture between Toyota Motor Corporation and PT Astra International.',
  },
  {
    year: '1982',
    title: 'Manufacturing Begins',
    description: 'Started local manufacturing operations, marking the beginning of automotive production in Indonesia.',
  },
  {
    year: '1989',
    title: 'Export Milestone',
    description: 'First export of vehicles and components, expanding our reach to international markets.',
  },
  {
    year: '2003',
    title: 'TMMIN Established',
    description: 'PT Toyota Motor Manufacturing Indonesia (TMMIN) was established as a dedicated manufacturing entity.',
  },
  {
    year: '2013',
    title: 'Karawang Plant 2',
    description: 'Opened second manufacturing plant in Karawang to increase production capacity.',
  },
  {
    year: '2020',
    title: 'Electrification Era',
    description: 'Launched hybrid vehicle production, marking our commitment to sustainable mobility.',
  },
  {
    year: '2024',
    title: 'Carbon Neutral Journey',
    description: 'Achieved significant milestones in our carbon neutrality roadmap.',
  },
];

const tpsElements = [
  {
    icon: Target,
    title: 'Just-In-Time',
    description: 'Producing only what is needed, when it is needed, and in the amount needed to eliminate waste.',
  },
  {
    icon: Eye,
    title: 'Jidoka',
    description: 'Building quality into the manufacturing process with automation that detects abnormalities.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Empowering every team member to contribute to continuous improvement.',
  },
  {
    icon: Lightbulb,
    title: 'Kaizen',
    description: 'Continuous improvement through small, incremental changes that lead to significant results.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="About Us"
        title="Our Story of Excellence"
        description="For over five decades, we have been committed to manufacturing world-class vehicles while contributing to Indonesia's economic growth and sustainable development."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Company Overview */}
      <section id="overview" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Company Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Indonesia's Leading Automotive Manufacturer
              </h2>
              <p className="text-muted-foreground mb-4">
                PT Toyota Motor Manufacturing Indonesia (TMMIN) stands as one of the largest
                automotive manufacturers in Southeast Asia. As a subsidiary of Toyota Motor
                Corporation, we combine global expertise with local innovation to produce
                vehicles that meet the highest standards of quality, safety, and reliability.
              </p>
              <p className="text-muted-foreground mb-4">
                Our manufacturing facilities in Jakarta and Karawang employ thousands of
                skilled workers and utilize the renowned Toyota Production System (TPS) to
                ensure efficiency and quality in every vehicle we produce.
              </p>
              <p className="text-muted-foreground">
                We are not just a manufacturer; we are a partner in Indonesia's development,
                contributing to the nation's economy through job creation, technology transfer,
                and sustainable business practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80"
                    alt="Manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
                    alt="Quality inspection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Purpose"
            title="Vision & Mission"
            description="Guided by a clear vision and mission, we strive to make a positive impact on society and the environment."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most respected and trusted automotive company in Indonesia, leading
                the way in sustainable mobility and contributing to the happiness and prosperity
                of society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To produce high-quality vehicles that meet customer expectations, promote
                environmental sustainability, develop our people, and contribute positively
                to Indonesian society through ethical business practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Journey"
            title="A Legacy of Excellence"
            description="From our humble beginnings to becoming one of Southeast Asia's largest automotive manufacturers, our history is a testament to perseverance and innovation."
          />

          <Timeline events={historyEvents} />
        </div>
      </section>

      {/* Toyota Production System */}
      <section id="tps" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Toyota Production System"
            title="The Foundation of Excellence"
            description="The Toyota Production System (TPS) is the foundation of our manufacturing philosophy, enabling us to eliminate waste, ensure quality, and continuously improve."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tpsElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <element.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{element.title}</h3>
                <p className="text-sm text-muted-foreground">{element.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-card rounded-2xl border border-border"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Kaizen: Continuous Improvement</h3>
                <p className="text-muted-foreground mb-4">
                  Kaizen is more than a methodology—it's a mindset that permeates every aspect
                  of our operations. Every employee, from the factory floor to senior management,
                  is empowered to identify opportunities for improvement and contribute to making
                  our processes better every day.
                </p>
                <p className="text-muted-foreground">
                  This culture of continuous improvement has enabled us to achieve remarkable
                  efficiency gains, reduce waste, and maintain our position as a leader in
                  automotive manufacturing.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full gradient-green flex items-center justify-center">
                    <span className="text-primary-foreground text-6xl font-bold">改善</span>
                  </div>
                  <p className="text-center mt-4 font-medium">Kaizen - Change for Better</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Award className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Our Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn more about our manufacturing operations, products, and global contributions
              to the automotive industry.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/business">
                Explore Our Business
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
