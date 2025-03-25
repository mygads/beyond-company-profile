import type React from "react"
import { WrenchIcon, ClockIcon, HomeIcon } from "lucide-react"
import CountUp from "react-countup"
import { LuUsers } from "react-icons/lu"

const ExpertiseSection: React.FC = () => {
    const stats = [
        {
            icon: WrenchIcon,
            count: 500,
            prefix: "",
            suffix: "+",
            label: "Successful",
            sublabel: "Projects",
        },
        {
            icon: ClockIcon,
            count: 1000,
            prefix: "",
            suffix: "+",
            label: "Hours",
            sublabel: "of Expert Work",
        },
        {
            icon: HomeIcon,
            count: 350,
            prefix: "",
            suffix: "+",
            label: "Homes & Businesses",
            sublabel: "Enhanced",
        },
    ]

    return (
        <section className="py-8 md:py-12 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <div className="relative">
                    {/* Section Title */}
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7D0202] leading-tight flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4">
                            <div className="bg-amber-400 w-20 h-2"></div>
                            Our Proven Expertise in Every Project
                        </h2>
                        <p className="text-md md:text-lg leading-relaxed mt-6 md:mt-10">
                            Our expertise is built on years of experience and a track record of successful projects. <br className="hidden md:block" /> From residential to commercial solutions, we deliver excellence every time!
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute right-0 top-0 hidden lg:block">
                        <div className="flex items-center gap-4">
                            <LuUsers className="w-12 h-12 md:w-16 md:h-16 text-[#7D0202]" />
                            <div className="flex flex-col items-start">
                                <span className="text-2xl md:text-4xl font-bold text-amber-500">350+</span>
                                <span className="text-sm md:text-2xl text-amber-600">Satisfied Clients</span>
                            </div>
                        </div>
                    </div>
                    

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="mb-4 p-4 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                                    <stat.icon className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                    <CountUp end={stat.count} duration={2.5} prefix={stat.prefix} suffix={stat.suffix} />
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-semibold text-gray-900">{stat.label}</h3>
                                    <p className="text-gray-500">{stat.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Mobile Clients Section */}
                    <div className="lg:hidden mt-8">
                        <div className="flex items-center justify-center gap-4">
                            <LuUsers className="w-10 h-10 text-[#7D0202]" />
                            <div className="flex flex-col items-start">
                                <span className="text-3xl font-bold text-amber-500">350+</span>
                                <span className="text-xl text-amber-600">Satisfied Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertiseSection

