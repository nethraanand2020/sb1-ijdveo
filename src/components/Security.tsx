import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';

export default function Security() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Built on blockchain technology with multiple layers of protection
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Blockchain Security</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Immutable transaction records and transparent reward tracking
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Lock className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Multi-Factor Auth</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Enhanced account security with seamless MFA integration
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Key className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Contracts</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Automated and secure execution of reward rules and transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}