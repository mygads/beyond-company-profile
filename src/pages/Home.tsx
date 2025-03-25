import ExpertiseSection from "../component/ExpertiseSection"
import ServicePreview from "../component/ServicePreview"
import { HomeBanner } from "../component/banner/HomeBanner"
import WhyChooseUs from "../component/WhyChooseUs"
import ReviewSlider from "../component/ReviewSlider"
import GetInTouch from "../component/GetInTouch"

export const Home = () => {
    return (
        <>
            <HomeBanner />
            <ExpertiseSection />
            <ServicePreview />
            <WhyChooseUs />
            <ReviewSlider />
            <GetInTouch />
        </>
    )
}