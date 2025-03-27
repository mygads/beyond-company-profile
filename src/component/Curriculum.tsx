"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Images1 from "../assets/images/service-image-1.png"
import Images2 from "../assets/images/services-images-2.png"
import Images3 from "../assets/images/services-images-3.png"
import { GiFlexibleLamp, GiThreeFriends } from "react-icons/gi"
import { PiTreePalm } from "react-icons/pi"

const CurriculumSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)
    const gridItemRefs = useRef<(HTMLDivElement | null)[]>([])

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
                entry.target.classList.remove("translate-x-[-20px]", "opacity-0")
                }, 300)
                textObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const gridObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-x-20", "opacity-0")
                }, 500)
                gridObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const itemObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = gridItemRefs.current.findIndex((ref) => ref === entry.target)
                setTimeout(
                () => {
                    entry.target.classList.add("opacity-100", "scale-100")
                    entry.target.classList.remove("opacity-0", "scale-95")
                },
                600 + index * 150,
                ) // Staggered delay based on index
                itemObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentTextElement = textRef.current
        const currentGridElement = gridRef.current
        const currentGridItems = gridItemRefs.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentTextElement) {
        textObserver.observe(currentTextElement)
        }

        if (currentGridElement) {
        gridObserver.observe(currentGridElement)
        }

        currentGridItems.forEach((item) => {
        if (item) {
            itemObserver.observe(item)
        }
        })

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentTextElement) {
            textObserver.unobserve(currentTextElement)
        }
        if (currentGridElement) {
            gridObserver.unobserve(currentGridElement)
        }
        currentGridItems.forEach((item) => {
            if (item) {
            itemObserver.unobserve(item)
            }
        })
        }
    }, [])

    // Set up grid item refs
    const setGridItemRef = (index: number) => (el: HTMLDivElement | null) => {
        gridItemRefs.current[index] = el
    }

    return (
        <section
        ref={sectionRef}
        className="overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-10 bg-[#504A3A]"
        >
            <div className="flex flex-col md:flex-row container mx-auto gap-4 md:gap-8">
                {/* Left Column - Text Content */}
                <div
                    ref={textRef}
                    className="text-white md:w-1/2 flex flex-col justify-center transition-all duration-700 ease-out transform opacity-0 md:pr-16 container px-4 text-center md:text-left py-6 md:py-0"
                >
                    <h2 className="text-lg md:text-3xl mb-2">
                    Enhance Your Curriculum with a Unique Cultural Experience
                    </h2>
                    <p className="text-lg md:text-3xl font-semibold">
                    Partner with us to provide your students with an unforgettable Australian cultural immersion.
                    </p>
                </div>

                {/* Right Column - Grid */}
                <div ref={gridRef} className="md:w-1/2 transition-all duration-700 ease-out transform opacity-0 translate-x-20">
                    <div className="flex flex-row">
                        {/* Row 1 */}
                        <div>
                            <div
                            ref={setGridItemRef(0)}
                            className="aspect-square transition-all duration-500 ease-out transform opacity-0 scale-95"
                            >
                            <img
                                src={Images1}
                                alt="Passports and travel documents"
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <div
                            ref={setGridItemRef(1)}
                            className="aspect-square bg-[#B0B0B0] flex items-center justify-center transition-all duration-500 ease-out transform opacity-0 scale-95 text-gray-600"
                            >
                                <GiThreeFriends size={100}/>
                            </div>
                        </div>

                        <div>
                            <div>
                                {/* Row 2 */}
                                <div
                                    ref={setGridItemRef(2)}
                                    className="aspect-square bg-[#C39954] flex text-white items-center justify-center transition-all duration-500 ease-out transform opacity-0 scale-95"
                                >
                                    <PiTreePalm size={100} />
                                </div>
                            </div>

                            <div
                                ref={setGridItemRef(3)}
                                className="aspect-square transition-all duration-500 ease-out transform opacity-0 scale-95"
                            >
                            <img
                                src={Images2}
                                alt="Students smiling together"
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>

                        <div>

                            {/* Row 3 */}
                            <div
                                ref={setGridItemRef(4)}
                                className="aspect-square transition-all duration-500 ease-out transform opacity-0 scale-95"
                            >
                                <img
                                    src={Images3}
                                    alt="Students working together"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                ref={setGridItemRef(5)}
                                className="aspect-square bg-[#B6AA84] flex items-center justify-center transition-all duration-500 ease-out transform opacity-0 scale-95 text-yellow-300"
                            >
                               <GiFlexibleLamp size={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurriculumSection

