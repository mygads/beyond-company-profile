import type React from "react"
import { useEffect, useRef, useState } from "react" // Added useState
import daytrip from "../assets/images/tour/daytrip.png"
import historical from "../assets/images/tour/historical.png"
import packagetour from "../assets/images/tour/packagetour.png"
import citytour from "../assets/images/tour/citytour.png"

interface TourCardProps {
    title: string
    description: string
    imageSrc: string
    link: string
    delay: number
    size: "normal" | "small" | "large"
}

const TourCard: React.FC<TourCardProps> = ({ title, description, imageSrc, delay }) => {
        const cardRef = useRef<HTMLDivElement>(null)
        const [isActive, setIsActive] = useState(false)

        const handleCardClick = () => {
                setIsActive(!isActive)
        }

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
                    onClick={handleCardClick}
                    className={`
                            relative overflow-hidden rounded-lg transition-all duration-700 ease-out 
                            transform opacity-0 translate-y-10 group h-[300px] md:h-[350px] cursor-pointer
                    `}
                >
                {/* Background Image */}
                <div
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 rounded-[10px]
                                ${isActive ? '' : 'group-hover:scale-110'}
                        `}
                        style={{ 
                                backgroundImage: `linear-gradient(181deg, rgba(210, 192, 136, 0.20) 55.78%, rgba(108, 98, 69, 0.84) 97.42%), url(${imageSrc})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transform: isActive ? 'scale(1.1)' : ''
                        }}
                ></div>

                {/* Dark Overlay on Hover/Active */}
                <div className={`absolute inset-0 bg-[#413b2a] transition-opacity duration-300 
                        ${isActive ? 'opacity-70' : 'opacity-0 group-hover:opacity-70'}`}></div>

                        {/* Content Container */}
                        <div className={`absolute inset-0 py-2 px-6 flex flex-col transition-all duration-300
                                ${isActive 
                                        ? 'justify-center items-center' 
                                        : 'justify-end items-start group-hover:justify-center group-hover:items-center'}`}>
                                {/* Title */}
                                <h3 className={`text-white text-3xl font-normal transition-all duration-500 origin-bottom-left translate-x-0 drop-shadow-lg
                                        ${isActive 
                                                ? 'text-4xl text-center font-semibold' 
                                                : 'group-hover:text-4xl group-hover:text-center group-hover:translate-x-0 group-hover:font-semibold'}`}>
                                        {title}
                                </h3>

                                {/* Description - Hidden by default, visible on hover/active */}
                                <p className={`text-white mt-6 overflow-hidden text-center text-xl w-full drop-shadow-md
                                        ${isActive 
                                                ? 'opacity-100 max-h-[200px]' 
                                                : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px]'}`}>
                                        {description}
                                </p>
                        </div>
                </div>
        )
}


const ChooseYourTour: React.FC = () => {
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
        <section className="py-16 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div
                    ref={sectionRef}
                    className="text-center mb-12 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">Choose Your Tour</h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Top Row - 2:2 ratio */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TourCard
                            title="Day Trip"
                            description="Explore Perth’s rich history by visiting iconic landmarks and heritage sites."
                            imageSrc={daytrip}
                            link="/tours/day-trip"
                            delay={100}
                            size="normal"
                        />

                        <TourCard
                            title="Package Tours"
                            description="Fully planned itineraries combining multiple experiences for a complete adventure."
                            imageSrc={packagetour}
                            link="/tours/package"
                            delay={200}
                            size="normal"
                        />
                    </div>

                    {/* Bottom Row - 1:3 ratio */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                            <TourCard
                                title="Historical Sites"
                                description="Explore Perth’s rich history by visiting iconic landmarks and heritage sites."
                                imageSrc={historical}
                                link="/tours/historical"
                                delay={300}
                                size="small"
                            />
                        </div>

                        <div className="md:col-span-3">
                            <TourCard
                                title="City Tours"
                                description="Discover the heart of Perth with guided explorations of its vibrant streets and hidden gems."
                                imageSrc={citytour}
                                link="/tours/city"
                                delay={400}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseYourTour

