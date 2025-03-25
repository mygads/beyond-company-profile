import React from 'react';
import { ThumbsUp } from 'lucide-react';
import rocketIcon from '../assets/icons/mission-icon.png';
import puzzleIcon from '../assets/icons/vision-icon.png';

interface Benefit {
    title: string;
    description: string;
    color: string;
}

const MissionVision: React.FC = () => {
    const leftBenefits: Benefit[] = [
        {
            title: "Experienced Professionals",
            description: "Skilled and certified experts in home maintenance.",
            color: "bg-[#2D2D2D]"
        },
        {
            title: "Comprehensive Services",
            description: "From handyman tasks to security camera installation, we do it all.",
            color: "bg-[#2D2D2D]"
        }
    ];

    const rightBenefits: Benefit[] = [
        {
            title: "Customer Satisfaction Guaranteed",
            description: "Your happiness is our top priority.",
            color: "bg-[#2D2D2D]"
        },
        {
            title: "Affordable & Transparent Pricing",
            description: "No hidden costs, just honest service.",
            color: "bg-[#2D2D2D]"
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Mission Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                        <div className="flex flex-col items-center gap-6">
                            <img 
                                src={rocketIcon || "/placeholder.svg"} 
                                alt="Mission" 
                                className="w-24 h-24 object-contain"
                            />
                            <div className="w-1 h-16 bg-gradient-to-b from-red-700 to-red-500"></div>
                            <p className="text-lg max-w-sm">
                                To provide top-quality handyman services that enhance the 
                                comfort, safety, and aesthetics of your home
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
                        <div className="flex flex-col items-center gap-6">
                            <img 
                                src={puzzleIcon || "/placeholder.svg"} 
                                alt="Vision" 
                                className="w-24 h-24 object-contain"
                            />
                            <div className="w-1 h-16 bg-gradient-to-b from-red-700 to-red-500"></div>
                            <p className="text-lg max-w-sm">
                                To be the most trusted home service provider in Perth, 
                                known for reliability and excellence
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-20 px-4">
                    {/* Left Benefits */}
                    <div className="space-y-4 px-4 lg:px-12">
                        {leftBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`relative transform -skew-x-35 ${benefit.color} 
                                    py-4 px-8 text-white shadow-lg hover:scale-105 
                                    transition-transform duration-300 cursor-pointer`}
                            >
                                <div className="flex items-center gap-4 transform skew-x-35">
                                    <ThumbsUp className="w-6 h-6 text-amber-400 flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold">{benefit.title}</span>
                                        <span className="text-md text-gray-300">{benefit.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Benefits */}
                    <div className="space-y-4 px-4 lg:px-12">
                        {rightBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`relative transform -skew-x-35 ${benefit.color} 
                                    py-4 px-8 text-white shadow-lg hover:scale-105 
                                    transition-transform duration-300 cursor-pointer`}
                            >
                                <div className="flex items-center gap-4 transform skew-x-35">
                                    <ThumbsUp className="w-6 h-6 text-amber-400 flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold">{benefit.title}</span>
                                        <span className="text-md text-gray-300">{benefit.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;