import React from 'react';

export function ClientLogos() {
  // Placeholder array for logos
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-16 bg-white border-y border-brand-graphite/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-brand-graphite uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {placeholders.map((item) => (
            <div key={item} className="flex items-center justify-center">
              {/* Abstract shapes to represent logos */}
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 ${item % 2 === 0 ? 'rounded-full' : 'rounded-sm'} bg-brand-charcoal`} />
                <span className="font-bold text-xl text-brand-charcoal tracking-tighter">PARTNER {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
