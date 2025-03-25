import { HomeBanner } from "../component/banner/HomeBanner"
import TopValuesForYou from "../component/TopValuesForYou"
import Whatweoffer from "../component/Whatweoffer"

export const Home = () => {
    return (
        <>
            <HomeBanner />
            <Whatweoffer />
            <TopValuesForYou />
        </>
    )
}