import React from 'react';
import { Code, Database, Lock, Zap, Settings, Users } from 'lucide-react';

export function PartnerIntegration() {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/v1/auth/signup',
      description: 'Single sign-on and user creation',
      code: `curl -X POST https://api.zentartika.com/v1/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{
    "user": {
      "email": "user@example.com",
      "provider_id": "partner_123",
      "metadata": { "source": "retail_app" }
    }
  }'`
    },
    {
      method: 'POST',
      endpoint: '/v1/rewards/earn',
      description: 'Record reward earning events',
      code: `curl -X POST https://api.zentartika.com/v1/rewards/earn \\
  -H "Authorization: Bearer {token}" \\
  -d '{
    "user_id": "u_123",
    "amount": 100,
    "type": "points",
    "metadata": { "transaction_id": "t_456" }
  }'`
    },
    {
      method: 'POST',
      endpoint: '/v1/rewards/redeem',
      description: 'Process reward redemption',
      code: `curl -X POST https://api.zentartika.com/v1/rewards/redeem \\
  -H "Authorization: Bearer {token}" \\
  -d '{
    "user_id": "u_123",
    "amount": 50,
    "reward_id": "r_789"
  }'`
    }
  ];

  const integrationFeatures = [
    {
      icon: <Lock />,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and JWT-based authentication with automatic token refresh'
    },
    {
      icon: <Database />,
      title: 'Real-time Sync',
      description: 'WebSocket support for instant updates and minimal latency'
    },
    {
      icon: <Settings />,
      title: 'Flexible Configuration',
      description: 'Customizable reward rules and conversion rates per partner'
    }
  ];

  const securityMeasures = [
    {
      icon: <Lock />,
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest'
    },
    {
      icon: <Users />,
      title: 'Role-Based Access',
      description: 'Granular permissions for partner data access'
    },
    {
      icon: <Zap />,
      title: 'Real-time Monitoring',
      description: 'Instant alerts for suspicious activities'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Partner Integration
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Seamless API integration for partners
          </p>
        </div>

        {/* API Documentation */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Core API Endpoints
          </h3>
          <div className="space-y-8">
            {apiEndpoints.map((api, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center">
                    <span className="px-3 py-1 text-sm font-semibold text-white bg-indigo-600 rounded-full">
                      {api.method}
                    </span>
                    <code className="ml-4 text-sm text-gray-600">
                      {api.endpoint}
                    </code>
                  </div>
                  <p className="mt-4 text-gray-600">{api.description}</p>
                  <div className="mt-4 bg-gray-800 rounded-md p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{api.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Integration Features
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {integrationFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Measures */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Security & Compliance
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {securityMeasures.map((measure, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  {measure.icon}
                </div>
                <h4 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {measure.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}