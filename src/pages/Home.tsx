import { HomeBanner } from "../component/banner/HomeBanner"
import ChooseYourTour from "../component/ChooseYourTour"
import ContactUs from "../component/ContactUs"
import ExperienceNewAdventure from "../component/ExperienceNewAdvanture"
import LetsJoinJourney from "../component/LestJoinJourney"
import QnASection from "../component/QnASection"
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
            <LetsJoinJourney />
            <QnASection />
            <ContactUs />
        </>
    )
}