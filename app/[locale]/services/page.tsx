import { locales } from '@/i18n/routing';
import CommunitySection from '@/section/layanankami/Community';
import GetinQuote from '@/section/layanankami/GetinQuote';
import HeroService from '@/section/layanankami/HeroService';
import LogisticService from '@/section/layanankami/LogisticService';
import WorkProcess from '@/section/layanankami/WorkProcess';

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
      <WorkProcess />
      <GetinQuote />
    </>
  );
}
