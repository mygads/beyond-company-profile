import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaUser } from 'react-icons/fa';

interface Review {
    name: string;
    position: string;
    comment: string;
    rating: number;
}

const reviews: Review[] = [
    {
        name: "Sophia Anderson",
        position: "Internal Implementation Officer",
        comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
        rating: 5
    },
    {
        name: "Michael Roberts",
        position: "Home Owner",
        comment: "Exceptional work on our renovation project. The attention to detail and craftsmanship was outstanding. Very satisfied with the results!",
        rating: 5
    },
    {
        name: "Emma Thompson",
        position: "Property Manager",
        comment: "Reliable, punctual, and highly skilled team. They completed the work ahead of schedule and maintained excellent communication throughout.",
        rating: 5
    },
    {
        name: "David Chen",
        position: "Business Owner",
        comment: "Professional service from start to finish. Their expertise in handling commercial projects is impressive. Will definitely work with them again!",
        rating: 5
    },
    {
        name: "Sarah Williams",
        position: "Interior Designer",
        comment: "As a designer, I appreciate their attention to detail and quality workmanship. They bring ideas to life exactly as envisioned.",
        rating: 5
    },
    {
        name: "James Patterson",
        position: "Real Estate Developer",
        comment: "Outstanding service quality and project management. They handle complex projects with expertise and professionalism.",
        rating: 5
    }
];

const ReviewSlider: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7D0202] mb-12">
                    Your satisfaction is our priority!
                </h2>
                {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7D0202] leading-tight flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4 mb-12">
                    <span className="w-20 h-2 bg-amber-400"></span>
                    Your satisfaction is our priority!
                </h2> */}

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active bg-red-600',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-xl p-6 h-full flex flex-col">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-red-100">
                                    <FaUser className="w-6 h-6 text-red-600" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 mb-4 flex-grow">
                                    {review.comment}
                                </p>

                                {/* Reviewer Info */}
                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {review.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {review.position}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full">
                                        <MessageCircle className="w-4 h-4 text-red-600" />
                                        <span className="text-sm text-red-600">Testimonial</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ReviewSlider;