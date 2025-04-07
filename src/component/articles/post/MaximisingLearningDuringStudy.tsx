"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import images from "../../../assets/images/articles/articles6.png"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import LetsJoinJourney from "../../LestJoinJourney"
import ArticlesSection from "../Articles"
import ContactUs from "../../ContactUs"

const MaximisingLearningDuringStudyTour: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
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

        const headerElement = headerRef.current;
        const contentElement = contentRef.current;

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
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
                <span className="mr-2">📚</span> Maximising Learning During a Study Tour
                </h1>
                <p className="text-center text-gray-600 mb-6">by Tony Hawk</p>

                <div className="mb-8">
                <img
                    src={images}
                    alt="Students studying outdoors"
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                />
                </div>
            </div>

            <div
                ref={contentRef}
                className="prose prose-lg max-w-none transition-all duration-700 ease-out transform opacity-0 translate-y-10"
            >
                <p className="text-base">
                A study tour is more than just a field trip—it's an opportunity to gain real-world insights beyond the
                classroom. To make the most of your academic journey, follow these essential tips:
                </p>

                <div className="mt-8">
                <h2 className="text-lg font-bold mb-3">
                    <span className="mr-2">🚀</span> Prepare Before You Travel
                </h2>
                <p>
                    Research the destinations and institutions you'll be visiting. Having background knowledge ensures
                    you're ready to engage and ask insightful questions.
                </p>
                </div>

                <div className="mt-8">
                <h2 className="text-lg font-bold mb-3">
                    <span className="mr-2">📝</span> Keep a Study Journal
                </h2>
                <p>
                    Take notes, jot down observations, and document key learnings from site visits. Digital or handwritten,
                    a travel journal will help retain valuable insights.
                </p>
                </div>

                <div className="mt-8">
                <h2 className="text-lg font-bold mb-3">
                    <span className="mr-2">👋</span> Engage with Locals & Experts
                </h2>
                <p>
                    Don't just stick with your group—talk to tour guides, lecturers, and students. Learning from firsthand
                    experiences can provide perspectives you won't find in textbooks.
                </p>
                </div>

                <div className="mt-8">
                <h2 className="text-lg font-bold mb-3">
                    <span className="mr-2">🗣️</span> Participate in Discussions
                </h2>
                <p>
                    Ask questions, attend seminars, and actively engage in activities. A study tour is the perfect setting
                    to enhance your critical thinking and communication skills.
                </p>
                </div>

                <div className="mt-12 border-t pt-6">
                <p className="text-base">
                    By following these strategies, you'll transform your study tour from a simple trip into a profound
                    learning experience that will benefit your academic and personal growth for years to come.
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

export default MaximisingLearningDuringStudyTour

