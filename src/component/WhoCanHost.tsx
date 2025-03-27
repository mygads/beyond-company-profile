"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Images from "../assets/images/who-can-host.png"

interface HostRequirementProps {
    text: string
    delay: number
}

const HostRequirement: React.FC<HostRequirementProps> = ({ text, delay }) => {
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
            className="flex items-center gap-4 mb-6 transition-all duration-700 ease-out transform opacity-0 translate-x-[-20px]"
        >
                <div className="min-w-[40px] w-10 h-10 bg-[#8a7a3b] rounded-md flex items-center justify-center text-white flex-shrink-0">
                        <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="flex-shrink-0"
                        >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                </div>
                <p className="text-lg md:text-2xl">{text}</p>
        </div>
    )
}

const WhoCanHost: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
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

        const titleObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-y-6", "opacity-0")
                }, 200)
                titleObserver.unobserve(entry.target)
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
                }, 400)
                imageObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentTitleElement = titleRef.current
        const currentImageElement = imageRef.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentTitleElement) {
        titleObserver.observe(currentTitleElement)
        }

        if (currentImageElement) {
        imageObserver.observe(currentImageElement)
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentTitleElement) {
            titleObserver.unobserve(currentTitleElement)
        }
        if (currentImageElement) {
            imageObserver.unobserve(currentImageElement)
        }
        }
    }, [])

    return (
        <section
        ref={sectionRef}
        className="py-16 px-4 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-10 bg-amber-50/50"
        >
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Title and Requirements */}
            <div>
                <div ref={titleRef} className="mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair flex items-center">
                    <span className="mr-3">👨‍👩‍👧‍👦</span> Who Can Host?
                </h2>
                </div>

                <div className="space-y-2">
                <HostRequirement text="Families of all backgrounds and structures are welcome!" delay={100} />
                <HostRequirement text="A private or shared bedroom for the student." delay={200} />
                <HostRequirement text="A willingness to provide a supportive and safe home environment" delay={300} />
                <HostRequirement text="An open mind and enthusiasm for cultural exchange." delay={400} />
                </div>
            </div>

            {/* Right Column - Image */}
            <div ref={imageRef} className="transition-all duration-700 ease-out transform opacity-0 scale-95">
                <img
                    src={Images}
                    alt="Diverse family hosting international students for dinner"
                    className="w-full h-auto object-cover"
                />
            </div>
            </div>
        </div>
        </section>
    )
}

export default WhoCanHost

