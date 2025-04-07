"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Images1 from "../assets/images/school-group.png"
import Images2 from "../assets/images/university-student.png"
import Images3 from "../assets/images/leisure-traveller.png"
import Line from "../assets/desain/line-2.png"

interface JoinGroupProps {
    image: string
    title: string
    description: string
    delay: number
}

const JoinGroup: React.FC<JoinGroupProps> = ({ image, title, description, delay }) => {
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
            className="flex items-start gap-6 mb-12 transition-all duration-700 ease-out transform opacity-0 translate-x-10"
        >
            <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-md">
                    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
                </div>
            </div>
            <div>
                <h3 className="font-bold mb-2 flex items-center">
                    <span className="text-red-500 mr-2">📌</span> {title}
                </h3>
                <p className="">{description}</p>
            </div>
        </div>
    )
}

const WhoCanJoin: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const waveRef = useRef<HTMLDivElement>(null)

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

        const waveObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("opacity-0")
                }, 200)
                waveObserver.unobserve(entry.target)
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
                entry.target.classList.add("opacity-100", "translate-y-0")
                entry.target.classList.remove("opacity-0", "translate-y-6")
                }, 500)
                titleObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentWaveElement = waveRef.current
        const currentTitleElement = titleRef.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentWaveElement) {
        waveObserver.observe(currentWaveElement)
        }

        if (currentTitleElement) {
        titleObserver.observe(currentTitleElement)
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentWaveElement) {
            waveObserver.unobserve(currentWaveElement)
        }
        if (currentTitleElement) {
            titleObserver.unobserve(currentTitleElement)
        }
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-12 px-4 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-10"
        >
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Wave and Title */}
                    <div className="relative justify-center items-center mb-8 md:mb-0 flex flex-col ">
                        <div ref={waveRef} className="mb-2 md:mb-8 transition-opacity duration-1000 ease-out opacity-0">
                            <img src={Line} alt="Decorative wave pattern" className="w-full h-auto" />
                        </div>
                        <div ref={titleRef} className="transition-all duration-700 ease-out transform opacity-0 translate-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold font-playfair">Who Can Join?</h2>
                        </div>
                    </div>

                    {/* Right Column - Join Groups */}
                    <div>
                        <JoinGroup
                            image={Images1}
                            title="School Groups & Under-18 Students"
                            description="Fun and interactive educational tours aligned with school curricular."
                            delay={100}
                        />

                        <JoinGroup
                            image={Images2}
                            title="University Students"
                            description="In-depth academic experiences, networking opportunities, and international exposure."
                            delay={300}
                        />

                        <JoinGroup
                            image={Images3}
                            title="Leisure Travelers & Groups"
                            description="Whether it's cultural exploration, adventure, or relaxation, we offer curated trips for all."
                            delay={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoCanJoin

