"use client"

import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Images from "../../../assets/images/articles/articles4.png"
import { ArticlesBanner } from "../../banner/ArticlesBanner"
import LetsJoinJourney from "../../LestJoinJourney"
import ArticlesSection from "../Articles"
import ContactUs from "../../ContactUs"

const TopUniversitiesInPerth: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const headerElement = headerRef.current;
    const contentElement = contentRef.current;
    
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("translate-y-10", "opacity-0")
            headerObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100")
              entry.target.classList.remove("translate-y-10", "opacity-0")
            }, 300)
            contentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (headerElement) {
      headerObserver.observe(headerElement)
    }
    
    if (contentElement) {
      contentObserver.observe(contentElement)
    }
    
    return () => {
      if (headerElement) {
        headerObserver.unobserve(headerElement)
      }
      if (contentElement) {
        contentObserver.unobserve(contentElement)
      }
    }
  }, [])
  
  return (
    <>
      <ArticlesBanner />
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="my-12">
            <Link to="/articles" className="text-amber-600 hover:underline">
              ← Back to Articles
            </Link>
          </div>
          
          <div 
            ref={headerRef}
            className="mb-8 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
              <span className="mr-2">🎓</span> Top 5 Must-Visit Universities in Perth for Study Tours
            </h1>
            <p className="text-center text-gray-600 mb-6">by Sam Phippsen</p>
            
            <div className="mb-8">
              <img 
                src={Images}
                alt="University building in Perth" 
                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="prose prose-lg max-w-none transition-all duration-700 ease-out transform opacity-0 translate-y-10"
          >
            <p className="text-lg">
              Perth, Australia, is not just about stunning beaches—it's also an educational hub with top universities, research institutions, and historical landmarks. Let's explore why Perth is the perfect study tour destination!
            </p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-3">1. Home to World-Class Universities</h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">🏛️</span>
                  University of Western Australia (UWA) – Offers insightful campus tours & STEM workshops.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏛️</span>
                  Curtin University – Specializes in innovation and sustainability research.
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-3">2. Rich Historical & Cultural Attractions</h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">🏰</span>
                  Fremantle Prison – Learn about Australia's convict history.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏛️</span>
                  WA Museum Boola Bardip – Discover Western Australia's indigenous heritage.
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-3">3. Hands-On Learning Experiences</h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">🔬</span>
                  Scitech – A science museum with interactive exhibits.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌿</span>
                  Kings Park & Botanic Garden – A great spot for environmental studies.
                </li>
              </ul>
            </div>
            
            <div className="mt-12 border-t pt-6">
              <p className="text-lg">
                From academic exposure to cultural enrichment, Perth offers an all-in-one educational travel experience.
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

export default TopUniversitiesInPerth
