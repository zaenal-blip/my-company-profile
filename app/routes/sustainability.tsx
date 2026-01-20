import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { 
  Leaf, 
  Zap, 
  Recycle, 
  Droplets, 
  Sun, 
  TreePine, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Layout from '@/components/layout/layout';
import Hero from '@/components/sections/hero';
import SectionHeader from '@/components/ui/sectionheader';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const environmentalGoals = [
  { label: 'Carbon Emission Reduction', progress: 75, target: '50% by 2030' },
  { label: 'Renewable Energy Usage', progress: 60, target: '80% by 2030' },
  { label: 'Water Recycling Rate', progress: 85, target: '95% by 2030' },
  { label: 'Waste Recycling Rate', progress: 92, target: '100% by 2030' },
];

const initiatives = [
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Large-scale solar panel installations across our manufacturing facilities generate clean, renewable energy.',
    stat: '15MW',
    statLabel: 'Solar Capacity',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Advanced water treatment and recycling systems minimize freshwater consumption in our operations.',
    stat: '85%',
    statLabel: 'Water Recycled',
  },
  {
    icon: Recycle,
    title: 'Zero Waste',
    description: 'Comprehensive waste management programs ensure materials are recycled, repurposed, or responsibly disposed.',
    stat: '92%',
    statLabel: 'Waste Recycled',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Smart energy management systems and LED lighting reduce electricity consumption throughout facilities.',
    stat: '30%',
    statLabel: 'Energy Saved',
  },
];

const csrPrograms = [
  {
    title: 'Education Support',
    description: 'Scholarships and vocational training programs for underprivileged youth.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Community Health',
    description: 'Health clinics and wellness programs for local communities.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Environmental Conservation',
    description: 'Tree planting and ecosystem restoration initiatives.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Disaster Relief',
    description: 'Rapid response and recovery support for affected communities.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=400&q=80',
  },
];

const Sustainability = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Sustainability & Environment"
        title="Driving a Greener Future"
        description="Environmental responsibility is at the core of everything we do. We're committed to sustainable manufacturing that protects our planet for future generations."
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Environmental Commitment */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Our Commitment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Carbon Neutral by 2030
              </h2>
              <p className="text-muted-foreground mb-6">
                We have set ambitious targets to achieve carbon neutrality across all our
                manufacturing operations by 2030. This comprehensive approach includes
                transitioning to renewable energy, improving energy efficiency, and
                implementing innovative carbon capture solutions.
              </p>
              <p className="text-muted-foreground mb-8">
                Our environmental challenge 2050 aims for zero CO2 emissions across our
                entire value chain, from raw materials to end-of-life vehicle recycling.
              </p>

              <div className="space-y-6">
                {environmentalGoals.map((goal) => (
                  <div key={goal.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{goal.label}</span>
                      <span className="text-sm text-muted-foreground">{goal.target}</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/xev.png"
                  alt="Green manufacturing"
                  className="w-full h-full object-cover object-[20%_10%]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <Leaf className="h-8 w-8 mb-2" />
                <p className="text-3xl font-bold">2030</p>
                <p className="text-sm opacity-90">Carbon Neutral Target</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section id="green" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Green Initiatives"
            title="Sustainable Manufacturing Practices"
            description="We implement comprehensive environmental programs across all our facilities to minimize our ecological footprint."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <initiative.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{initiative.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-2xl font-bold text-primary">{initiative.stat}</p>
                  <p className="text-xs text-muted-foreground">{initiative.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Reduction */}
      <section id="carbon" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Carbon Reduction"
            title="Lowering Our Carbon Footprint"
            description="Our multi-faceted approach to carbon reduction encompasses every aspect of our manufacturing operations."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-linear-to-br from-primary to-primary/80 text-primary-foreground p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Key Carbon Reduction Strategies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Transitioning to 100% renewable electricity',
                  'Installing high-efficiency manufacturing equipment',
                  'Implementing smart energy management systems',
                  'Electrifying our vehicle fleet and logistics',
                  'Partnering with low-carbon suppliers',
                  'Investing in carbon capture technology',
                  'Optimizing production processes for efficiency',
                  'Employee training on energy conservation',
                ].map((strategy) => (
                  <div key={strategy} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">{strategy}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <TreePine className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Reforestation</h3>
              <p className="text-muted-foreground mb-6">
                We've planted over 100,000 trees across Indonesia as part of our
                carbon offset and ecosystem restoration program.
              </p>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <p className="text-sm text-muted-foreground">Trees Planted</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community & CSR */}
      <section id="community" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Social Responsibility"
            title="Community Impact"
            description="Beyond environmental sustainability, we're committed to making a positive impact on the communities where we operate."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {csrPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-card p-8 rounded-2xl border border-border"
          >
            <div className="grid lg:grid-cols-4 gap-8 text-center">
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Community Members Helped</p>
              </div>
              <div>
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold">$5M+</p>
                <p className="text-sm text-muted-foreground">CSR Investment Annually</p>
              </div>
              <div>
                <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold">100K+</p>
                <p className="text-sm text-muted-foreground">Trees Planted</p>
              </div>
              <div>
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm text-muted-foreground">Scholarships Awarded</p>
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
            <Leaf className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Sustainability Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for
              sustainability and innovation. Explore career opportunities at TMMIN.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/careers">
                Explore Careers
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
