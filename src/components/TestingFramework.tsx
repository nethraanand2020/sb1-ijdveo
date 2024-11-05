import React from 'react';
import { 
  TestTube, 
  Shield, 
  FileCheck, 
  UserCheck, 
  Lock, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Scale
} from 'lucide-react';

const testingSuites = [
  {
    title: "Signup Flow Testing",
    icon: <UserCheck className="h-6 w-6" />,
    description: "Comprehensive testing of user onboarding processes",
    tests: [
      {
        name: "Social Login Integration",
        scenarios: [
          "OAuth flow validation",
          "Data mapping verification",
          "Error handling scenarios"
        ]
      },
      {
        name: "Form Validation",
        scenarios: [
          "Real-time field validation",
          "Cross-browser compatibility",
          "Mobile responsiveness"
        ]
      },
      {
        name: "Performance Metrics",
        scenarios: [
          "Load time optimization",
          "API response times",
          "Resource optimization"
        ]
      }
    ]
  },
  {
    title: "Transaction Testing",
    icon: <RefreshCw className="h-6 w-6" />,
    description: "End-to-end validation of reward transactions",
    tests: [
      {
        name: "Reward Issuance",
        scenarios: [
          "Point calculation accuracy",
          "Multi-brand transactions",
          "Conversion rate precision"
        ]
      },
      {
        name: "Redemption Flow",
        scenarios: [
          "Balance verification",
          "Cross-brand redemption",
          "Failed transaction handling"
        ]
      },
      {
        name: "Token Conversion",
        scenarios: [
          "Exchange rate accuracy",
          "Minimum balance checks",
          "Transaction rollback testing"
        ]
      }
    ]
  },
  {
    title: "Security Testing",
    icon: <Shield className="h-6 w-6" />,
    description: "Comprehensive security validation framework",
    tests: [
      {
        name: "Authentication Tests",
        scenarios: [
          "Session management",
          "Token validation",
          "Access control verification"
        ]
      },
      {
        name: "Encryption Validation",
        scenarios: [
          "Data-at-rest encryption",
          "Transport layer security",
          "Key rotation testing"
        ]
      },
      {
        name: "Penetration Testing",
        scenarios: [
          "Vulnerability scanning",
          "SQL injection prevention",
          "XSS attack prevention"
        ]
      }
    ]
  }
];

const complianceFramework = [
  {
    title: "GDPR Compliance",
    icon: <Scale className="h-6 w-6" />,
    requirements: [
      "Explicit consent collection",
      "Data portability support",
      "Right to erasure implementation"
    ]
  },
  {
    title: "CCPA Requirements",
    icon: <FileCheck className="h-6 w-6" />,
    requirements: [
      "Privacy notice display",
      "Opt-out mechanisms",
      "Data collection transparency"
    ]
  },
  {
    title: "Smart Contract Audits",
    icon: <AlertTriangle className="h-6 w-6" />,
    requirements: [
      "Code quality assessment",
      "Security vulnerability checks",
      "Gas optimization review"
    ]
  }
];

const metrics = [
  {
    label: "Test Coverage",
    value: "98%",
    description: "Of critical paths tested"
  },
  {
    label: "Success Rate",
    value: "99.9%",
    description: "Transaction success rate"
  },
  {
    label: "Response Time",
    value: "<500ms",
    description: "Average API response"
  },
  {
    label: "Compliance Score",
    value: "100%",
    description: "Regulatory compliance"
  }
];

export default function TestingFramework() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Testing & Compliance Framework
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ensuring reliability, security, and regulatory compliance
          </p>
        </div>

        {/* Testing Suites */}
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {testingSuites.map((suite, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {suite.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {suite.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {suite.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-6">
                    {suite.tests.map((test, testIndex) => (
                      <div key={testIndex}>
                        <h4 className="text-sm font-medium text-gray-900">
                          {test.name}
                        </h4>
                        <ul className="mt-2 space-y-2">
                          {test.scenarios.map((scenario, scenarioIndex) => (
                            <li
                              key={scenarioIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {scenario}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Framework */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Regulatory Compliance
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {complianceFramework.map((framework, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  {framework.icon}
                </div>
                <h4 className="mt-4 text-lg font-medium text-center text-gray-900">
                  {framework.title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {framework.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Lock className="h-4 w-4 text-indigo-500 mr-2" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div className="mt-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
              Testing Metrics
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}