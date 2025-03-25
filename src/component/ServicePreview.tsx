import type React from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import tooltip from '../assets/desain/Tooltip.png'
import handyman from '../assets/images/galleries/handyman.png'
import cameraInstalation from '../assets/images/galleries/camera-instalation.png'
import windowsTinting from '../assets/images/galleries/windows-tinting.png'
import pressureCleaning from '../assets/images/galleries/pressure-clean.png'
import painting from '../assets/images/galleries/painting-services.png'
import { VscTools } from "react-icons/vsc"
import { BiCctv } from "react-icons/bi"
import { TbWindow } from "react-icons/tb"
import { MdOutlineWaterDrop } from "react-icons/md"
import { RiPaintBrushLine } from "react-icons/ri"


interface Service {
    id: string
    title: string
    image: string
    link: string
    description?: string
    icon?: string | React.ReactNode
}

const services: Service[] = [
    {
        id: "handyman",
        title: "Handyman Services",
        image: handyman,
        link: "/services?category=handyman",
        description: "From small repairs to major fixes, we handle it all with precision and expertise. No job is too big or small!",
        icon: <VscTools className="text-white text-3xl" />
    },
    {
        id: "camera",
        title: "Home Camera Installation",
        image: cameraInstalation,
        link: "/services?category=camera-installation",
        description: "Secure your home with professionally installed security cameras for 24/7 peace of mind.",
        icon: <BiCctv className="text-white text-3xl" />,
    },
    {
        id: "window",
        title: "Window Tinting",
        image: windowsTinting,
        link: "/services?category=window-tinting",
        description: "Reduce heat, glare, and UV exposure while enhancing privacy with high-quality window tinting.",
        icon: <TbWindow className="text-white text-3xl" />,
    },
    {
        id: "pressure",
        title: "Pressure Cleaning",
        image: pressureCleaning,
        link: "/services?category=pressure-cleaning",
        description: "Restore your driveway and garage floor to a spotless finish with our high-pressure cleaning service.",
        icon: <MdOutlineWaterDrop className="text-white text-3xl" />,
    },
    {
        id: "painting",
        title: "Painting",
        image: painting,
        link: "/services?category=painting",
        description: "Revamp your space with expert painting services for a fresh, vibrant look.",
        icon: <RiPaintBrushLine className="text-white text-3xl" />,
    },
]

const ServicePreview: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // const scroll = (direction: "left" | "right") => {
    //     if (scrollContainerRef.current) {
    //     const scrollAmount = 400 // Adjust scroll amount as needed
    //     const newScrollPosition =
    //         scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

    //     scrollContainerRef.current.scrollTo({
    //         left: newScrollPosition,
    //         behavior: "smooth",
    //     })
    //     }
    // }

    return (
        <section
            className="py-12 md:py-16 lg:py-24"
            style={{
                background: `url(${tooltip}) white 50px 50px repeat`,
            }}
        >
            <div className="container mx-4 md:mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#7D0202] leading-tight flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4">
                    <span className="w-0 md:w-20 h-2 bg-amber-400 self-center"></span>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#7D0202]text-center md:text-left">
                        From Repairs to Renovations - We've Got You Covered!
                    </h2>
                </div>

                <div className="absolute left-0 mt-45 z-10 md:hidden">
                    <button 
                        className="bg-[#7D0202] text-white p-2 rounded-r-lg"
                        onClick={() => {
                            if (scrollContainerRef.current) {
                                scrollContainerRef.current.scrollBy({
                                    left: -300,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                
                <div className="absolute right-0 mt-45 z-10 md:hidden">
                    <button 
                        className="bg-[#7D0202] text-white p-2 rounded-l-lg"
                        onClick={() => {
                            if (scrollContainerRef.current) {
                                scrollContainerRef.current.scrollBy({
                                    left: 300,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                {/* Services Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="md:w-3/4 overflow-x-auto scrollbar-hide scroll-smooth p-4"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    <div className="relative">
                        
                        {/* Services list */}
                        <div className="flex gap-6">
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    to={service.link}
                                    className="relative flex-none w-[300px] md:w-[350px] h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl bg-[#323232] scroll-snap-align-start"
                                    style={{ scrollSnapAlign: "start" }}
                                >
                                    <img
                                        src={service.image || handyman}
                                        alt={service.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[#323232] flex items-center justify-center transition-transform duration-300 group-hover:hidden">
                                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.76)] to-[rgba(176,46,46,0.76)] transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-8">
                                        <div className="mb-1 md:mb-2">{service.icon}</div>
                                        <h3 className="text-center mb-1 md:mb-2 text-lg md:text-xl font-bold text-white">{service.title} </h3>
                                        <p className="text-white font-light text-md md:text-lg text-left md:mb-3 mb-1">{service.description}</p>
                                        <div className="ml-auto flex items-center text-white hover:text-amber-400 transition-colors">
                                            <span className="mr-2">Read More</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicePreview

