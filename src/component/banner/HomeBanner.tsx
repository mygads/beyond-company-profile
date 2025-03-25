import { Link } from "react-router-dom"
import Background from '../../assets/images/banner-bg/banner-home.png'

export const HomeBanner = () => {
    return (
        <section className="relative h-[600px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="w-full absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                }}
            >
            </div>
            <div 
                className="absolute bottom-0 right-0 h-10 md:h-20 bg-white w-7/10 ml-auto"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}
            >
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Your Trusted Handyman Solution in Perth & South West!
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                        Providing high-quality handyman and home maintenance services with professional expertise and attention to
                        detail.
                    </p>
                    <Link
                        to="/services"
                        className="inline-flex items-center px-6 py-3 bg-[#7D0202] text-white rounded-full transition-all duration-300 hover:bg-[#262626] hover:scale-105 group"
                    >
                        Read More
                        <svg
                            className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}