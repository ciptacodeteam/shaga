import { locales } from '@/i18n/routing';
import CtaSection from '@/components/section/tentangkami/CallToAction';
import GallerySection from '@/components/section/tentangkami/Galery';
import HeroAbout from '@/components/section/tentangkami/HeroAbout';
import MilestoneSection from '@/components/section/tentangkami/Milestone';
import NumberSection from '@/components/section/tentangkami/NumberSection';
import WhoAreWeSection from '@/components/section/tentangkami/WhoAreWe';

export async function generateStaticParams() {
  const params: { locale: string }[] = [];
  for (const locale of locales) {
    params.push({ locale });
  }

  return params;
}

export default function TentangKami() {
  return (
    <>
      <HeroAbout />
      <WhoAreWeSection />
      <NumberSection />
      <MilestoneSection />
      <GallerySection />
      <CtaSection />
    </>
  );
}
