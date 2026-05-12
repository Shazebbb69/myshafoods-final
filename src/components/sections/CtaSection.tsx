import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function CtaSection() {
  return (
    <section className="bg-brand-charcoal text-white py-24 relative overflow-hidden">
      {/* Abstract geometric background elements for corporate feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#222] to-transparent opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-white/5 rounded-full" />
      <div className="absolute top-12 right-12 w-32 h-32 border border-brand-saffron/20 rounded-full" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Looking to source seafood in bulk?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Partner with Mysha Foods for consistent quality, transparent pricing, and reliable delivery. Let's discuss your requirements.
        </p>
        
        <Link href="/contact">
          <Button variant="primary" size="lg" className="px-10 text-lg">
            Let's Talk
          </Button>
        </Link>
      </div>
    </section>
  );
}
