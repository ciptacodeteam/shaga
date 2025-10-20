import CommunitySection from "@/section/layanankami/Community";
import GetinQuote from "@/section/layanankami/GetinQuote";
import HeroService from "@/section/layanankami/HeroService";
import LogisticService from "@/section/layanankami/LogisticService";
import WorkProcess from "@/section/layanankami/WorkProcess";

export default function LayananKami() {
    return (
        <>
            <HeroService />
            <CommunitySection />
            <LogisticService />
            <WorkProcess />
            <GetinQuote />
        </>
    )
}