'use client';

import HeroSection from "@/section/HeroSection";
import ServicesSection from "@/section/ServiceSection";
import SolutionSection from "@/section/SolutionSection";
import TestimonialSection from "@/section/TestimonialSection";
import TransformSection from "@/section/TransformingSection";
import ValueSection from "@/section/ValuesSection";
import VisionMissionSection from "@/section/VisionMisionSection";
import WorkSection from "@/section/WorkSection";

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
      <TestimonialSection />
    </>
  );
}
