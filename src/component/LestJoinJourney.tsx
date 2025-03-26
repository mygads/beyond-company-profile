"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Images from "../assets/images/lets-join-the-journey.png"

const LetsJoinJourney: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-y-10", "opacity-0")
                observer.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const imageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100", "rotate-0")
                entry.target.classList.remove("opacity-0", "-rotate-6")
                }, 200)
                imageObserver.unobserve(entry.target)
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
                entry.target.classList.remove("translate-x-10", "opacity-0")
                }, 400)
                contentObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentImageElement = imageRef.current
        const currentContentElement = contentRef.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentImageElement) {
        imageObserver.observe(currentImageElement)
        }

        if (currentContentElement) {
        contentObserver.observe(currentContentElement)
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentImageElement) {
            imageObserver.unobserve(currentImageElement)
        }
        if (currentContentElement) {
            contentObserver.unobserve(currentContentElement)
        }
        }
    }, [])

    return (
        <section className="py-16 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div
                    ref={sectionRef}
                    className="bg-[#6C6245] rounded-2xl p-4 md:p-5 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <div className="flex flex-col md:flex-row md:items-center ">
                        {/* Left Column - Image (1/4 width) */}
                        <div className="md:w-1/4 mb-8 md:mb-0">
                            <div
                                ref={imageRef}
                                className="transition-all duration-700 ease-out transform opacity-0 -rotate-6 origin-center"
                            >                                
                                <img
                                    src={Images}
                                    alt="Airplane flying over landscape"
                                    className="w-[60%] md:w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content (3/4 width) */}
                        <div
                            ref={contentRef}
                            className="md:w-3/4 text-center transition-all duration-700 lg:pr-50"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-playfair">Lets Join The Journey!</h2>
                            <p className="text-lg md:text-xl text-[#D9D9D9] mb-6">
                                <span className="inline-block mr-2">✈</span> Looking for a customized study tour in Perth?
                                <span className="font-semibold"> Click the button below</span> for expert planning and unforgettable
                                learning experiences!
                            </p>

                            <Link
                                to="/tours"
                                className="inline-flex items-center px-4 py-2 bg-[#ECE5CD] text-[#3E3A2B] rounded-2xl font-medium transition-all duration-300 hover:bg-white hover:shadow-lg"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 8 16 12 12 16"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                                EXPLORE OUR TOURS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LetsJoinJourney

