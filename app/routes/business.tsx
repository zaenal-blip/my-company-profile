import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Car, Cog, Globe, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/layout';
import Hero from '@/components/sections/hero';
import StatsCounter from '@/components/sections/statscounter';
import SectionHeader from '@/components/ui/sectionheader';
import { Button } from '@/components/ui/button';

const stats = [
  { value: 400, suffix: 'K+', label: 'Annual Vehicle Production' },
  { value: 200, suffix: 'K+', label: 'Engine Units Yearly' },
  { value: 80, suffix: '+', label: 'Export Countries' },
  { value: 4, label: 'Manufacturing Plants' },
];

const vehicleModels = [
  {
    name: 'Innova',
    type: 'MPV',
    description: 'Premium multi-purpose vehicle designed for Indonesian families.',
    image: '/innova.avif',
  },
  {
    name: 'Fortuner',
    type: 'SUV',
    description: 'Powerful SUV built for adventure and comfort.',
    image: '/fortuner.webp',
  },
  {
    name: 'Avanza',
    type: 'MPV',
    description: 'Affordable and reliable family transportation.',
    image: '/avanza.avif',
  },
  {
    name: 'Yaris Cross',
    type: 'Hatchback',
    description: 'Compact and stylish urban mobility solution.',
    image: '/yaris.avif',
  },
];

const components = [
  'Engines (gasoline & hybrid)',
  'Transmissions',
  'Stamping parts',
  'Engine casting',
  'Forged parts',
  'Exhaust systems',
];

const exportRegions = [
  { region: 'Middle East', countries: 'Saudi Arabia, UAE, Kuwait, Oman' },
  { region: 'Asia Pacific', countries: 'Philippines, Vietnam, Thailand, Malaysia' },
  { region: 'Africa', countries: 'South Africa, Kenya, Nigeria' },
  { region: 'Central America', countries: 'Mexico, Costa Rica, Panama' },
  { region: 'South America', countries: 'Brazil, Argentina, Chile' },
  { region: 'Oceania', countries: 'Australia, New Zealand, Fiji' },
];

const Business = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        subtitle="Business & Products"
        title="Manufacturing Excellence at Scale"
        description="From vehicle assembly to component production, we deliver quality and innovation across our entire manufacturing operation."
        backgroundImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Stats */}
      <StatsCounter stats={stats} className="bg-secondary/30" />

      {/* Vehicle Production */}
      <section id="vehicles" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Vehicle Production"
            title="Crafting Quality Vehicles"
            description="We manufacture a wide range of Toyota vehicles tailored to meet the diverse needs of customers in Indonesia and around the world."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleModels.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {vehicle.type}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{vehicle.name}</h3>
                  <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-secondary/30 rounded-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Car className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Complete Manufacturing Process</h3>
                <p className="text-muted-foreground mb-4">
                  Our vehicle manufacturing process encompasses all key stages: stamping,
                  welding, painting, and assembly. Each step is carefully controlled using
                  the Toyota Production System to ensure the highest quality standards.
                </p>
                <p className="text-muted-foreground">
                  With state-of-the-art facilities and highly trained workforce, we produce
                  vehicles that meet global Toyota quality standards while being tailored
                  for local market needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-3xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">Production Lines</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Operations</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-3xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Quality Rate</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-3xl font-bold text-primary">ISO</p>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component Production */}
      <section id="components" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Component Production
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precision Engineering
              </h2>
              <p className="text-muted-foreground mb-6">
                Beyond vehicle assembly, we manufacture critical automotive components that
                power Toyota vehicles across the globe. Our component facilities produce
                engines, transmissions, and various precision parts.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {components.map((component) => (
                  <div key={component} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">{component}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">200K+</p>
                  <p className="text-sm text-muted-foreground">Engines/Year</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">150K+</p>
                  <p className="text-sm text-muted-foreground">Transmissions/Year</p>
                </div>
              </div>
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
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80"
                  alt="Engine manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <Cog className="h-8 w-8 mb-2" />
                <p className="font-semibold">Precision</p>
                <p className="text-sm opacity-90">Engineering</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Export */}
      <section id="export" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Global Contribution"
            title="Exporting to the World"
            description="Our vehicles and components reach customers across more than 80 countries, making Indonesia a key hub in Toyota's global manufacturing network."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-2xl border border-border">
                <Globe className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Export Destinations</h3>
                <div className="space-y-4">
                  {exportRegions.map((region) => (
                    <div key={region.region} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <p className="font-semibold text-primary mb-1">{region.region}</p>
                      <p className="text-sm text-muted-foreground">{region.countries}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-linear-to-br from-primary to-primary/80 text-primary-foreground p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Export Achievements</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold">80+</p>
                    <p className="text-sm opacity-90">Countries Served</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">150K+</p>
                    <p className="text-sm opacity-90">Vehicles Exported/Year</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">$2B+</p>
                    <p className="text-sm opacity-90">Annual Export Value</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">#1</p>
                    <p className="text-sm opacity-90">Auto Exporter in Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-4">Strategic Importance</h3>
                <p className="text-muted-foreground">
                  Indonesia serves as a strategic manufacturing hub in Toyota's global
                  production network. Our facilities produce vehicles specifically designed
                  for emerging markets, combining robust engineering with cost efficiency
                  to meet the needs of customers worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Facilities"
            title="World-Class Manufacturing Plants"
            description="Our four strategically located manufacturing facilities combine to form one of the most advanced automotive production networks in Southeast Asia."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <Factory className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Karawang Plant 1</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Main vehicle assembly plant producing Innova, Fortuner, and other key models.
                Features advanced welding, painting, and assembly lines.
              </p>
              <p className="text-sm"><strong>Capacity:</strong> 130,000 units/year</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <Factory className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Karawang Plant 2</h3>
              <p className="text-sm text-muted-foreground mb-4">
                State-of-the-art facility for engine manufacturing and vehicle production
                with focus on hybrid technology.
              </p>
              <p className="text-sm"><strong>Capacity:</strong> 120,000 units/year</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <Factory className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sunter Plant 1</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Engine casting and machining facility producing high-quality engine
                components for domestic and export markets.
              </p>
              <p className="text-sm"><strong>Specialty:</strong> Engine Casting</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <Factory className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sunter Plant 2</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stamping and component manufacturing facility producing body panels
                and structural components.
              </p>
              <p className="text-sm"><strong>Specialty:</strong> Stamping & Components</p>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sustainability in Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn how we're making our manufacturing operations more sustainable
              and environmentally responsible.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/sustainability">
                Explore Sustainability
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Business;
