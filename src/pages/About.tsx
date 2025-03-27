import AboutUs from "../component/AboutUs"
import { AboutBanner } from "../component/banner/AboutBanner"
import LetsJoinJourney from "../component/LestJoinJourney"
import WhoCanJoin from "../component/WhoCanJoin"
import WhyTravelWithUs from "../component/WhyTravelWithUs"

export const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutUs />
            <WhyTravelWithUs />
            <WhoCanJoin />
            <LetsJoinJourney />
        </>
    )
}