import CtaSection from "@/section/tentangkami/CallToAction";
import GallerySection from "@/section/tentangkami/Galery";
import HeroAbout from "@/section/tentangkami/HeroAbout";
import MilestoneSection from "@/section/tentangkami/Milestone";
import NumberSection from "@/section/tentangkami/NumberSection";
import WhoAreWeSection from "@/section/tentangkami/WhoAreWe";

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
    )
}