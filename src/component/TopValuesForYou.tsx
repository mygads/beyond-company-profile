"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { MdSupportAgent } from "react-icons/md";

interface ValueCardProps {
    title: string
    description: string
    icon: React.ReactNode
    delay: number
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, delay }) => {
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

        const currentElement = cardRef.current

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
            className="
                flex flex-col items-center bg-white rounded-lg p-8 
                transition-all duration-700 ease-out transform opacity-0 translate-y-10
                hover:shadow-2xl hover:-translate-y-2
                text-center shadow-xl
            "
            >
            <div className="mb-6">
                <div className="md:w-20 md:h-20 w-16 h-16 p-4 rounded-full bg-[linear-gradient(230deg,#D2C088_21.81%,rgba(214,207,185,0.31)_48.56%,#D2C088_81.36%)] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <p className="text-[#838383] text-md">{description}</p>
        </div>
    )
}

const TopValuesForYou: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

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

            const currentElement = sectionRef.current

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
        <section className="py-12 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div
                    ref={sectionRef}
                    className="text-center mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">Top Values For You</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ValueCard
                        title="Easy booking"
                        description="A fast and hassle-free booking process through our digital platform, making trip planning seamless."
                        icon={
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-800"
                        >
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        }
                        delay={100}
                    />

                    <ValueCard
                        title="Safety First"
                        description="Safety is our top priority. Every trip follows strict safety protocols for transportation, accommodation, and activities."
                        icon={
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-800"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <path d="M9 12l2 2 4-4"></path>
                        </svg>
                        }
                        delay={200}
                    />

                    <ValueCard
                        title="24/7 Support"
                        description="Our customer support team is available around the clock to assist travelers with inquiries or emergencies, ensuring a smooth and worry-free experience."
                        icon={
                        // Then where the icon is used:
                        <MdSupportAgent size={40} className="text-gray-800" />
                        }
                        delay={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default TopValuesForYou

