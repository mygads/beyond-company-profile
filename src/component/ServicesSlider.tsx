import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import tooltip from '../assets/desain/Tooltip.png'
import handyman from '../assets/icons/service-icon/handyman.png'
import camera from '../assets/icons/service-icon/camera.png'
import painting from '../assets/icons/service-icon/painting.png'
import pressure from '../assets/icons/service-icon/pressure.png'
import replacement from '../assets/icons/service-icon/replacement.png'
import type { Swiper as SwiperType } from 'swiper';
import { useSearchParams } from 'react-router-dom';


interface Service {
    title: string;
    icon: string | React.ReactNode;
    overview: string;
    description: string;
    features: string[];
    footer: string;
}

const services: Service[] = [
    {
        title: "HANDYMAN SERVICES",
        icon: handyman,
        overview: "From small repairs to major fixes, we handle it all with precision and expertise. No job is too big or small!",
        description: "Whether it's fixing a leaky faucet, assembling furniture, or repairing drywall, our skilled handyman team ensures that every task is completed efficiently and professionally. We handle:",
        features: [
            "Minor & Major Repairs",
            "Furniture Assembly",
            "Door & Window Fixes",
            "Plumbing & Electrical Work",
            "General Home Maintenance",
        ],
        footer: "We take pride in delivering high-quality workmanship, ensuring your home remains safe and well-maintained."
    },
    {
        title: "HOME CAMERA INSTALLATION",
        icon: camera,
        overview: "Secure your home with professionally installed security cameras for 24/7 peace of mind.",
        description: "Enhance your home security with our expert CCTV & surveillance camera installation services. Our team ensures:",
        features: [
            "Professional installation & setup",
            "Smart home integration",
            "High-definition cameras with night vision",
            "Remote access & monitoring",
            "Maintenance & troubleshooting"
        ],
        footer: "Protect what matters most with reliable security solutions tailored to your needs."
    },
    {
        title: "WINDOW TINTING",
        icon: replacement,
        overview: "From small repairs to major fixes, we handle it all with precision and expertise. No job is too big or small!",
        description: "Our premium window tinting solutions provide:",
        features: [
            "Heat & UV Protection – Keep your home cooler and reduce energy costs",
            "Increased Privacy – Block outside views without sacrificing natural light",
            "Glare Reduction – Enjoy clearer screens and comfortable indoor lighting",
            "Durable & Stylish Finishes – Aesthetic appeal with long-lasting protection"
        ],
        footer: "Contact us for a free estimate!"
    },
    {
        title: "PRESSURE CLEANING",
        icon: pressure,
        overview: "Restore your driveway and garage floor to a spotless finish with our high-pressure cleaning service.",
        description: "Over time, dirt, oil stains, and grime can build up on driveways and garages, making them look worn out. Our high-pressure cleaning service removes:",
        features: [
            "Stubborn stains & oil spills",
            "Mold, mildew, and algae",
            "Dirt & grime buildup",
            "Tire marks & discoloration"
        ],
        footer: "Using industrial-grade pressure washers, we restore surfaces to their original condition, improving curb appeal and safety."
    },
    {
        title: "PAINTING SERVICES",
        icon: painting,
        overview: "Revamp your space with expert painting services for a fresh, vibrant look.",
        description: "Our professional painting team transforms homes and businesses with high-quality finishes. We provide:",
        features: [
            "Interior & Exterior Painting",
            "Feature Wall Designs & Custom Colors",
            "Waterproof & Weather-Resistant Coatings",
            "Ceiling & Fence Painting",
            "Minor Wall Repairs Before Painting"
        ],
        footer: "We use premium paints and expert techniques to ensure smooth, long-lasting results that enhance your property’s beauty."
    }
];

const ServiceSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchParams] = useSearchParams();
    const swiperRef = useRef<SwiperType | null>(null);
    
    // Mapping dari nama kategori ke indeks slide
    const categoryToIndex = React.useMemo(() => ({
        'handyman': 0,
        'camera-installation': 1,
        'window-tinting': 2,
        'pressure-cleaning': 3,
        'painting': 4
    }), []);

    // Set slide awal berdasarkan parameter URL ketika komponen dimuat
    useEffect(() => {
        const category = searchParams.get('category');
        if (category && categoryToIndex[category as keyof typeof categoryToIndex] !== undefined) {
            // Jika swiper sudah terinisialisasi, langsung pindah ke slide yang sesuai
            if (swiperRef.current) {
                swiperRef.current.slideTo(categoryToIndex[category as keyof typeof categoryToIndex]);

                setTimeout(() => {
                    document.getElementById('service-slider')?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start'
                    });
                }, 100);
            } else {
                // Jika belum, set activeIndex yang akan digunakan ketika swiper diinisialisasi
                setActiveIndex(categoryToIndex[category as keyof typeof categoryToIndex]);
            }
        }
    }, [searchParams, categoryToIndex]);

    return (
        <section id="service-slider" className="relative">
            {/* Top Banner */}
            <div className="relative h-20 bg-[#2D2D2D] w-7/10 ml-auto mb-12 skew-x-45">
                
                {/* Pattern Overlay - unskewed using negative skew */}
                <div className="absolute top-0 right-0 w-48 h-full overflow-hidden skew-x-[-45deg]">
                    <div className="w-full h-full" style={{
                        background: `url(${tooltip}) repeat`,
                    }}></div>
                </div>
                
                {/* Title - unskewed using negative skew */}
                <div className="container mx-auto px-4 h-full flex items-center">
                    <h2 className="text-white text-2xl font-bold ml-20 skew-x-[-45deg]">
                        {services[activeIndex].title}
                    </h2>
                </div>
            </div>

            {/* Slider Content */}
            <div className="container mx-auto pb-12">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    initialSlide={activeIndex}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        el: '.swiper-pagination-container', // Custom pagination container
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="relative"
                >
                    <div className="swiper-pagination-container w-full flex justify-center mt-8"></div>

                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            {/* Service Content */}
                            <div className="gap-6 mx-12 md:mx-30 ">
                                {/* Overview */}
                                <div className="flex justify-between items-center space-y-8">
                                    {typeof service.icon === 'string' ? (
                                        <img 
                                            src={service.icon} 
                                            alt={service.title}
                                            className="w-32 h-32 object-contain"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                    )}
                                    <p className="text-lg text-right">
                                        {service.overview}
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="space-y-4">
                                    <p className="">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="">
                                        {service.footer}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Buttons using react-icons/fa */}
                    <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full ">
                        <FaChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full ">
                        <FaChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </Swiper>
            </div>
        </section>
    );
};

export default ServiceSlider;