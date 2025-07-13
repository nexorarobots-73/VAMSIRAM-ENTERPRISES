"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Brands } from '@/components/sections/brands';
import { PmpShowcase } from '@/components/sections/pmp-showcase';
import { NexoraRobotics } from '@/components/sections/nexora-robotics';
import { ComingSoon } from '@/components/sections/coming-soon';

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Brands />
        <PmpShowcase />
        <NexoraRobotics />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
