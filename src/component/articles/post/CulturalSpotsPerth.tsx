"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Images from "../../../assets/images/articles/articles8.png"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import LetsJoinJourney from "../../LestJoinJourney"
import ArticlesSection from "../Articles"
import ContactUs from "../../ContactUs"

const BestCulturalSpotsPerth: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Capture current ref values
        const headerElement = headerRef.current;
        const contentElement = contentRef.current;

        const headerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-y-10", "opacity-0")
                headerObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const contentObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-y-10", "opacity-0")
                }, 300)
                contentObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        if (headerElement) {
        headerObserver.observe(headerElement)
        }

        if (contentElement) {
        contentObserver.observe(contentElement)
        }

        return () => {
        if (headerElement) {
            headerObserver.unobserve(headerElement)
        }
        if (contentElement) {
            contentObserver.unobserve(contentElement)
        }
        }
    }, [])

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

                <div ref={headerRef} className="mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
                    <span className="mr-2">🏛️</span> Best Cultural Spots in Perth for International Students
                    </h1>
                    <p className="text-center text-gray-600 mb-6">by Naomi Watts</p>

                    <div className="mb-8">
                    <img
                        src={Images}
                        alt="Historic building in Perth"
                        className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                    />
                    </div>
                </div>

                <div
                    ref={contentRef}
                    className="prose prose-lg max-w-none transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <p className="text-lg">
                    Perth is not just about academics—it's a cultural melting pot with vibrant history, art, and
                    entertainment. Here are five cultural hotspots every student should explore:
                    </p>

                    <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="mr-2">🛍️</span> Fremantle Markets
                    </h2>
                    <p>
                        A lively marketplace featuring artisanal goods, fresh produce, and live street performances. A
                        must-visit for a taste of local culture.
                    </p>
                    </div>

                    <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="mr-2">🏛️</span> Western Australian Museum Boola Bardip
                    </h2>
                    <p>Dive into Australia's indigenous history and modern innovations in this state-of-the-art museum.</p>
                    </div>

                    <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="mr-2">🎭</span> His Majesty's Theatre
                    </h2>
                    <p>
                        Experience world-class theatre productions, from Shakespearean plays to modern performances, in one of
                        Australia's oldest theatres.
                    </p>
                    </div>

                    <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="mr-2">🎨</span> Perth Cultural Centre
                    </h2>
                    <p>
                        A creative hub that houses art galleries, the state library, and spaces for cultural events and
                        exhibitions.
                    </p>
                    </div>

                    <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="mr-2">🌊</span> Elizabeth Quay
                    </h2>
                    <p>
                        A scenic riverside precinct where art meets nature. Take a stroll along the waterfront and admire
                        contemporary sculptures and historic landmarks.
                    </p>
                    </div>

                    <div className="mt-12 border-t pt-6">
                    <p className="text-lg">
                        Exploring these cultural gems will enrich your educational experience in Perth and provide a deeper
                        understanding of Australian heritage and contemporary life.
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

export default BestCulturalSpotsPerth

