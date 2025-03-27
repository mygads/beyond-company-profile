"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const AboutUs: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

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

        const textObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("opacity-100")
                            entry.target.classList.remove("translate-y-6", "opacity-0")
                        }, 300)
                        textObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentTextElement = textRef.current

        if (currentElement) {
            observer.observe(currentElement)
        }

        if (currentTextElement) {
            textObserver.observe(currentTextElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
            if (currentTextElement) {
                textObserver.unobserve(currentTextElement)
            }
        }
    }, [])

    return (
        <section className="pb-12 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div
                    ref={sectionRef}
                    className="text-center mb-6 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair">About Us</h2>
                </div>

                <div
                    ref={textRef}
                    className="text-center transition-all duration-700 ease-out transform opacity-0 translate-y-6"
                >
                    <p className="text-lg md:text-2xl leading-relaxed">
                        Beyond Dreams Tours is a premier educational and cultural travel provider, specialising in immersive
                        experiences for students under 18, university students, and general travelers. We go beyond traditional
                        tourism by offering engaging educational programs, cultural homestays, and authentic local cuisine, creating
                        unforgettable journeys that inspire learning, exploration, and personal growth.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

