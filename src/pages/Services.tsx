import { ServicesBanner } from "../component/banner/ServicesBanner"
import ContactUs from "../component/ContactUs"
import ServiceSlider from "../component/ServicesSlider"

export const Services = () => {
    return (
        <>
            <ServicesBanner />
            <ServiceSlider />
            <ContactUs />
        </>
    )
}