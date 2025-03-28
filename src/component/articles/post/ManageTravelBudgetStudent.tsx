"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Images from "../../../assets/images/articles/articles7.png"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import LetsJoinJourney from "../../LestJoinJourney"
import ArticlesSection from "../Articles"
import ContactUs from "../../ContactUs"

const ManageTravelBudgets: React.FC = () => {
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

        // Store current ref values
        const currentHeaderRef = headerRef.current
        const currentContentRef = contentRef.current

        if (currentHeaderRef) {
        headerObserver.observe(currentHeaderRef)
        }

        if (currentContentRef) {
        contentObserver.observe(currentContentRef)
        }

        return () => {
        if (currentHeaderRef) {
            headerObserver.unobserve(currentHeaderRef)
        }
        if (currentContentRef) {
            contentObserver.unobserve(currentContentRef)
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
                <span className="mr-2">💰</span> How to Manage Travel Budgets for Student Tours
                </h1>
                <p className="text-center text-gray-600 mb-6">by Himal Turn</p>

                <div className="mb-8">
                <img
                    src={Images}
                    alt="Travel budget planning"
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                />
                </div>
            </div>

            <div
                ref={contentRef}
                className="prose prose-lg max-w-none transition-all duration-700 ease-out transform opacity-0 translate-y-10"
            >
                <p className="text-lg">
                Traveling as a student doesn't mean breaking the bank. With smart planning, you can enjoy a rich and
                fulfilling study tour experience without overspending. Here's how:
                </p>

                <div className="mt-8">
                <h2 className="text-2xl font-bold mb-3">
                    <span className="mr-2">💵</span> Set a Budget in Advance
                </h2>
                <p>
                    Plan your expenses for accommodation, transport, meals, and activities. Allocating a contingency fund
                    ensures you're prepared for unexpected costs.
                </p>
                </div>

                <div className="mt-8">
                <h2 className="text-2xl font-bold mb-3">
                    <span className="mr-2">🚌</span> Use Public Transport
                </h2>
                <p>
                    Perth offers free bus services in the city center and affordable student fares for trains and ferries.
                    Opt for these options to save money while exploring.
                </p>
                </div>

                <div className="mt-8">
                <h2 className="text-2xl font-bold mb-3">
                    <span className="mr-2">🍽️</span> Eat Smart & Save More
                </h2>
                <p>
                    Dining out daily can be costly. Look for budget-friendly food courts, student meal deals, or even cook
                    your own meals if possible.
                </p>
                </div>

                <div className="mt-8">
                <h2 className="text-2xl font-bold mb-3">
                    <span className="mr-2">🎫</span> Look for Student Discounts
                </h2>
                <p>
                    Many attractions, museums, and cultural sites offer special rates for students. Always carry your
                    student ID to enjoy exclusive discounts.
                </p>
                </div>

                <div className="mt-12 border-t pt-6">
                <p className="text-lg">
                    With these budget-conscious strategies, you can make the most of your educational tour without financial
                    stress. Remember, smart spending allows you to focus on what truly matters—the learning experience!
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

export default ManageTravelBudgets

