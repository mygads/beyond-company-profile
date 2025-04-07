import type React from "react"
import { Link } from "react-router-dom"
import Images from "../../../assets/images/articles/articles3.png"
import LetsJoinJourney from "../../LestJoinJourney"
import ArticlesSection from "../Articles"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import ContactUs from "../../ContactUs"

const WhyPerthBestDestination: React.FC = () => {
    return (
        <>
            <ArticlesBanner />
            <main className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                <div className="my-12">
                    <Link to="/articles" className="text-amber-600 hover:underline">
                        ← Back to Articles
                    </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
                    Why Perth is the Best Destination for Educational Tours
                    </h1>
                    <p className="text-center text-gray-600 mb-6">by Aaron Patterson</p>

                    <div className="mb-8">
                    <img
                        src={Images}
                        alt="Perth skyline"
                        className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                    />
                    </div>

                    <div className="prose prose-lg max-w-none">
                    <p className="text-md">
                        Perth, Australia, is not just about stunning beaches—it's also an educational hub with top universities,
                        research institutions, and historical landmarks. Let's explore why Perth is the perfect study tour
                        destination!
                    </p>

                    <div className="mt-8">
                        <h2 className="text-lg font-bold mb-3">1. Home to World-Class Universities</h2>
                        <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2">🏛️</span>
                            University of Western Australia (UWA) – Offers insightful campus tours & STEM workshops.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">🏛️</span>
                            Curtin University – Specializes in innovation and sustainability research.
                        </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-bold mb-3">2. Rich Historical & Cultural Attractions</h2>
                        <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2">🏰</span>
                            Fremantle Prison – Learn about Australia's convict history.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">🏛️</span>
                            WA Museum Boola Bardip – Discover Western Australia's indigenous heritage.
                        </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-bold mb-3">3. Hands-On Learning Experiences</h2>
                        <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2">🔬</span>
                            Scitech – A science museum with interactive exhibits.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">🌿</span>
                            Kings Park & Botanic Garden – A great spot for environmental studies.
                        </li>
                        </ul>
                    </div>

                    <div className="mt-12 border-t pt-6">
                        <p className="text-md">
                        From academic exposure to cultural enrichment, Perth offers an all-in-one educational travel experience.
                        </p>
                    </div>
                    </div>

                    
                </div>
            </main>
            <LetsJoinJourney />
            <ArticlesSection />
            <ContactUs />
        </>
    )
}

export default WhyPerthBestDestination

