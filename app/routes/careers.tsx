import { motion } from 'framer-motion';
import { Link } from 'react-router';
import {
  Briefcase,
  GraduationCap,
  Heart,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import Layout from '@/components/layout/layout';
import Hero from '@/components/sections/hero';
import SectionHeader from '@/components/ui/sectionheader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous training, skill development, and career growth opportunities.',
  },
  {
    icon: Award,
    title: 'Recognition & Rewards',
    description: 'Performance bonuses, recognition programs, and competitive compensation.',
  },
  {
    icon: Users,
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and generous leave policies.',
  },
];

const jobOpenings = [
  {
    title: 'Production Engineer',
    department: 'Manufacturing',
    location: 'Karawang',
    type: 'Full-time',
    experience: '2-4 years',
  },
  {
    title: 'Quality Assurance Specialist',
    department: 'Quality Control',
    location: 'Karawang',
    type: 'Full-time',
    experience: '3-5 years',
  },
  {
    title: 'Environmental Engineer',
    department: 'Sustainability',
    location: 'Jakarta',
    type: 'Full-time',
    experience: '2-4 years',
  },
  {
    title: 'Supply Chain Analyst',
    department: 'Logistics',
    location: 'Jakarta',
    type: 'Full-time',
    experience: '1-3 years',
  },
  {
    title: 'HR Business Partner',
    department: 'Human Resources',
    location: 'Jakarta',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    title: 'Automation Engineer',
    department: 'Engineering',
    location: 'Karawang',
    type: 'Full-time',
    experience: '3-5 years',
  },
];

const testimonials = [
  {
    quote: "Working at TMMIN has been an incredible journey. The company truly invests in its people and provides opportunities for growth.",
    name: 'Ahmad Pratama',
    role: 'Senior Production Manager',
    years: '12 years at TMMIN',
  },
  {
    quote: "The Kaizen culture here is real. Every day, I'm encouraged to think of ways to improve our processes and make a difference.",
    name: 'Dewi Sartika',
    role: 'Quality Engineer',
    years: '5 years at TMMIN',
  },
  {
    quote: "TMMIN's commitment to sustainability aligns with my personal values. I'm proud to be part of a company that cares about the environment.",
    name: 'Budi Santoso',
    role: 'Environmental Specialist',
    years: '7 years at TMMIN',
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Join Our Team"
        title="Build Your Career With Us"
        description="Be part of a company that's shaping the future of automotive manufacturing in Indonesia. Discover exciting opportunities to grow and make an impact."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
        primaryAction={{ label: 'View Open Positions', href: '#openings' }}
      />

      {/* Why TMMIN */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why TMMIN"
            title="A Great Place to Work"
            description="We believe that our success is built on the talent, dedication, and creativity of our people. That's why we invest in creating an environment where everyone can thrive."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
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
                Our Culture
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The TMMIN Way
              </h2>
              <p className="text-muted-foreground mb-6">
                Our culture is built on the foundations of the Toyota Production System
                and the spirit of continuous improvement. We value teamwork, respect,
                and the pursuit of excellence in everything we do.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Embrace Kaizen - continuous improvement every day',
                  'Respect for people and diverse perspectives',
                  'Challenge ourselves to innovate and grow',
                  'Work together as one team toward shared goals',
                  'Take responsibility and ownership of our work',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">8,000+</p>
                  <p className="text-sm text-muted-foreground">Employees</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Nationalities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">40%</p>
                  <p className="text-sm text-muted-foreground">Women in Leadership</p>
                </div>
              </div>
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&q=80"
                    alt="Office environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Employee Stories"
            title="Hear From Our Team"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Open Positions"
            title="Current Opportunities"
            description="Explore our current job openings and find the perfect role to start or advance your career with TMMIN."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Button size="sm" className="group">
                      Apply Now
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a perfect fit? We're always looking for talented individuals.
            </p>
            <Button variant="outline" className="group">
              Submit General Application
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
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
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our HR team is here to help you with any questions about careers at TMMIN.
              Feel free to reach out to us.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
