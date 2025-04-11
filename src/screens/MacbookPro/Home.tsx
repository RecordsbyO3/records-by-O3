import React from "react";
import { Badge } from "../../components/ui/badge";
import { Navbar } from "../../components/Navbar/Navbar";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MissionSection } from "./sections/MissionSection/MissionSection";
import { PartneringSection } from "./sections/PartneringSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhatMakesUsDifferentSection } from "./sections/WhatMakesUsDifferentSection";
import { WhoWeWorkWithSection } from "./sections/WhoWeWorkWithSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full min-h-screen overflow-x-hidden">
      <div className="bg-black w-full max-w-[1512px] relative px-4 md:px-6 lg:px-8">
        <Navbar />
        {/* Testimonials Section */}
        <TestimonialsSection />


          {/* Features Section with Badge */}
          <div className="flex flex-col items-center mt-8 " id="features">
          <Badge className="inline-flex items-center justify-center gap-2.5 p-2.5 rounded-[50px] [background:conic-gradient(from_180deg_at_56%_62%,rgba(140,179,255,1)_6%,rgba(42,109,239,1)_43%)]">
            <span className="text-sm leading-[14px] [font-family:'Gellix-Medium',Helvetica] font-medium text-white text-center whitespace-nowrap">
              Key features
            </span>
          </Badge>
        </div>
        {/* What Makes Us Different Title */}
        <div className="w-full flex flex-col items-center mt-8 px-4">
          <h2 className="[font-family:'Etude_Noire-Medium',Helvetica] font-medium text-white text-3xl md:text-[50px] text-center tracking-[-1.00px] leading-tight md:leading-[50px] whitespace-pre-wrap md:whitespace-nowrap">
            What Makes Us Different
          </h2>
          <p className="mt-4 max-w-[699px] [font-family:'Gellix-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0.70px] leading-[21px] px-4">
            REDEFINING HOW CREDENTIALS ARE CREATED, STORED, AND TRUSTED.
          </p>
        </div>

        {/* What Makes Us Different Section */}
        <WhatMakesUsDifferentSection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Who We Work With Section */}
        <div className="px-4 md:px-0">
          <WhoWeWorkWithSection />
        </div>

        {/* Mission Section */}
        <MissionSection />

        {/* Contact Section */}
        <div className="overflow-x-hidden">
          <ContactSection />
        </div>

        {/* Partnering Section with Background */}
        <div className="w-full relative mt-8 overflow-hidden">
          <div className="w-full max-w-[1428px] mx-auto relative">
            <div className="w-full h-[1015px] bg-[#2b71f824] rounded-[714px/507.5px] blur-[250px]">
              <div className="relative w-full md:w-[1191px] h-[714px] md:top-[151px] md:left-[99px] bg-[url(/mask-group.png)] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0">
              <PartneringSection />
            </div>
          </div>
        </div>

      

        {/* Features Section */}
        <FeaturesSection />

        {/* Hero Section */}
        <HeroSection />
      </div>
    </div>
  );
};