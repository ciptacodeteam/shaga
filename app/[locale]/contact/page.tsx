import DiscussionCtaSection from '@/components/DiscussionCtaSection';
import FaqSection from '@/components/FaqSection';
import { locales } from '@/i18n/routing';
import ContactInformation from '@/components/section/kontak/ContactInformation';
import FindUsSection from '@/components/section/kontak/FindUs';
import HeroContact from '@/components/section/kontak/HeroContact';

export async function generateStaticParams() {
  const params: { locale: string }[] = [];
  for (const locale of locales) {
    params.push({ locale });
  }

  return params;
}

export default function Kontak() {
  return (
    <>
      <HeroContact />
      <ContactInformation />
      <FindUsSection />
      <FaqSection />
      <DiscussionCtaSection />
    </>
  );
}
