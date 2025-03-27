import { ServicesBanner } from "../component/banner/ServicesBanner"
import ContactUs from "../component/ContactUs"
import CurriculumSection from "../component/Curriculum"
import OurServices from "../component/OurServices"
import WhatWeOffer from "../component/WhatWeOffer"

export const Services = () => {
    return (
        <>
            <ServicesBanner />
            <OurServices />
            <WhatWeOffer />
            <CurriculumSection />
            <ContactUs />
        </>
    )
}