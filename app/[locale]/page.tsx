'use client';

import GetInTouch from "@/section/beranda/GetInTouchSection";
import HeroSection from "@/section/beranda/HeroSection";
import PartnerClient from "@/section/beranda/PartnerClient";
import ServicesSection from "@/section/beranda/ServiceSection";
import SolutionSection from "@/section/beranda/SolutionSection";
import TestimonialSection from "@/section/beranda/TestimonialSection";
import TransformSection from "@/section/beranda/TransformingSection";
import ValueSection from "@/section/beranda/ValuesSection";
import VisionMissionSection from "@/section/beranda/VisionMisionSection";
import WorkSection from "@/section/beranda/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <SolutionSection />
      <ValueSection />
      <TransformSection />
      <WorkSection />
      <ServicesSection />
      <PartnerClient />
      <TestimonialSection />
      <GetInTouch />
    </>
  );
}
