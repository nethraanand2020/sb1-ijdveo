import React from 'react';
import {
  UserPlus,
  Coins,
  Repeat,
  Gift,
  Trophy,
  ArrowRight,
  CheckCircle,
  Wallet,
  Bell,
  Sparkles
} from 'lucide-react';

const journeySteps = [
  {
    id: 'onboarding',
    title: 'Quick Onboarding',
    icon: <UserPlus className="h-6 w-6" />,
    description: 'Start earning rewards in seconds',
    features: [
      'One-click social login',
      'Minimal data collection',
      'Progressive profile building'
    ]
  },
  {
    id: 'earning',
    title: 'Earn Everywhere',
    icon: <Coins className="h-6 w-6" />,
    description: 'Collect rewards across all partner brands',
    features: [
      'Real-time reward tracking',
      'Cross-brand earnings',
      'Instant notifications'
    ]
  },
  {
    id: 'redeeming',
    title: 'Universal Redemption',
    icon: <Gift className="h-6 w-6" />,
    description: 'Use rewards at any partner store',
    features: [
      'Cross-brand redemption',
      'Real-time balance updates',
      'Transparent conversion rates'
    ]
  },
  {
    id: 'exchange',
    title: 'Smart Exchange',
    icon: <Repeat className="h-6 w-6" />,
    description: 'Convert between reward types instantly',
    features: [
      'Automated conversions',
      'Best rate matching',
      'Instant transfers'
    ]
  },
  {
    id: 'nft',
    title: 'NFT Rewards',
    icon: <Trophy className="h-6 w-6" />,
    description: 'Exclusive digital collectibles',
    features: [
      'Digital ownership proof',
      'Exclusive experiences',
      'Special event access'
    ]
  }
];

const features = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Unified Dashboard',
    description: 'Track all your rewards in one place with real-time updates and detailed analytics'
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: 'Smart Notifications',
    description: 'Get instant updates about new rewards, redemption opportunities, and special offers'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Personalized Experience',
    description: 'Enjoy tailored rewards and recommendations based on your preferences'
  }
];

export default function CustomerJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Reward Journey
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience seamless rewards across our partner network
          </p>
        </div>

        {/* Journey Steps */}
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 ml-16">
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-indigo-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Enhanced User Experience
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  {feature.icon}
                </div>
                <h4 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}