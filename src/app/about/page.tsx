import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section for About */}
      <section className="bg-brand-charcoal text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Redefining Seafood Supply</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mysha Foods was founded with a single mission: to bring unparalleled transparency, quality, and reliability to the B2B seafood industry.
          </p>
        </div>
      </section>

      {/* Split Layout: Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-saffron tracking-widest uppercase mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">From Coast to Commerce</h3>
              <div className="text-brand-graphite space-y-6 text-lg leading-relaxed">
                <p>
                  For years, the wholesale seafood supply chain has been fragmented, leading to inconsistent quality and unpredictable pricing for businesses. Mysha Foods was established to bridge this gap.
                </p>
                <p>
                  By partnering directly with sustainable fisheries and investing heavily in state-of-the-art cold-chain logistics, we've built a network that guarantees freshness from the moment the catch leaves the water until it reaches your kitchen or retail shelf.
                </p>
                <p className="font-semibold text-brand-charcoal">
                  Today, we are the trusted supply partner for over 500 premium establishments across the country.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-brand-cream border border-brand-graphite/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#222] to-[#444] opacity-10" />
                {/* Image Placeholder */}
                <span className="text-brand-graphite/30 font-bold uppercase tracking-widest text-xl">Facility / Port Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values: Minimal 3-column layout */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-saffron tracking-widest uppercase mb-2">Core Principles</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal">What Drives Us</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-t-2 border-brand-charcoal pt-6">
              <h4 className="text-2xl font-bold text-brand-charcoal mb-4">Uncompromising Quality</h4>
              <p className="text-brand-graphite leading-relaxed">
                We implement strict quality control protocols at every stage. From visual inspections at the docks to microbiological testing in our processing facilities, we never cut corners.
              </p>
            </div>
            <div className="border-t-2 border-brand-saffron pt-6">
              <h4 className="text-2xl font-bold text-brand-charcoal mb-4">Sustainable Sourcing</h4>
              <p className="text-brand-graphite leading-relaxed">
                The ocean is our most valuable resource. We actively partner with fisheries that use responsible harvesting methods to ensure the long-term viability of marine ecosystems.
              </p>
            </div>
            <div className="border-t-2 border-brand-charcoal pt-6">
              <h4 className="text-2xl font-bold text-brand-charcoal mb-4">Absolute Reliability</h4>
              <p className="text-brand-graphite leading-relaxed">
                In the hospitality industry, timing is everything. Our logistics network is optimized for punctuality, ensuring you have the inventory you need, exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-saffron tracking-widest uppercase mb-2">Operations</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal">The Sourcing Process</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-graphite/20 before:to-transparent">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-charcoal text-brand-saffron font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream border border-brand-graphite/5 group-hover:border-brand-saffron/50 transition-colors">
                  <h4 className="text-xl font-bold text-brand-charcoal mb-2">Direct Procurement</h4>
                  <p className="text-brand-graphite text-sm leading-relaxed">Our agents stationed at key coastal hubs select the finest catch directly from trusted vessels upon arrival.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-charcoal text-brand-saffron font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream border border-brand-graphite/5 group-hover:border-brand-saffron/50 transition-colors">
                  <h4 className="text-xl font-bold text-brand-charcoal mb-2">Quality & Processing</h4>
                  <p className="text-brand-graphite text-sm leading-relaxed">Catch is transported via reefer trucks to our ISO-certified facilities for grading, cleaning, and custom processing.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-charcoal text-brand-saffron font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream border border-brand-graphite/5 group-hover:border-brand-saffron/50 transition-colors">
                  <h4 className="text-xl font-bold text-brand-charcoal mb-2">Blast Freezing / Packing</h4>
                  <p className="text-brand-graphite text-sm leading-relaxed">Products are IQF or block frozen rapidly to lock in freshness, then packed according to business client specifications.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-charcoal text-brand-saffron font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">4</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream border border-brand-graphite/5 group-hover:border-brand-saffron/50 transition-colors">
                  <h4 className="text-xl font-bold text-brand-charcoal mb-2">Pan-India Dispatch</h4>
                  <p className="text-brand-graphite text-sm leading-relaxed">Our temperature-monitored logistics fleet delivers the final product directly to your facility, ensuring an unbroken cold chain.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="bg-brand-charcoal text-center py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to upgrade your seafood supply?</h2>
        <Link href="/contact">
          <Button variant="primary" size="lg">Become a Partner</Button>
        </Link>
      </section>
    </div>
  );
}
