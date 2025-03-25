import { AboutUsSection } from "../component/AboutUs"
import { AboutUsBanner } from "../component/banner/AboutUsBanner"
import MissionVision from "../component/MissionVision"

export const About = () => {
    return (
        <>
            <AboutUsBanner />
            <AboutUsSection />
            <MissionVision />
        </>
    )
}