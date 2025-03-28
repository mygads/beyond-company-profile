"use client"

import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Images1 from "../../assets/images/articles/articles1.png"
import Images2 from "../../assets/images/articles/articles2.png"
import Images3 from "../../assets/images/articles/articles3.png"
import Images4 from "../../assets/images/articles/articles4.png"
import Images5 from "../../assets/images/articles/articles6.png"
import Images6 from "../../assets/images/articles/articles7.png"
import Images7 from "../../assets/images/articles/articles8.png"
import { FaUser } from "react-icons/fa6"

interface Author {
    name: string;
    role: string;
    avatar: string | React.ReactNode;
}

interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    author: Author;
    isPopular?: boolean;
    isRecent?: boolean;
}

const ArticlesSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const popularRef = useRef<HTMLDivElement>(null)
    const recentRef = useRef<HTMLDivElement>(null)
    
    const articles: Article[] = [
        {
            id: "1",
            title: "How Study Tours Enhance Learning Beyond the Classroom",
            slug: "how-study-tours-enhance-learning",
            excerpt: "Learning isn't confined to four walls—study tours provide students with immersive experiences that deepen their understanding of subjects while fostering independence and cultural awareness.",
            image: Images1,
            author: {
                name: "Charlotte Delos",
                role: "Travel Advocate",
                avatar: <FaUser/>
            },
            isPopular: true,
            isRecent: false
        },
        {
            id: "2",
            title: "Ultimate Packing Guide for Students on an Educational Tour",
            slug: "ultimate-packing-guide-students",
            excerpt: "Packing smart is key! From travel essentials to study materials, here's everything you need for a hassle-free learning journey.",
            image: Images2,
            author: {
                name: "Adam Cuppy",
                role: "Vlogger",
                avatar: <FaUser/>
            },
            isPopular: true,
            isRecent: false
        },
        {
            id: "3",
            title: "Why Perth is the Best Destination for Educational Tours",
            slug: "why-perth-best-destination",
            excerpt: "Discover why Perth offers the perfect blend of academic resources and cultural experiences for educational travel.",
            image: Images3,
            author: {
                name: "Aaron Patterson",
                role: "Education Specialist",
                avatar: <FaUser/>
            },
            isPopular: false,
            isRecent: true
        },
        {
            id: "4",
            title: "Top 5 Must-Visit Universities in Perth for Study Tours",
            slug: "top-universities-perth-study-tours",
            excerpt: "Explore the leading academic institutions that should be on every educational tour itinerary.",
            image: Images4,
            author: {
                name: "Sam Phipphen",
                role: "Academic Advisor",
                avatar: <FaUser/>
            },
            isPopular: false,
            isRecent: true
        },
        {
            id: "5",
            title: "Maximising Learning During a Study Tour",
            slug: "maximising-learning-study-tour",
            excerpt: "Practical tips to help students get the most educational value from their travel experiences.",
            image: Images5,
            author: {
                name: "Tony Hawk",
                role: "Education Consultant",
                avatar: <FaUser/>
            },
            isPopular: false,
            isRecent: true
        },
        {
            id: "6",
            title: "How to Manage Travel Budgets for Student Tours",
            slug: "manage-travel-budgets-student-tours",
            excerpt: "Financial planning strategies for educational institutions organizing international study trips.",
            image: Images6,
            author: {
                name: "Himali Turn",
                role: "Financial Advisor",
                avatar: <FaUser/>
            },
            isPopular: false,
            isRecent: true
        },
        {
            id: "7",
            title: "Best Cultural Spots in Perth for International Students",
            slug: "cultural-spots-perth-international-students",
            excerpt: "A guide to the most enriching cultural experiences Perth has to offer for educational tours.",
            image: Images7,
            author: {
                name: "Naomi Watts",
                role: "Cultural Guide",
                avatar: <FaUser/>
            },
            isPopular: false,
            isRecent: true
        }
    ];
    
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
            { threshold: 0.1 }
        )

        const popularObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                        entry.target.classList.add("opacity-100")
                        entry.target.classList.remove("translate-x-[-20px]", "opacity-0")
                        }, 200)
                        popularObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        const recentObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                        entry.target.classList.add("opacity-100")
                        entry.target.classList.remove("translate-x-20", "opacity-0")
                        }, 400)
                        recentObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        const currentElement = sectionRef.current
        const currentPopularElement = popularRef.current
        const currentRecentElement = recentRef.current
        
        if (currentElement) {
            observer.observe(currentElement)
        }
        
        if (currentPopularElement) {
            popularObserver.observe(currentPopularElement)
        }
        
        if (currentRecentElement) {
            recentObserver.observe(currentRecentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
            if (currentPopularElement) {
                popularObserver.unobserve(currentPopularElement)
            }
            if (currentRecentElement) {
                recentObserver.unobserve(currentRecentElement)
            }
        }
    }, [])

    const popularPosts = articles.filter(article => article.isPopular);
    const recentPosts = articles.filter(article => article.isRecent);

    return (
        <main>
            <div 
                ref={sectionRef}
                className="py-16 px-4 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Popular Posts Section - 2/3 width */}
                        <div 
                            ref={popularRef}
                            className="lg:w-2/3 transition-all duration-700 ease-out transform opacity-0 border-r p-4 border-gray-300"
                        >
                            <h2 className="text-4xl font-bold mb-8 font-playfair">Popular Posts</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {popularPosts.map((post) => (
                                    <div 
                                        key={post.id}
                                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <Link to={`/articles/${post.slug}`}>
                                            <img 
                                                src={post.image || "/placeholder.svg"} 
                                                alt={post.title} 
                                                className="w-full h-50object-cover"
                                            />
                                            <div className="p-4">
                                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                                <div className="flex items-center">
                                                    {typeof post.author.avatar === 'string' ? (
                                                        <img 
                                                            src={post.author.avatar || "/placeholder.svg"} 
                                                            alt={post.author.name} 
                                                            className="w-10 h-10 rounded-full mr-3"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center bg-gray-200">
                                                            {post.author.avatar}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="font-medium">{post.author.name}</p>
                                                        <p className="text-sm text-gray-500">{post.author.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Posts Section - 1/3 width */}
                        <div 
                            ref={recentRef}
                            className="lg:w-1/3 transition-all duration-700 ease-out transform opacity-0 translate-x-20"
                        >
                        <h2 className="text-4xl font-bold mb-8 font-playfair">Recent Posts</h2>
                        <div className="space-y-6">
                            {recentPosts.map((post) => (
                                <Link 
                                    key={post.id}
                                    to={`/articles/${post.slug}`}
                                    className="flex items-center gap-4 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300 border-b border-gray-300"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-bold mb-1 line-clamp-2">
                                            <span className="text-red-500 mr-1">📍</span> 
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{post.author.name}</p>
                                    </div>
                                    <img 
                                        src={post.image || "/placeholder.svg"} 
                                        alt={post.title} 
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                </Link>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ArticlesSection
