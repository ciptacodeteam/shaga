import DiscussionCtaSection from '@/components/DiscussionCtaSection';
import FaqSection from '@/components/FaqSection';
import ContactInformation from '@/section/kontak/ContactInformation';
import FindUsSection from '@/section/kontak/FindUs';
import HeroContact from '@/section/kontak/HeroContact';

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
