import AboutUs from "../component/AboutUs"
import { AboutBanner } from "../component/banner/AboutBanner"
import WhyTravelWithUs from "../component/WhyTravelWithUs"

export const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutUs />
            <WhyTravelWithUs />
        </>
    )
}