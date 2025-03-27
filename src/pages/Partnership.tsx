import { PartnershipBanner } from "../component/banner/PartnershipBanner"
import ContactUsPartnership from "../component/ContactUsPartnership"
import HostFamilies from "../component/HostFamilies"
import WhoCanHost from "../component/WhoCanHost"
import WhyBecomeHostFamily from "../component/WhyBecomeAHostFamilies"

export const Partnership = () => {
    return (
        <>
            <PartnershipBanner />
            <HostFamilies />
            <WhyBecomeHostFamily />
            <WhoCanHost />
            <ContactUsPartnership />
        </>
    )
}