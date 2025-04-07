"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image1 from "../assets/images/margaret-river.jpg"
import Image2 from "../assets/images/images2.png" 
import Image3 from "../assets/images/bunbury-dolphin.jpg"
import Image4 from "../assets/images/busselton.avif"

interface Destination {
  id: string
  title: string
  description: string
  rating: number
  duration: string
  image: string
}

const PopularDestinations: React.FC = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const sectionRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Exact data from the image
    const destinations: Destination[] = [
        {
        id: "1",
        title: "Perth City",
        description:
            "Western Australia’s vibrant capital city is the perfect gateway for young minds to explore science, culture, and innovation. From the Scitech Discovery Centre to Kings Park, students can engage in hands-on learning and immerse themselves in Indigenous history, sustainability, and city life."
        ,
        rating: 5.0,
        duration: "2 Hours",
        image: Image2
        },
        {
        id: "2",
        title: "Margaret River National Park",
        description:
            "Known for its stunning natural beauty and environmental richness, Margaret River offers powerful lessons in geography, agriculture, and sustainability. Tours can include visits to organic farms, caves, forests, and local artisans, making it ideal for both environmental and cultural education.",
        rating: 4.3,
        duration: "2.5 Hours",
        image: Image1
        },
        {
        id: "3",
        title: "Bunbury and Dolphin Discovery Centre",
        description:
            "A growing coastal city where students can explore marine biology, conservation, and regional development. Activities like dolphin encounters at the Dolphin Discovery Centre, estuary walks, and regional museum visits make it an interactive and memorable destination.",
        rating: 5.0,
        duration: "5+ Hours",
        image: Image3
        },
        {
        id: "4",
        title: "Busselton Jetty",
        description:
            "Home to the famous Busselton Jetty, this town offers a unique underwater observatory experience, making marine education come alive. It’s perfect for programs on oceanography, marine ecosystems, and environmental science, plus it’s a beautiful spot for group bonding and reflection.",
        rating: 4.1,
        duration: "4.1 Hours",
        image: Image4
        },
        
    ]

    // Scroll animation
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

        const currentSectionRef = sectionRef.current;
        
        if (currentSectionRef) {
        observer.observe(currentSectionRef)
        }

        return () => {
        if (currentSectionRef) {
            observer.unobserve(currentSectionRef)
        }
        }
    }, [])

    // Carousel navigation
    const handlePrev = () => {
        if (!scrollContainerRef.current) return

        const containerWidth = scrollContainerRef.current.clientWidth
        const scrollAmount = containerWidth / 2
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }

    const handleNext = () => {
        if (!scrollContainerRef.current) return

        const containerWidth = scrollContainerRef.current.clientWidth
        const scrollAmount = containerWidth / 2
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }

    // Mouse drag scrolling
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return

        setIsDragging(true)
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
        setScrollLeft(scrollContainerRef.current.scrollLeft)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return

        e.preventDefault()
        const x = e.pageX - scrollContainerRef.current.offsetLeft
        const walk = (x - startX) * 2 // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    // Touch events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!scrollContainerRef.current) return

        setIsDragging(true)
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
        setScrollLeft(scrollContainerRef.current.scrollLeft)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !scrollContainerRef.current) return

        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
        const walk = (x - startX) * 2
        scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    // Handle WhatsApp booking
    const handleBookNow = (destination: Destination) => {
        const message = `Hello, I'm interested in booking the "${destination.title}" tour. Please provide more information about availability and pricing. Thank you!`
        const whatsappUrl = `https://wa.me/61452674373?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <section className="py-12 px-4 overflow-hidden">
        <div
            ref={sectionRef}
            className="container mx-auto transition-all duration-700 ease-out transform opacity-0 translate-y-10"
        >
            <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair">Popular Destinations</h2>
            <div className="flex space-x-2">
                <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D2C088] text-white hover:bg-amber-600"
                aria-label="Previous destinations"
                >
                <ChevronLeft size={24} />
                </button>
                <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D2C088] text-white hover:bg-amber-600"
                aria-label="Next destinations"
                >
                <ChevronRight size={24} />
                </button>
            </div>
            </div>

            <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 hide-scrollbar"
            style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
            {destinations.map((destination) => (
                <div
                key={destination.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 scroll-snap-align-start"
                style={{ scrollSnapAlign: "start" }}
                >
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-48 sm:h-56">
                    <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover"
                    />
                    </div>

                    <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold pr-2">{destination.title}</h3>
                        <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-sm">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="ml-1 text-sm font-medium">{destination.rating.toFixed(1)}</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-3">
                        <div className="flex items-center text-sm text-gray-700">
                        <svg
                            className="w-4 h-4 mr-1 text-gray-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {destination.duration}
                        </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{destination.description}</p>
                    </div>

                    <div className="p-4 pt-0 mt-auto">
                    <button
                        onClick={() => handleBookNow(destination)}
                        className="w-full py-3 bg-[#6b6346] text-white rounded-md hover:bg-[#5a5238] transition-colors duration-300 flex items-center justify-center"
                    >
                        <span>Book Now</span>
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}

export default PopularDestinations

