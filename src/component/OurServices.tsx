"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const OurServices: React.FC = () => {
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
        <section className="py-12 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div
                    ref={sectionRef}
                    className="text-center mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold  font-playfair">Our Services</h2>
                </div>

                <div
                    ref={textRef}
                    className="text-center transition-all duration-700 ease-out transform opacity-0 translate-y-6"
                >
                    <p className=" leading-relaxed">
                        We go beyond traditional tourism by curating unique travel programs that blend education, cultural exchange, and exploration. Whether you're a student, a group traveler, or an individual seeking meaningful experiences, we have the perfect journey for you.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurServices

