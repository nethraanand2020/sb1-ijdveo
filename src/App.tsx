import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Features from './components/Features';
import CustomerJourney from './components/CustomerJourney';
import BlockchainStructure from './components/BlockchainStructure';
import { PartnerIntegration } from './components/PartnerIntegration';
import RevenueModel from './components/RevenueModel';
import TestingFramework from './components/TestingFramework';
import Partners from './components/Partners';
import Security from './components/Security';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <CustomerJourney />
        <BlockchainStructure />
        <PartnerIntegration />
        <RevenueModel />
        <TestingFramework />
        <Security />
        <Partners />
      </div>
    </div>
  );
}