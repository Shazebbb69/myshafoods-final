import React from 'react';
import Link from 'next/link';

export function CategoryStrip() {
  const categories = [
    { name: "Premium Fish", slug: "fish", desc: "Wild-caught & Farmed" },
    { name: "Prawns & Shrimp", slug: "prawns", desc: "All sizes available" },
    { name: "Shellfish", slug: "shellfish", desc: "Lobsters, Crabs, Oysters" },
    { name: "Cephalopods", slug: "cephalopods", desc: "Squid, Cuttlefish, Octopus" },
    { name: "Processed", slug: "processed", desc: "Fillets & Portions" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-sm font-bold text-brand-saffron tracking-widest uppercase mb-2">Our Catalogue</h2>
          <h3 className="text-4xl font-bold text-brand-charcoal">Explore the Range</h3>
        </div>
        <Link href="/products" className="hidden md:block text-brand-charcoal font-semibold border-b-2 border-brand-charcoal hover:text-brand-saffron hover:border-brand-saffron transition-colors pb-1">
          View All Products
        </Link>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 pt-4 px-4 container mx-auto snap-x snap-mandatory hide-scrollbar gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={`/products?category=${cat.slug}`}
              className="flex-none w-[280px] md:w-[350px] group cursor-pointer snap-start"
            >
              <div className="h-[400px] bg-brand-cream relative overflow-hidden flex items-end p-8 border border-brand-graphite/10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-brand-charcoal/5 transition-colors group-hover:bg-brand-charcoal/10" />
                
                {/* Category Text Content */}
                <div className="relative z-10 w-full">
                  <h4 className="text-2xl font-bold text-brand-charcoal mb-2">{cat.name}</h4>
                  <p className="text-brand-graphite font-medium">{cat.desc}</p>
                  
                  <div className="mt-6 flex items-center text-brand-saffron font-bold text-sm uppercase tracking-wide opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Explore 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-4 md:hidden">
        <Link href="/products" className="inline-block text-brand-charcoal font-semibold border-b-2 border-brand-charcoal pb-1">
          View All Products
        </Link>
      </div>
    </section>
  );
}
