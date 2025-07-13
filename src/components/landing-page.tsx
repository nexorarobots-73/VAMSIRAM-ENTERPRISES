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
import { ImageGallery } from '@/components/sections/image-gallery';

export function LandingPage() {
  const [highlightedSections, setHighlightedSections] = useState<string[]>([]);
 
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductSection />
        <ServicesSection highlightedSections={highlightedSections} />
        <ImageGallery />
        <InquiryAnalyzer setHighlightedSections={setHighlightedSections} />
        <FounderVision />
        <Partners />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
