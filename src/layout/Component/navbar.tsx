"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import LogoIcon from "../../assets/images/logo_trd.png"
import PhoneIcon from "../../assets/icons/phone-icon.png"

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about-us" },
        { name: "Gallery", path: "/gallery" },
        { name: "Review", path: "/review" },
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false)
            }
        }

        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [mobileMenuOpen])

    const isActive = (path: string) => {
        return location.pathname === path
    }

    return (
        <nav className="bg-[#EBEBEB] sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 h-16 md:h-24">
                <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
                    <img
                        src={LogoIcon}
                        alt="Logo"
                        className="md:h-20 h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="md:text-xl text:md font-bold text-gray-900">TRD Elite Services</span>
                </Link>

                <div className="hidden lg:flex items-center space-x-16">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`relative py-6 text-lg transition-all duration-200
                                ${
                                    isActive(item.path)
                                        ? "text-black font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
                                        : "text-gray-600 font-medium hover:text-black hover:font-bold"
                                    }
                                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-600 
                                    before:transform before:scale-x-0 before:transition-transform before:duration-300
                                    hover:before:scale-x-100
                                `}
                            >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/61401947050" // Replace with your actual WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full transition-all duration-300 ease-in-out hover:bg-red-700 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner font-medium"
                    >
                        <img src={PhoneIcon} alt="Phone Icon" className="w-7 mr-2" />
                        Contact Us
                    </a>
                </div>

                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-0   transition-opacity duration-300 ${
                        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div
                        ref={menuRef}
                        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 text-lg transition-colors duration-200 
                                        ${ 
                                            isActive(item.path) 
                                            ? "text-red-600 font-bold" 
                                            : "text-gray-900 hover:text-red-600 hover:font-bold" 
                                        }`}
                                    >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/61401947050" // Replace with your actual WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full px-6 py-3 bg-red-600 text-white text-center rounded-full text-lg font-medium transition-all duration-300 ease-in-out hover:bg-red-700 hover:shadow-lg active:scale-95 active:shadow-inner flex justify-center items-center"
                            >
                                <img src={PhoneIcon} alt="Phone Icon" className="w-7 mr-2" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

