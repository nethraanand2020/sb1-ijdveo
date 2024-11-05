import React from 'react';
import { ArrowRight } from 'lucide-react';

const partners = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    description: "Global technology leader"
  },
  {
    name: "RetailPro",
    logo: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=200&h=200&fit=crop",
    description: "Retail innovation partner"
  },
  {
    name: "FinanceHub",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    description: "Financial services expert"
  }
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our growing network of partners revolutionizing customer loyalty
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <img
                  className="h-12 w-12 rounded-full"
                  src={partner.logo}
                  alt={partner.name}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{partner.name}</h3>
                <p className="mt-2 text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}