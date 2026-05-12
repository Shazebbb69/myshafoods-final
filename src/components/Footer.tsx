import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-saffron flex items-center justify-center rounded-sm">
                <span className="text-brand-charcoal font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">MYSHA FOODS</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Premium wholesale seafood supplier. Providing top-quality, sustainably sourced seafood to restaurants, hotels, and retailers pan-India.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-saffron">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact & Enquiry</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-saffron">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Wharf Road, Marine Estate<br/>Mumbai, MH 400001</li>
              <li>sales@myshafoods.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mysha Foods. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-saffron transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-saffron transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-saffron transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
