"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Image from "../assets/images/experience-home-section.png"
import { FaUtensils } from "react-icons/fa6"

interface ExperienceItemProps {
    title: string
    description: string
    icon: React.ReactNode
    delay: number
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, icon, delay }) => {
    const itemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                        entry.target.classList.add("opacity-100")
                        entry.target.classList.remove("translate-x-[-20px]", "opacity-0")
                        }, delay)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 },
        )

        const currentElement = itemRef.current

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
            ref={itemRef}
            className="flex items-start gap-4 mb-8 transition-all duration-700 ease-out transform opacity-0 translate-x-[-20px]"
        >
            <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[linear-gradient(230deg,#D2C088_21.81%,rgba(214,207,185,0.31)_48.56%,#D2C088_81.36%)] flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-[#888888] ">{description}</p>
            </div>
        </div>
    )
}

const ExperienceNewAdventure: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

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
                            entry.target.classList.add("opacity-100")
                            entry.target.classList.remove("translate-x-20", "opacity-0")
                        }, 300)
                        imageObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentImageElement = imageRef.current

        if (currentElement) {
            observer.observe(currentElement)
        }

        if (currentImageElement) {
            imageObserver.observe(currentImageElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
            if (currentImageElement) {
                imageObserver.unobserve(currentImageElement)
            }
        }
    }, [])

    return (
        <section className="py-12 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column - Text Content */}
                    <div>
                        <div
                            ref={sectionRef}
                            className="transition-all duration-700 ease-out transform opacity-0 translate-y-10 mb-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair text-center md:text-left">
                                Experience The New Adventure
                            </h2>
                            <p className="text-gray-600 mb-8 ">
                                We offer more than just a trip! Beyond Dreams Tours creates enriching experiences that blend education,
                                cultural immersion, and culinary delights. Here's why we stand out:
                            </p>
                        </div>

                        <ExperienceItem
                            title="Immersive Learning Experience"
                            description="Every tour is designed to provide real-world experiences that enhance academic knowledge and cultural understanding."
                            icon={
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gray-800"
                                    >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                            }
                            delay={100}
                        />

                        <ExperienceItem
                            title="Authentic Cultural Exchange"
                            description="Live with welcoming host families, experience local traditions firsthand, and build meaningful cross-cultural connections."
                            icon={
                                <svg
                                    width="32"
                                    height="32"
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
                                </svg>
                            }
                            delay={200}
                        />

                        <ExperienceItem
                            title="Handpicked Local Cuisine"
                            description="Savor the finest local dishes, carefully selected to give you the best flavors and an unforgettable dining experience."
                            icon={<FaUtensils size={32} className="text-gray-800" />}
                            delay={300}
                        />
                    </div>

                    {/* Right Column - Image */}
                    <div ref={imageRef} className="transition-all duration-700 ease-out transform opacity-0 translate-x-20">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={Image}
                                alt="Travelers experiencing a guided tour"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceNewAdventure

