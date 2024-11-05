import React from 'react';
import { DollarSign, TrendingUp, Shield, Users, BarChart, Zap } from 'lucide-react';

const revenueStreams = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Partner Onboarding",
    fee: "From $999/month",
    features: [
      "Platform integration support",
      "Custom reward configuration",
      "Technical implementation assistance"
    ]
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Transaction Fees",
    fee: "0.5% - 2%",
    features: [
      "Token conversion fees",
      "Cross-brand redemptions",
      "Volume-based pricing"
    ]
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics Suite",
    fee: "From $499/month",
    features: [
      "Customer behavior insights",
      "Cross-brand analytics",
      "Predictive modeling"
    ]
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Premium Features",
    fee: "Custom Pricing",
    features: [
      "NFT reward generation",
      "Custom smart contracts",
      "Advanced automation rules"
    ]
  }
];

const valueProps = [
  {
    title: "Frictionless Onboarding",
    description: "Boost conversion rates with seamless signup",
    metrics: [
      "45% higher signup completion",
      "68% faster onboarding time",
      "3x increase in reward activation"
    ]
  },
  {
    title: "Data-Driven Insights",
    description: "Unlock customer behavior patterns",
    metrics: [
      "360° customer view",
      "Real-time analytics",
      "Predictive spending patterns"
    ]
  },
  {
    title: "Cost Optimization",
    description: "Reduce operational overhead",
    metrics: [
      "75% lower fraud rates",
      "60% reduced admin costs",
      "Automated reconciliation"
    ]
  }
];

export default function RevenueModel() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Revenue Model & Partner Benefits
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transparent pricing with clear value generation
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                {stream.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">
                {stream.title}
              </h3>
              <p className="mt-2 text-lg font-bold text-center text-indigo-600">
                {stream.fee}
              </p>
              <ul className="mt-4 space-y-2">
                {stream.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Partner Value Proposition
          </h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8"
              >
                <h4 className="text-xl font-semibold text-gray-900">
                  {prop.title}
                </h4>
                <p className="mt-2 text-gray-600">
                  {prop.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {prop.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Shield className="h-5 w-5 text-green-500 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Network Benefits */}
        <div className="mt-20 bg-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Network Growth Benefits
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold">200+</div>
              <div className="mt-2">Partner Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">5M+</div>
              <div className="mt-2">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">85%</div>
              <div className="mt-2">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">3x</div>
              <div className="mt-2">ROI Average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}