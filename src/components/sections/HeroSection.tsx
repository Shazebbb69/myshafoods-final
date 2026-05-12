import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-brand-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[85vh]">
          {/* Text Content - Asymmetric (larger portion) */}
          <div className="w-full lg:w-3/5 py-20 lg:py-0 pr-0 lg:pr-12 z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Premium Seafood.<br />
              <span className="text-brand-saffron">Bulk Supply.</span><br />
              Delivered.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              We source, process, and deliver the finest quality seafood to top-tier restaurants, hotels, and retail chains across India. Reliability meets uncompromised quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-500 text-white hover:bg-white hover:text-brand-charcoal hover:border-white">
                  View Catalogue
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image Content - Asymmetric (smaller portion, but visually striking) */}
          <div className="w-full lg:w-2/5 h-[50vh] lg:h-[85vh] relative hidden lg:block">
            {/* The image acts as a stark, corporate abstract or high-end product shot. */}
            <div className="absolute inset-0 bg-brand-charcoal" />
            <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-[#2A2A2A] to-transparent transform -skew-x-12 translate-x-20" />
            
            {/* Using a placeholder visual since we don't have images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 border-4 border-brand-saffron/20 rounded-sm overflow-hidden flex items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#222] to-[#333]" />
               <p className="relative z-10 text-brand-saffron/50 font-bold text-2xl uppercase tracking-widest text-center">Premium<br/>Sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
