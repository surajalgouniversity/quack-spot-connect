
import React from 'react';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Countdown />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
