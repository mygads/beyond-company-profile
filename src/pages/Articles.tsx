import ArticlesSection from "../component/articles/Articles"
import { ArticlesBanner } from "../component/banner/ArticlesBanner"
import LetsJoinJourney from "../component/LestJoinJourney"
import PopularDestinations from "../component/PopularDestination"

export const Articles = () => {
    return (
        <>
            <ArticlesBanner />
            <ArticlesSection />
            <LetsJoinJourney />
            <PopularDestinations />
        </>
    )
}