import { ReviewBanner } from "../component/banner/ReviewBanner"
import ContactUs from "../component/ContactUs"
import Reviews from "../component/Reviews"

export const Review = () => {
    return (
        <div className="bg-black">
            <ReviewBanner />
            <Reviews />
            <ContactUs />
        </div>
    )
}