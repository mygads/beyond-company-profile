import { HomeBanner } from "../component/banner/HomeBanner"
import ChooseYourTour from "../component/ChooseYourTour"
import ExperienceNewAdventure from "../component/ExperienceNewAdvanture"
import TopValuesForYou from "../component/TopValuesForYou"
import Whatweoffer from "../component/WhatWeOffer"

export const Home = () => {
    return (
        <>
            <HomeBanner />
            <Whatweoffer />
            <TopValuesForYou />
            <ChooseYourTour />
            <ExperienceNewAdventure />
        </>
    )
}