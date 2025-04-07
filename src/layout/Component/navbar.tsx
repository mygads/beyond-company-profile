"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import LogoIcon from "../../assets/images/logo-beyond.png"
import { FaHandshakeAngle } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

    const menuItems = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "SERVICES", path: "/services" },
        { name: "ARTICLES", path: "/articles" },
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
        <nav className="bg-[#636262] sticky top-0 z-50 font-montserrat">
            <div className="container mx-auto flex items-center justify-between px-4 h-14 md:h-18">
                <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
                    <img
                        src={LogoIcon || "/placeholder.svg"}
                        alt="Beyond Dreams Tours Logo"
                        className="md:h-12 h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center">
                    <div className="flex rounded-full border-2 border-white px-2 py-1 shadow-md" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-10 py-1 text-sm transition-all duration-200 rounded-full
                                    ${
                                    isActive(item.path)
                                        ? "text-white font-bold"
                                        : "hover:text-[#ebd698] text-white font-normal"
                                    }`}
                                style={isActive(item.path) ? { background: 'linear-gradient(97deg, #695C34 -19.68%, #D2C088 102.52%)' } : {}}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    <Link
                        to="/partnership"
                        className="flex items-center px-6 py-2 text-sm text-black rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#D2C088] hover:border-2 active:shadow-inner font-medium gap-2 bg-[#bcab79] hover:text-[#D2C088]"
                    >
                        <FaHandshakeAngle />
                        PARTNERSHIP
                    </Link>
                    <a
                        href="https://wa.me/61452674373"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-2 text-sm bg-[#D9D9D9] rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#D9D9D9] hover:border-2 active:shadow-inner font-medium gap-2 hover:text-[#D9D9D9]"
                    >
                        <FaPhoneAlt />
                        CONTACT US
                    </a>
                </div>

                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6 text-white"
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
                    className={`lg:hidden fixed inset-0 transition-opacity duration-300 ${
                        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div
                        ref={menuRef}
                        className={`fixed right-0 top-0 h-full w-2/3 bg-[#636262] shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 text-sm transition-colors duration-200 
                                        ${
                                        isActive(item.path)
                                            ? "text-[#D2C088] font-bold"
                                            : "text-white hover:text-[#D2C088]"
                                        }`}
                                    >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/partnership"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full px-auto py-3 bg-[#bcab79] text-black text-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-transparent hover:shadow-lg active:scale-95 active:shadow-inner flex justify-center items-center gap-2"
                            >
                                <FaHandshakeAngle />
                                PARTNERSHIP
                            </Link>
                            <a
                                href="https://wa.me/61452674373" // Replace with your actual contact number
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full px-auto py-3 bg-[#D9D9D9] text-black text-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-transparent hover:shadow-lg active:scale-95 active:shadow-inner flex justify-center items-center gap-2"
                            >
                                <FaPhoneAlt />
                                +61 452 674 373
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

