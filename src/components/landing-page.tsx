"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { PitchSections as ServicesSection } from '@/components/sections/pitch-sections';
import { PmpShowcase as ProductSection } from '@/components/sections/pmp-showcase';
import { FounderVision } from '@/components/sections/founder-vision';
import { Partners } from '@/components/sections/partners';
import { ComingSoon } from '@/components/sections/coming-soon';
import { InquiryAnalyzer } from '@/components/sections/inquiry-analyzer';


export const PITCH_DATA = {
  title: 'Our Services',
  description: 'We deliver a suite of deep tech solutions designed to tackle India\'s most complex challenges.',
  sections: [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      content: 'Scalable, secure, and sovereign cloud infrastructure to power Indian enterprises and government.',
      keywords: 'cloud infrastructure'
    },
    {
      id: 'ai-saas',
      title: 'AI/ML SaaS',
      content: 'Sector-specific AI SaaS products for real estate, legal, and HR, powered by our proprietary VAM-GPT models.',
      keywords: 'ai saas machine learning'
    },
    {
      id: 'ar-vr',
      title: 'AR/VR for Industry & Defense',
      content: 'Immersive AR/VR solutions for industrial training, defense simulations, and enhanced user experiences.',
      keywords: 'ar vr industry'
    },
    {
      id: 'camera-os',
      title: 'Camera & Android OS Enhancement',
      content: 'Advanced camera and operating system optimizations for superior performance and AI integration on mobile devices.',
      keywords: 'android camera'
    },
  ],
};


export function LandingPage() {
  const [highlightedSections, setHighlightedSections] = useState<string[]>([]);
 
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductSection />
        <ServicesSection highlightedSections={highlightedSections} />
        <InquiryAnalyzer setHighlightedSections={setHighlightedSections} />
        <FounderVision />
        <Partners />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
