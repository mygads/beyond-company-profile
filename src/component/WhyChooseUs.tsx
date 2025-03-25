import { ThumbsUp } from "lucide-react"
import beforeImg1 from '../assets/images/galleries/before1.png';
import beforeImg2 from '../assets/images/galleries/before2.png';
import afterImg1 from '../assets/images/galleries/after1.png';
import afterImg2 from '../assets/images/galleries/after2.png';


const WhyChooseUs = () => {
    const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
    const benefits = [
        {
            title: "Experienced & Reliable Team",
            color: "bg-gray-800",
        },
        {
            title: "Affordable & Transparent Price",
            color: "bg-gray-700",
        },
        {
            title: "Quality Workmanship Guaranteed",
            color: "bg-gray-600",
        },
    ]

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7D0202] leading-tight flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4 mb-12">
                    <span className="w-20 h-2 bg-amber-400"></span>
                    Why Choose Us ?
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Side - Image Gallery */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group">
                            <img
                                src={beforeImg1 || "/placeholder.svg"}
                                alt="Before renovation"
                                className="w-full h-44 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative group">
                            <img
                                src={beforeImg2 || "/placeholder.svg"}
                                alt="Before renovation"
                                className="w-full h-44 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative group">
                            <img
                                src={afterImg1 || "/placeholder.svg"}
                                alt="After renovation"
                                className="w-full h-44 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative group">
                            <img
                                src={afterImg2 || "/placeholder.svg"}
                                alt="After renovation"
                                className="w-full h-44 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side - Benefits */}
                    <div className="flex flex-col justify-center h-full gap-4 md:gap-8 mb-8 md:mb-0">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`relative transform -skew-x-35 ${benefit.color} 
                                    p-3 px-6 sm:px-16 text-white shadow-lg transition-transform hover:scale-105 hover:z-10`}
                                style={{
                                    marginLeft: isDesktop ? `${index * 60}px` : 0,
                                    marginRight: isDesktop ? `${(benefits.length - index - 1) * 60}px` : 0,
                                }}
                            >
                                <div className={`flex items-center gap-4 sm:gap-6 transform skew-x-35`}>
                                    <ThumbsUp className="w-6 sm:w-8 sm:h-8 text-amber-400 flex-shrink-0" />
                                    <span className="text-md sm:text-xl font-normal">{benefit.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1216" height="122" viewBox="0 0 1216 122" fill="none">
                    <g filter="url(#filter0_d_514_732)">
                        <path d="M1075.71 35H0V109H1166L1075.71 35Z" fill="url(#paint0_linear_514_732)"/>
                        <path d="M1075.71 35H0V109H1166L1075.71 35Z" fill="url(#pattern0_514_732)" fill-opacity="0.41"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_514_732" x="0" y="0.299999" width="1215.7" height="121.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="26" dy="-11"/>
                            <feGaussianBlur stdDeviation="11.85"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_514_732"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_514_732" result="shape"/>
                        </filter>
                        <pattern id="pattern0_514_732" patternContentUnits="objectBoundingBox" width="0.0360206" height="0.567568">
                            <use xlinkHref="#image0_514_732" transform="scale(0.000600343 0.00945946)"/>
                        </pattern>
                        <linearGradient id="paint0_linear_514_732" x1="1166" y1="72" x2="0" y2="72" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D0202"/>
                            <stop offset="1" stop-color="#E30303"/>
                        </linearGradient>
                        <image id="image0_514_732" width="60" height="60" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB5dZJCgMxDETRunly8wqBBJqmJw+ayn/h/QMjCQiK5JsBIbIINKLzRiNDnmhkyQuNTHmgkS1rNDJmiUbWrNDInAUa2ZuNRoVmolGlWWhUagYa1RpFo2IjaFStF43K9aBRvVY0FGpBQ6WnaCj1BA217tBQ7AoN1c7QUO4IDfX2aKzQFo1V+qOxUl/093lhpX5fex30ZoCtgd6tKX30wTGijeZxumiep4nmdXpo3qeF5rN00HyeBppt1Uezvdpo9lUXzf5qojlWPTTHq4XmnOqgOa8aaM4tP5rzy42mTXnRtCsnmrblQ9O+XGj6lAdNv3Kg6Vs8mv7FohlTGPoDYCVcaevwWx0AAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default WhyChooseUs

