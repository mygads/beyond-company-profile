"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface QnAItemProps {
    question: string
    answer: string
    delay: number
    isOpen: boolean
    toggleOpen: () => void
}

const QnAItem: React.FC<QnAItemProps> = ({ question, answer, delay, isOpen, toggleOpen }) => {
    const itemRef = useRef<HTMLDivElement>(null)

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
            className="border-b border-gray-200 py-6 transition-all duration-500 ease-out transform opacity-0 translate-y-6"
        >
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                <h3 className="text-xl font-medium">{question}</h3>
                    <button
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white transition-transform duration-300"
                        aria-expanded={isOpen}
                        aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </button>
            </div>
            <div
                id={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
                className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-600 pt-2">{answer}</p>
            </div>
        </div>
    )
}

const QnASection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    const qnaData = [
        {
            question: "What is Beyond Dreams Educational Tour?",
            answer:
                "Beyond Dreams specializes in organizing study tours and educational trips in collaboration with universities and schools. We provide immersive learning experiences through campus visits, academic workshops, and cultural explorations, while also catering to regular tourists seeking unique travel experiences.",
            },
            {
            question: "Who can join Beyond Dreams tours?",
            answer:
                "Our tours are primarily designed for students, teachers, and academic institutions looking for structured educational trips. However, we also offer packages for individual travelers or groups interested in cultural and adventure-based experiences.",
            },
            {
            question: "Can Beyond Dreams customize an educational tour?",
            answer:
                "We design tailored itineraries based on the institution's learning objectives, including campus visits, guest lectures, industry tours, and cultural immersion activities.",
            },
            {
            question: "How can I book or inquire about a tour?",
            answer:
                "You can contact us through our website, email, or WhatsApp, or visit our office for a consultation. We will assist you in planning the perfect educational or leisure tour!",
        },
    ]

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

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
        <section className="py-16 px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <div
                    ref={sectionRef}
                    className="text-center mb-12 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Find answers to common questions about our educational tours</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                {qnaData.map((item, index) => (
                    <QnAItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        delay={100 * (index + 1)}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleQuestion(index)}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}

export default QnASection

