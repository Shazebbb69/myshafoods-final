import React from 'react';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-brand-cream min-h-screen py-12 lg:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Partner with Mysha Foods</h1>
          <p className="text-xl text-brand-graphite">
            Looking for a reliable seafood supplier for your business? Fill out the bulk enquiry form below and our sales team will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white border border-brand-graphite/10 shadow-sm overflow-hidden">
          
          {/* Left Side: Contact Details & Map */}
          <div className="w-full lg:w-2/5 bg-brand-charcoal text-white p-8 md:p-12 flex flex-col justify-between relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-saffron/20 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-brand-saffron text-sm font-bold uppercase tracking-wider mb-2">Corporate Office</h4>
                  <p className="text-gray-300 leading-relaxed">
                    123 Wharf Road, Marine Estate<br/>
                    Mumbai, Maharashtra 400001<br/>
                    India
                  </p>
                </div>
                
                <div>
                  <h4 className="text-brand-saffron text-sm font-bold uppercase tracking-wider mb-2">Direct Contact</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Sales: +91 98765 43210<br/>
                    Support: +91 98765 43211<br/>
                    Email: sales@myshafoods.com
                  </p>
                </div>
                
                <div>
                  <h4 className="text-brand-saffron text-sm font-bold uppercase tracking-wider mb-2">Business Hours</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Monday - Saturday<br/>
                    08:00 AM - 06:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-12 relative z-10 h-48 w-full bg-[#333] border border-white/10 flex items-center justify-center">
               <span className="text-gray-500 font-medium uppercase tracking-widest text-sm">Google Maps Embed</span>
            </div>
          </div>

          {/* Right Side: Bulk Enquiry Form */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-6">Bulk Order Enquiry</h3>
            <p className="text-brand-graphite mb-8">Please provide details about your business and requirements to help us serve you better.</p>
            
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  );
}
