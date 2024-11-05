import React from 'react';
import { Repeat, Shield, Coins, Users, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: <Repeat className="h-6 w-6 text-indigo-600" />,
    title: "Cross-brand Redemption",
    description: "Exchange and redeem rewards seamlessly across multiple brands within our ecosystem"
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: "Blockchain Security",
    description: "Transparent and immutable transaction records backed by blockchain technology"
  },
  {
    icon: <Coins className="h-6 w-6 text-indigo-600" />,
    title: "Smart Token Exchange",
    description: "Automated conversion rates and instant token exchanges between partner brands"
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: "Unified Account System",
    description: "Single sign-on with social login integration and secure MFA protection"
  },
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: "Smart Contracts",
    description: "Automated reward rules and transparent execution of loyalty programs"
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-600" />,
    title: "Partner Integration",
    description: "Easy-to-implement APIs for seamless integration with partner platforms"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Revolutionary Loyalty Management
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Powered by blockchain technology for seamless rewards across brands
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}