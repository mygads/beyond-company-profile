"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface BenefitCardProps {
    title: string
    description: string
    icon: React.ReactNode
    iconPosition: "left" | "right"
    hasBorder: boolean
    delay: number
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, iconPosition, hasBorder, delay }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-y-6", "opacity-0")
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
        className={`
            p-6 rounded-lg flex items-start gap-4 h-full
            transition-all duration-700 ease-out transform opacity-0 translate-y-6
            hover:shadow-md hover:-translate-y-1
            ${hasBorder ? "bg-white border-[#C39954] border-2" : "bg-[#FFFAE9]"}
            ${iconPosition === "right" ? "flex-row" : "flex-row-reverse"}
        `}
        >
            <div className={`flex-1 ${iconPosition === "right" ? "pr-4" : "pl-4"}`}>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-[#6C6245]">{description}</p>
            </div>
            <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 p-4 rounded-full bg-[linear-gradient(230deg,#D2C088_21.81%,rgba(214,207,185,0.31)_48.56%,#D2C088_81.36%)] flex items-center justify-center">
                {icon}
                </div>
            </div>
        </div>
    )
}

const WhyBecomeHostFamily: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

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

        const headerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-y-6", "opacity-0")
                }, 300)
                headerObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentHeaderElement = headerRef.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentHeaderElement) {
        headerObserver.observe(currentHeaderElement)
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentHeaderElement) {
            headerObserver.unobserve(currentHeaderElement)
        }
        }
    }, [])

    return (
        <section
        ref={sectionRef}
        className="py-12 px-4 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-10"
        >
        <div className="container mx-auto">
            <div
            ref={headerRef}
            className="text-center mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-6"
            >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">Why become a host families?</h2>
            <p className=" text-base mx-auto">
                Whether you're a student, an educator, or a passionate explorer, our tours are designed to inspire and
                educate.
            </p>
            </div>

            <div className="grid md:grid-cols-2">
            {/* Top Row */}
            <BenefitCard
                title="Cultural Exchange"
                description="Experience new perspectives and traditions right in your home."
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
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                }
                iconPosition="right"
                hasBorder={true}
                delay={100}
            />

            <BenefitCard
                title="Short Stay Program"
                description="Hosting is only for 1-2 weeks, making it an easy and fulfilling experience."
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
                iconPosition="left"
                hasBorder={false}
                delay={200}
            />

            {/* Bottom Row */}
            <BenefitCard
                title="Meaningful Connections"
                description="Build friendships that last a lifetime with international students."
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
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                }
                iconPosition="right"
                hasBorder={false}
                delay={300}
            />

            <BenefitCard
                title="Support Education"
                description="Contribute to a student's learning journey while enriching your own."
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
                }
                iconPosition="left"
                hasBorder={true}
                delay={400}
            />
            </div>
        </div>
        </section>
    )
}

export default WhyBecomeHostFamily

