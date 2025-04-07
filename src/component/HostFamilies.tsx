"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const HostFamilies: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLDivElement>(null)

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
                entry.target.classList.remove("translate-x-[-20px]", "opacity-0")
                }, 200)
                titleObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const descriptionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-x-20", "opacity-0")
                }, 400)
                descriptionObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentTitleElement = titleRef.current
        const currentDescriptionElement = descriptionRef.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentTitleElement) {
        titleObserver.observe(currentTitleElement)
        }

        if (currentDescriptionElement) {
        descriptionObserver.observe(currentDescriptionElement)
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentTitleElement) {
            titleObserver.unobserve(currentTitleElement)
        }
        if (currentDescriptionElement) {
            descriptionObserver.unobserve(currentDescriptionElement)
        }
        }
    }, [])

    return (
        <section
        ref={sectionRef}
        className="py-12 px-4 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-10"
        >
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
            {/* Left Column - Title */}
            <div ref={titleRef} className="transition-all duration-700 ease-out transform opacity-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">Host Families</h2>
                <p className=" flex items-center justify-center md:justify-start">
                <span className="mr-1 md:mr-2">🌎</span> Open Your Home, Expand Your World
                </p>
            </div>

            {/* Right Column - Description */}
            <div ref={descriptionRef} className="transition-all duration-700 ease-out transform opacity-0">
                <p className="leading-relaxed">
                Beyond Dreams is looking for warm and welcoming families to host international students participating in
                our educational exchange programs. By becoming a host family, you'll immerse yourself in a new culture,
                help students feel at home, and create lifelong friendships.
                </p>
            </div>
            </div>
        </div>
        </section>
    )
}

export default HostFamilies

