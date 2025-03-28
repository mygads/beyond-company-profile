import { ServicesBanner } from "../component/banner/ServicesBanner"
import ContactUs from "../component/ContactUs"
import CurriculumSection from "../component/Curriculum"
import OurServices from "../component/OurServices"
import WhatWeOfferSection from "../component/WhatWeOffer"

export const Services = () => {
    return (
        <>
            <ServicesBanner />
            <OurServices />
            <WhatWeOfferSection />
            <CurriculumSection />
            <ContactUs />
        </>
    )
}