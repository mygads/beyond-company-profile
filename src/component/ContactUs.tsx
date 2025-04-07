"use client"

import type React from "react"
import { useEffect, useRef, useState, type FormEvent } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  institution: string
  description: string
  contactTime: string[]
  hostedBefore: string[]
  hearAboutUs: string[]
}

const ContactUs: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        institution: "",
        description: "",
        contactTime: [],
        hostedBefore: [],
        hearAboutUs: [],
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target
        const group = name.split(".")[0]
        const option = value

        setFormData((prev) => {
        const currentValues = [...(prev[group as keyof FormData] as string[])]

        if (checked) {
            return { ...prev, [group]: [...currentValues, option] }
        } else {
            return { ...prev, [group]: currentValues.filter((item) => item !== option) }
        }
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        // Prepare email content
        const subject = `Educational Tour Inquiry from ${formData.firstName} ${formData.lastName}`

        let body = `Name: ${formData.firstName} ${formData.lastName}\n`
        body += `Email: ${formData.email}\n`
        body += `Institution: ${formData.institution}\n\n`
        body += `Description:\n${formData.description}\n\n`
        body += `Best time to contact: ${formData.contactTime.join(", ") || "Not specified"}\n`
        body += `Heard about us from: ${formData.hearAboutUs.join(", ") || "Not specified"}\n`

        // Create mailto link
        const mailtoLink = `mailto:info@beyonddreamstours.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        // Open email client
        window.location.href = mailtoLink
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

        const contentObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-x-[-20px]", "opacity-0")
                }, 200)
                contentObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const formObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add("opacity-100")
                entry.target.classList.remove("translate-x-20", "opacity-0")
                }, 400)
                formObserver.unobserve(entry.target)
            }
            })
        },
        { threshold: 0.1 },
        )

        const currentElement = sectionRef.current
        const currentContentElement = contentRef.current
        const currentFormElement = formRef.current

        if (currentElement) {
        observer.observe(currentElement)
        }

        if (currentContentElement) {
        contentObserver.observe(currentContentElement)
        }

        if (currentFormElement) {
        formObserver.observe(currentFormElement)
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement)
        }
        if (currentContentElement) {
            contentObserver.unobserve(currentContentElement)
        }
        if (currentFormElement) {
            formObserver.unobserve(currentFormElement)
        }
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-12 px-4 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-10 relative"
        >
            {/* Background Image - Will be replaced with your PNG */}
            <div className="absolute inset-0 z-0">
                {/* This div will be replaced with your background image */}
                <div className="absolute inset-0 bg-[url('../assets/images/contact-us.png')] bg-cover bg-center"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Column - Title (1/3 width) */}
                    <div
                        ref={contentRef}
                        className="md:w-1/3 mb-8 md:mb-0 md:pr-8 transition-all duration-700 ease-out transform opacity-0 translate-x-[-20px] flex flex-col justify-center "
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-black md:text-white font-playfair leading-tight">
                        Plan Your Educational Tour with Beyond
                        </h2>
                    </div>

                    {/* Right Column - Form (2/3 width) */}
                    <div
                        ref={formRef}
                        className="md:w-2/3 w-full transition-all duration-700 ease-out transform opacity-0 "
                    >
                        <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                            <label htmlFor="firstName" className="block text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            </div>
                            <div>
                            <label htmlFor="lastName" className="block text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            </div>
                        </div>

                        {/* Email and Institution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                            <label htmlFor="email" className="block text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            </div>
                            <div>
                            <label htmlFor="institution" className="block text-gray-700 mb-1">
                                Institution
                            </label>
                            <input
                                type="text"
                                id="institution"
                                name="institution"
                                value={formData.institution}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 mb-1">
                            Description
                            </label>
                            <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="Describe your preferred tour..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                            ></textarea>
                        </div>

                        {/* Checkbox Groups */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {/* Contact Time */}
                            <div>
                            <p className="text-gray-700 mb-2">Whats is the best time to contact you?</p>
                            <div className="space-y-1">
                                <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="morning-contact"
                                    name="contactTime"
                                    value="Morning"
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="morning-contact">Morning</label>
                                </div>
                                <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="afternoon-contact"
                                    name="contactTime"
                                    value="Afternoon"
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="afternoon-contact">Afternoon</label>
                                </div>
                                <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="evening-contact"
                                    name="contactTime"
                                    value="Evening"
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="evening-contact">Evening</label>
                                </div>
                            </div>
                        </div>

                        {/* Hear About Us */}
                        <div>
                        <p className="text-gray-700 mb-2">How did you hear about us?</p>
                        <div className="space-y-1">
                            <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="facebook"
                                name="hearAboutUs"
                                value="Facebook"
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label htmlFor="facebook">Facebook</label>
                            </div>
                            <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="instagram"
                                name="hearAboutUs"
                                value="Instagram"
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label htmlFor="instagram">Instagram</label>
                            </div>
                            <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="google"
                                name="hearAboutUs"
                                value="Google Search"
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label htmlFor="google">Google Search</label>
                            </div>
                            <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="friend"
                                name="hearAboutUs"
                                value="Family Or Friend"
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label htmlFor="friend">Family Or Friend</label>
                            </div>
                            <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="other"
                                name="hearAboutUs"
                                value="Other"
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                        type="submit"
                        className="px-6 py-3 bg-[#6b6346] text-white rounded-md hover:bg-[#5a5238] transition-colors duration-300"
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs

