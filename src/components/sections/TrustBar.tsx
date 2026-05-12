import React from 'react';

export function TrustBar() {
  const stats = [
    { value: "500+", label: "Business Clients" },
    { value: "10 Years", label: "Industry Experience" },
    { value: "Pan-India", label: "Cold-Chain Delivery" },
    { value: "100%", label: "Quality Assurance" }
  ];

  return (
    <div className="bg-brand-saffron text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/90 text-sm md:text-base font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
