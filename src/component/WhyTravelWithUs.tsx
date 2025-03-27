"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Images from "../assets/images/why-travel-with-us.png"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

interface ReasonProps {
    icon: React.ReactNode
    emoji: string
    title: string
    description: string
    delay: number
}

const Reason: React.FC<ReasonProps> = ({ emoji, title, description, delay }) => {
    const itemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("opacity-100")
                            entry.target.classList.remove("translate-x-10", "opacity-0")
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
            className="flex items-start gap-2 md:gap-4 mb-4 md:mb-8 transition-all duration-700 ease-out transform opacity-0 translate-x-10"
        >
            <div className="flex-shrink-0 mt-1">
                <div className="md:w-10 md:h-10 w-8 h-8 rounded-full bg-[linear-gradient(230deg,#D2C088_21.81%,rgba(214,207,185,0.31)_48.56%,#D2C088_81.36%)] flex items-center justify-center p-1">
                    <IoMdCheckmarkCircleOutline size={50} />
                </div>
            </div>
            <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 flex items-center">
                    <span className="mr-2">{emoji}</span> {title}
                </h3>
                <p className="text-md md:text-lg">{description}</p>
            </div>
        </div>
    )
}

const WhyTravelWithUs: React.FC = () => {
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
                entry.target.classList.add("opacity-100", "scale-100")
                entry.target.classList.remove("opacity-0", "scale-95")
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
        <section className="py-16 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div
                    ref={sectionRef}
                    className="text-center mb-12 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">Why Travel With Us?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Image */}
                    <div
                        ref={imageRef}
                        className="transition-all duration-700 ease-out transform opacity-0 order-2 md:order-1"
                    >
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={Images}
                                alt="Students exploring together"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Reasons */}
                    <div className="order-1 md:order-2">
                        <Reason
                            icon={<span>🌎</span>}
                            emoji="🌎"
                            title="Real-World Learning"
                            description="Our programs provide meaningful educational experiences that connect academic knowledge with real-life cultural exploration."
                            delay={100}
                        />

                        <Reason
                            icon={<span>📍</span>}
                            emoji="🛡️"
                            title="Safe & Comfortable Stays"
                            description="We carefully select accommodations, homestay families, and tour guides to ensure a safe and welcoming experience for all travelers."
                            delay={200}
                        />

                        <Reason
                            icon={<span>🔍</span>}
                            emoji="🔍"
                            title="Personalised Experiences"
                            description="Every trip is uniquely designed to fit your interests, age group, and learning objectives, offering the perfect balance of education and adventure."
                            delay={300}
                        />

                        <Reason
                            icon={<span>👨‍🏫</span>}
                            emoji="👨‍🏫"
                            title="Expert Guidance"
                            description="Our tours are led by knowledgeable guides and industry experts to ensure an enriching experience."
                            delay={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyTravelWithUs

