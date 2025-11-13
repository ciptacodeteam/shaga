import TransformSection from '@/components/section/beranda/TransformingSection';
import WorkSection from '@/components/section/beranda/WorkSection';
import CommunitySection from '@/components/section/layanankami/Community';
import FeatureSection from '@/components/section/tentangkami/Feature';
import GetinQuote from '@/components/section/layanankami/GetinQuote';
import HeroService from '@/components/section/layanankami/HeroService';
import LogisticService from '@/components/section/layanankami/LogisticService';
import { locales } from '@/i18n/routing';

export async function generateStaticParams() {
  const params: { locale: string }[] = [];
  for (const locale of locales) {
    params.push({ locale });
  }

  return params;
}

export default function LayananKami() {
  return (
    <>
      <HeroService />
      <CommunitySection />
      <TransformSection />
      <WorkSection />
      <LogisticService />
      {/* <WorkProcess /> */}
      <GetinQuote />
    </>
  );
}
