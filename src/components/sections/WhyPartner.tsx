import React from 'react';
import { Truck, ShieldCheck, Anchor } from 'lucide-react';

export function WhyPartner() {
  const reasons = [
    {
      icon: <Anchor className="w-10 h-10 text-brand-saffron" />,
      title: "Direct Sourcing",
      desc: "We work directly with fisheries and coastal networks, ensuring full traceability, sustainability, and competitive pricing for bulk orders."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-saffron" />,
      title: "Stringent QC",
      desc: "Every batch undergoes rigorous quality checks. We adhere to international food safety standards, guaranteeing premium grade produce every time."
    },
    {
      icon: <Truck className="w-10 h-10 text-brand-saffron" />,
      title: "Reliable Logistics",
      desc: "Our temperature-controlled supply chain ensures your seafood arrives fresh and frozen exactly as requested, right on schedule."
    }
  ];

  return (
    <section className="py-24 bg-brand-cream border-t border-brand-graphite/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-saffron tracking-widest uppercase mb-2">Why Partner With Us</h2>
          <h3 className="text-4xl font-bold text-brand-charcoal mb-6">Built for Business</h3>
          <p className="text-lg text-brand-graphite">
            We understand the demands of the hospitality and retail industries. Mysha Foods is designed to be your most reliable seafood supply partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6 bg-white w-20 h-20 flex items-center justify-center border border-brand-graphite/10">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-charcoal mb-4">{reason.title}</h4>
              <p className="text-brand-graphite leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
