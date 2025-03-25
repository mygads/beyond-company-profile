import { Star, MessageCircle } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import bgReview from '../assets/desain/bg-review.png';

interface Review {
    id: number;
    name: string;
    position: string;
    comment: string;
    rating: number;
    avatarColor: string;
}

const Reviews = () => {
    const reviews: Review[] = [
        {
            id: 1,
            name: "Mark D.",
            position: "Homeowner",
            comment: "TRD did an incredible job restoring my old, creaky wooden stairs. They reinforced the structure and gave it a beautiful finish. Now, I feel safe walking up and down without worrying about loose steps. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 2,
            name: "Brandon M.",
            position: "Interior Designer",
            comment: "I’m amazed at the level of precision TRD puts into their work. Every line, finish, and touch was flawless. They truly take pride in their craftsmanship!",
            rating: 5,
            avatarColor: "bg-pink-100"
        },
        {
            id: 3,
            name: "Eric W.",
            position: "Home Owner",
            comment: "From the first call to project completion, TRD made everything seamless. The team was super friendly, answered all my questions, and got the job done faster than I expected. Will definitely use them again!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 4,
            name: "Mark P.",
            position: "Homeowner",
            comment: "I was worried about my front windows facing the street, but TRD installed a privacy film that keeps people from seeing inside while still letting in natural light. A simple but effective upgrade!",
            rating: 4,
            avatarColor: "bg-yellow-100"
        },
        {
            id: 5,
            name: "Karen W.",
            position: "Homeowner",
            comment: "The TRD team did an amazing job repainting my entire house. They helped me pick the perfect color scheme and finished ahead of schedule. My home looks fresh and new again!",
            rating: 5,
            avatarColor: "bg-pink-100"
        },
        {
            id: 6,
            name: "Chris D.",
            position: "Daily Commuter",
            comment: "I was about to replace my car’s headlights, but TRD suggested a restoration instead. They brought back the original shine, and now my night visibility is so much better. Saved me a ton of money!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 7,
            name: "Chris L.",
            position: "Facility Manager",
            comment: "Not only does TRD provide incredible results, but their customer service is top-notch. They kept me informed every step of the way and ensured I was happy with everything!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 8,
            name: "Jessica L.",
            position: "Small Business Owner",
            comment: "TRD’s pressure washing service was quick, efficient, and left my garage port spotless. The team was professional, and I couldn’t believe the difference it made!",
            rating: 4,
            avatarColor: "bg-yellow-100"
        },
        {
            id: 9,
            name: "Samantha W.",
            position: "Resident",
            comment: "Our mailbox was rusted and falling apart, but TRD restored it beautifully! They fixed the structure, gave it a fresh coat of paint, and now it looks brand new. It’s the small details that make a big difference. Thank you, TRD!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 10,
            name: "Jason L.",
            position: "Car Enthusiast",
            comment: "I was blown away by how spotless my car looked after TRD’s deep cleaning service. They removed every stain from the seats, polished the dashboard, and made the exterior shine like it just came from the showroom. Amazing job!",
            rating: 5,
            avatarColor: "bg-pink-100"
        }
    ];

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgReview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
            />

            {/* Checkered Pattern Overlay */}
            <div className="absolute top-0 right-0 w-1/3 h-full">
                <div className="w-full h-full" style={{
                    background: `
                        repeating-conic-gradient(
                            from 45deg,
                            #000 0deg 90deg,
                            #222 90deg 180deg
                        )
                    `,
                    backgroundSize: '40px 40px',
                    opacity: 0.3
                }}></div>
            </div>

            <div className="relative container mx-auto px-4 z-10">
                {/* Title */}
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Your satisfaction is our priority!
                </h2>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div 
                            key={review.id}
                            className="transform transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-white rounded-lg shadow-xl p-6 h-full flex flex-col">
                                {/* Avatar */}
                                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${review.avatarColor}`}>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;