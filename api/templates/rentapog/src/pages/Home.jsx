import React from 'react';
import ScrollingTicker from '@/components/landing/ScrollingTicker';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import RiskFreeOffer from '@/components/landing/RiskFreeOffer';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import BlogSection from '@/components/landing/BlogSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollingTicker />
      <HeroSection />
      <HowItWorks />
      <RiskFreeOffer />
      <FeaturesGrid />
      <BlogSection />
      <Footer />
    </div>
  );
}
