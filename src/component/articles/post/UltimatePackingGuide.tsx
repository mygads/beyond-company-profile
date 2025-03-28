import type React from "react"
import { Link } from "react-router-dom"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import LetsJoinJourney from "../../LestJoinJourney"
import ArticlesSection from "../Articles"
import Images from "../../../assets/images/articles/articles2.png"
import ContactUs from "../../ContactUs"

const UltimatePackingGuide: React.FC = () => {
    return (
        <>
            <ArticlesBanner />
            <main className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="my-12">
                        <Link to="/articles" className="text-amber-600 hover:underline">
                            ← Back to Articles
                        </Link>
                        </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
                    Ultimate Packing Guide for Students on an Educational Tour
                    </h1>
                    <p className="text-center text-gray-600 mb-6">by Adam Cuppy</p>

                    <div className="mb-8">
                    <img
                        src={Images}
                        alt="Packing for a trip"
                        className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                    />
                    </div>

                    <div className="prose prose-lg max-w-none">
                    <p className="text-lg">
                        Packing for an educational tour can be tricky—you don't want to overpack, but missing out on essentials can
                        ruin your experience. Here's a smart checklist to help students pack efficiently!
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-3">Essential Items for Your Study Tour:</h2>
                        <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Travel Documents (passport, student ID, visa, tickets)
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Clothing Essentials (versatile outfits, comfortable shoes, weather-appropriate gear)
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Tech Gear (laptop/tablet, chargers, power bank)
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Study Materials (notebooks, pens, research papers)
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Personal Care Items (toiletries, medications, sunscreen)
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Emergency Kit (first aid, contact list, small cash)
                        </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-3">Pro Packing Tips</h2>
                        <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">◆</span>
                            Roll your clothes to save space.
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">◆</span>
                            Pack a small day bag for city tours.
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">◆</span>
                            Keep digital copies of important documents.
                        </li>
                        </ul>
                    </div>

                    <div className="mt-12 border-t pt-6">
                        <p className="text-lg">
                        A well-packed bag ensures a smooth and enjoyable study tour experience. Pack smart, travel light, and
                        focus on learning!
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

export default UltimatePackingGuide

