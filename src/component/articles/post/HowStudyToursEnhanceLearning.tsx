import type React from "react"
import { Link } from "react-router-dom"
import Images from "../../../assets/images/articles/articles1.png"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import ArticlesSection from "../Articles"
import LetsJoinJourney from "../../LestJoinJourney"
import ContactUs from "../../ContactUs"

const HowStudyToursEnhanceLearning: React.FC = () => {
    return (
        <>
            <ArticlesBanner />
            <main className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="my-4">
                        <Link to="/articles" className="text-amber-600 hover:underline">
                            ← Back to Articles
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
                        How Study Tours Enhance Learning Beyond the Classroom
                    </h1>
                    <p className="text-center text-gray-600 mb-6">by Charlotte Delos</p>

                    <div className="mb-8">
                        <img
                            src={Images}
                            alt="Students learning outdoors"
                            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="">
                            Learning isn't confined to four walls—study tours provide students with immersive experiences that deepen
                            their understanding of subjects while fostering independence and cultural awareness. But how exactly do they
                            enhance education?
                        </p>

                        <div className="mt-8">
                            <h2 className="text-lg font-bold mb-3">1. Real-World Application of Knowledge</h2>
                            <p>
                            Study tours bridge the gap between theory and practice. Whether it's visiting a historical site, a
                            research facility, or a company, students can see their lessons come to life.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-lg font-bold mb-3">2. Cultural Exposure &  Global Awareness</h2>
                            <p>
                                Traveling to new places introduces students to different cultures, traditions, and perspectives, shaping
                                them into well-rounded individuals.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-lg font-bold mb-3">3. Developing Critical  Thinking & Soft Skills</h2>
                            <p>
                                By navigating new environments, managing schedules, and engaging with experts, students improve their
                                problem-solving, communication, and teamwork skills.
                            </p>
                        </div>

                        <div className="mt-12 border-t pt-6">
                            <p className="">
                                Study tours go beyond textbooks, turning learning into a dynamic and unforgettable experience. Schools and
                                universities should consider making them an essential part of their curriculum.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <LetsJoinJourney />
            <ArticlesSection />
            <ContactUs />
        </>
    )
}

export default HowStudyToursEnhanceLearning

