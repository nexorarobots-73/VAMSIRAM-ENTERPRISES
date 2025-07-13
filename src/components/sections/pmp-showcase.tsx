"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const showcaseItems = [
  {
    src: "/images/pmp-showcase/landing-screen.png",
    alt: "Landing Screen",
    caption: "Welcome to Post My Property.",
    hint: "mobile app screen"
  },
  {
    src: "/images/pmp-showcase/get-started-screen.png",
    alt: "Get Started Screen",
    caption: "Effortless onboarding with phone-based login.",
    hint: "mobile app screen"
  },
  {
    src: "/images/pmp-showcase/auth-screen.png",
    alt: "Auth/Login Screen",
    caption: "Secure and simple authentication.",
    hint: "mobile app login"
  },
  {
    src: "/images/pmp-showcase/otp-screen.png",
    alt: "OTP Verification Screen",
    caption: "Fast OTP verification for enhanced security.",
    hint: "mobile verification screen"
  },

  {
    src: "/images/pmp-showcase/register-screen.png",
    alt: "Register Screen",
    caption: "Quick and easy registration process.",
    hint: "mobile app register"
  },
  {
    src: "/images/pmp-showcase/home-screen.png",
    alt: "Home Feed / Listings",
    caption: "Curated property feeds with AI-powered filters.",
    hint: "real estate listings"
  },
  {
    src: "/images/pmp-showcase/buyers-screen.png",
    alt: "Buyer Dashboard",
    caption: "Interactive dashboards for buyers and sellers.",
    hint: "dashboard data analytics"
  },
];

export function PmpShowcase() {
  return (
    <section id="pmp-showcase" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Post My Property (PMP)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Search. List. Sell. Smarter. Our flagship platform revolutionizes real estate with AI-driven insights and streamlined workflows.
          </p>
        </div>
        <div className="flex justify-center">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <CarouselContent>
                {showcaseItems.map((item, index) => (
                  <CarouselItem key={index} className="flex flex-col items-center">
                    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg w-full">
                      <CardContent className="p-0">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={800}
                          className="w-full h-auto object-contain aspect-[9/16]"
                          data-ai-hint={item.hint}
                          priority={index === 0}
                        />
                      </CardContent>
                    </Card>
                    <p className="mt-4 text-center text-sm text-muted-foreground font-medium">{item.caption}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
