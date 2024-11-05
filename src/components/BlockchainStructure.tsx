import React from 'react';
import { Code, Coins, Key, Shield, Zap, GitBranch } from 'lucide-react';

const smartContracts = [
  {
    title: "Token Management",
    icon: <Coins className="h-6 w-6" />,
    code: `contract LoyaltyToken {
  mapping(address => uint256) public balances;
  mapping(address => mapping(address => uint256)) public conversions;
  
  function earnRewards(address user, uint256 amount) external {
    balances[user] += amount;
    emit RewardsEarned(user, amount);
  }
}`,
    description: "Manages reward token issuance, transfers, and balances across the network"
  },
  {
    title: "Conversion Logic",
    icon: <GitBranch className="h-6 w-6" />,
    code: `contract TokenConverter {
  function convert(
    address fromToken,
    address toToken,
    uint256 amount
  ) external returns (uint256) {
    uint256 convertedAmount = getConversionRate(fromToken, toToken) * amount;
    emit TokenConverted(msg.sender, fromToken, toToken, amount);
    return convertedAmount;
  }
}`,
    description: "Handles cross-brand token conversions with real-time rates"
  },
  {
    title: "NFT Rewards",
    icon: <Zap className="h-6 w-6" />,
    code: `contract ExclusiveNFT {
  function mintExclusiveReward(
    address user,
    uint256 tokenId,
    string memory uri
  ) external {
    _safeMint(user, tokenId);
    _setTokenURI(tokenId, uri);
    emit ExclusiveRewardMinted(user, tokenId);
  }
}`,
    description: "Issues and manages exclusive NFT-based rewards"
  }
];

const architectureFeatures = [
  {
    title: "Instant Onboarding",
    icon: <Key className="h-6 w-6" />,
    description: "Zero-friction signup with immediate reward access",
    details: [
      "Social login integration",
      "Automated wallet creation",
      "Welcome rewards issuance"
    ]
  },
  {
    title: "Security Layer",
    icon: <Shield className="h-6 w-6" />,
    description: "Multi-layered security architecture",
    details: [
      "Transaction encryption",
      "Fraud prevention",
      "Audit trails"
    ]
  },
  {
    title: "Smart Automation",
    icon: <Code className="h-6 w-6" />,
    description: "Automated reward management",
    details: [
      "Dynamic rate adjustment",
      "Expiration handling",
      "Compliance checks"
    ]
  }
];

export default function BlockchainStructure() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Blockchain Architecture
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Secure, scalable, and user-friendly reward management
          </p>
        </div>

        {/* Smart Contracts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Smart Contract Structure
          </h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {smartContracts.map((contract, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {contract.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        {contract.title}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {contract.description}
                  </p>
                  <div className="mt-4 bg-gray-800 rounded-md p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{contract.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Core Features
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {architectureFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
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
                <ul className="mt-4 space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}