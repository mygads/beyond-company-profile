import type React from "react"
import { Link } from "react-router-dom"
import LogoIcon from "../../assets/images/logo-beyond.png"

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Article", path: "/article" },
        { name: "Office", path: "/office" },
    ]

    return (
        <footer className="bg-[#312D1F] text-white py-12 px-4 md:px-0">
            <div className="container mx-auto flex flex-col items-center">
                {/* Logo */}
                <div className="mb-8 flex flex-col items-center">
                    <img
                        src={LogoIcon || "/placeholder.svg?height=100&width=100"}
                        alt="Beyond Dreams Tours Logo"
                        className="md:h-36 h-26 w-auto mb-2"
                    />
                </div>

                {/* Navigation */}
                <nav className="mb-10">
                    <ul className="flex flex-wrap justify-center gap-8">
                        {navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path} className="text-white hover:text-amber-500 transition-colors duration-300 md:text-lg">
                            {item.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Media */}
                <div className="flex justify-center gap-10 mb-10">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <div className="text-white group-hover:text-amber-500 transition-colors duration-300 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mb-1"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-amber-500 transition-colors duration-300">
                        Facebook
                        </span>
                    </a>

                    <a href="mailto:info@beyonddreamstours.com" className="flex flex-col items-center group">
                        <div className="text-white group-hover:text-amber-500 transition-colors duration-300 mb-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mb-1"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-amber-500 transition-colors duration-300">
                        Email
                        </span>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <div className="text-white group-hover:text-amber-500 transition-colors duration-300 mb-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mb-1"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        </div>
                        <span className="text-sm text-gray-200 group-hover:text-amber-500 transition-colors duration-300">
                        Instagram
                        </span>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-gray-200 text-base">© Copyright {currentYear} Beyond Dreams Tours. All Rights Reserved.</div>
                <div className="text-gray-200 text-base">Developed by <a href="https://www.genfity.com.au" className="text-amber-500 hover:text-amber-400 transition-colors duration-300" target="_blank">Genfity Digital Solution</a></div>
                <div className="text-gray-200 text-base"><a href="https://www.genfity.com.au" className="text-amber-500 hover:text-amber-400 transition-colors duration-300" target="_blank">www.genfity.com.au</a></div>
            </div>
        </footer>
    )
}

export default Footer

