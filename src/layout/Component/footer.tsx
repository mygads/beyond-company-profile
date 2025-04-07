import type React from "react"
import { Link } from "react-router-dom"
import LogoIcon from "../../assets/images/logo-beyond.png"

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Article", path: "/articles" },
        { 
            name: "Office", 
            path: "https://maps.app.goo.gl/PTLxc444mPgobgSu8",
            target: "_blank",
            rel: "noopener noreferrer" 
        },
    ]

    return (
        <footer className="bg-[#312D1F] text-white py-10 px-4 md:px-0">
            <div className="mb-8 container mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.9087774772233!2d115.74891400000001!3d-33.2601346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a31fc9bd233974d%3A0x1fafa75dc6ca69f4!2s157%20Braidwood%20Dr%2C%20Australind%20WA%206233%2C%20Australia!5e1!3m2!1sid!2sid!4v1743995225038!5m2!1sid!2sid" width="100%" height="250" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                {/* Logo */}
                <div className="mb-8 flex flex-col items-center">
                    <img
                        src={LogoIcon || "/placeholder.svg?height=100&width=100"}
                        alt="Beyond Dreams Tours Logo"
                        className="md:h-26 h-20 w-auto mb-2"
                    />
                </div>

                {/* Navigation */}
                <nav className="mb-10">
                    <ul className="justify-center flex flex-row gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.target ? (
                                    <a 
                                        href={item.path} 
                                        target={item.target}
                                        rel={item.rel}
                                        className="text-white text-sm md:text-md hover:text-amber-500 transition-colors duration-300 "
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link 
                                        to={item.path} 
                                        className="text-white text-sm md:text-md hover:text-amber-500 transition-colors duration-300 "
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Media */}
                <div className=" justify-center gap-6 mb-10">
                    {/* <a
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
                        <span className="text-xs text-gray-300 group-hover:text-amber-500 transition-colors duration-300">
                        Facebook
                        </span>
                    </a> */}

                    <a href="mailto:info@beyonddreamstours.com.au" className="flex flex-row items-center group gap-4">
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
                        info@beyonddreamstours.com.au
                        </span>
                    </a>

                    <a
                        href="http://instagram.com/beyonddreamstour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center group gap-4"
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
                        @beyonddreamstour
                        </span>
                    </a>
                    {/* Added WhatsApp Link */}
                    <a
                        href="https://wa.me/61452674373"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center group gap-4"
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
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-amber-500 transition-colors duration-300">
                            +61 452 674 373
                        </span>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-gray-200 text-sm text-center">© Copyright {currentYear} Beyond Dreams Tours.</div>
                <div className="text-gray-200 text-sm">Developed by <a href="https://www.genfity.com.au" className="text-amber-500 hover:text-amber-400 transition-colors duration-300" target="_blank">Genfity Digital Solution</a></div>
                <div className="text-gray-200 text-sm"><a href="https://www.genfity.com.au" className="text-amber-500 hover:text-amber-400 transition-colors duration-300" target="_blank">www.genfity.com.au</a></div>
            </div>
        </footer>
    )
}

export default Footer

