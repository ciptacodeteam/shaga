import { locales } from '@/i18n/routing';
import CommunitySection from '@/components/section/layanankami/Community';
import GetinQuote from '@/components/section/layanankami/GetinQuote';
import HeroService from '@/components/section/layanankami/HeroService';
import LogisticService from '@/components/section/layanankami/LogisticService';
import WorkProcess from '@/components/section/layanankami/WorkProcess';
// import TransformSection from '@/components/section/beranda/TransformingSection';
// import WorkSection from '@/components/section/beranda/WorkSection';

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
      <LogisticService />
      {/* <TransformSection /> */}
      {/* <WorkSection /> */}
      <WorkProcess />
      <GetinQuote />
    </>
  );
}
