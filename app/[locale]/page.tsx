import GetInTouch from '@/components/section/beranda/GetInTouchSection';
import HeroSection from '@/components/section/beranda/HeroSection';
import PartnerClient from '@/components/section/beranda/PartnerClient';
import SolutionSection from '@/components/section/beranda/SolutionSection';
import TransformSection from '@/components/section/beranda/TransformingSection';
import ValueSection from '@/components/section/beranda/ValuesSection';
import VisionMissionSection from '@/components/section/beranda/VisionMisionSection';
import { locales } from '@/i18n/routing';

export async function generateStaticParams() {
  const params: { locale: string }[] = [];
  for (const locale of locales) {
    params.push({ locale });
  }

  return params;
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <SolutionSection />
      <ValueSection />
      <TransformSection />
      {/* <WorkSection /> */}
      {/* <ServicesSection /> */}
      <PartnerClient />
      <GetInTouch />
    </>
  );
}
