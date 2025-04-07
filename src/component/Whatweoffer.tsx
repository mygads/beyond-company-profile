"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { GiTeacher } from "react-icons/gi"
import { PiBowlFood } from "react-icons/pi"

interface OfferingProps {
    title: string
    description: string
    icon: React.ReactNode
    position: "left" | "right"
    delay: number
}

const Offering: React.FC<OfferingProps> = ({ title, description, icon, position, delay }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                    entry.target.classList.add("opacity-100")
                    entry.target.classList.remove("translate-y-10", "opacity-0")
                    }, delay)
                    observer.unobserve(entry.target)
                }
                })
            },
            { threshold: 0.1 },
        )

        const currentElement = cardRef.current;
        
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [delay])

    return (
        <div
            ref={cardRef}
            className={`
                flex flex-col items-center bg-[#FFFAE9] rounded-lg p-8 
                transition-all duration-700 ease-out transform opacity-0 translate-y-10
                hover:shadow-lg hover:-translate-y-1 hover:bg-amber-100/80
                md:flex-row md:items-start md:gap-6 text-center
                ${position === "left" ? "md:flex-row" : "md:flex-row-reverse"}
            `}
            >
            <div className={`md:flex-1 ${position === "left" ? "md:pr-4" : "md:pl-4"}`}>
                <h3 className="text-xl font-medium mb-3 md:text-left">{title}</h3>
                <p className="text-[#6C6245] md:text-left text-md">{description}</p>
            </div>
            <div className="mt-4 md:mt-0 flex-shrink-0 md:mx-auto md:my-auto">
                <div className="w-16 h-16 md:w-26 md:h-26 p-4 md:p-8  rounded-full bg-[linear-gradient(230deg,#D2C088_21.81%,rgba(214,207,185,0.31)_48.56%,#D2C088_81.36%)] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    {icon}
                </div>
            </div>
        </div>
    )
}

const WhatWeOfferSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    
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

        const currentElement = sectionRef.current;
        
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])

    return (
        <section className="pb-10 md:pb-16 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div
                    ref={sectionRef}
                    className="text-center mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">What We Offer</h2>
                    <p className="text-gray-600 text-base mx-auto">
                        Whether you're a student, an educator, or a passionate explorer, our tours are designed to inspire and educate.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Offering
                        title="Educational Tours"
                        description="Organizing comprehensive educational tours for school and university groups. Our programs are designed to complement academic curricula, with hands-on learning in various subjects."
                        icon={
                            <GiTeacher size={64} />
                        }
                        position="left"
                        delay={100}
                    />

                    <Offering
                        title="Homestay Experiences"
                        description="Dive into authentic cultural exchanges by staying with local families, experiencing their traditions, and embracing a new way of life."
                        icon={
                        <svg
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-800"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            <circle cx="12" cy="7" r="1"></circle>
                        </svg>
                        }
                        position="right"
                        delay={200}
                    />

                    <Offering
                        title="Culinary & Cultural Immersion"
                        description="Explore the heart of a destination through its food! Our curated meal plans feature traditional dishes, cooking experiences, and cultural storytelling."
                        icon={<PiBowlFood size={64} />
                        }
                        position="left"
                        delay={300}
                    />

                    <Offering
                        title="Customised Travel Packages"
                        description="Learn beyond the classroom! Our educational programs combine hands-on activities with exploration, making learning an unforgettable adventure."
                        icon={
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-800"
                            >
                                <path d="M22 2L11 13"></path>
                                <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                            </svg>
                        }
                        position="right"
                        delay={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default WhatWeOfferSection

