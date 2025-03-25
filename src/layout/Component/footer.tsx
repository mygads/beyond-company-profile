import type React from "react"
import LogoIcon from "../../assets/images/logo_trd_bg.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer: React.FC = () => {
    return (
        <footer className="w-full" style={{ background: 'linear-gradient(180deg, #262626 44.51%, #7D0202 100%)' }}>
        {/* Map Section */}
            <div className="container h-[300px] mx-auto mt-0 md:mt-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31042966.945975985!2d111.99863680475336!3d-21.602594890039306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a31fc9bd233974d%3A0x1fafa75dc6ca69f4!2s157%20Braidwood%20Dr%2C%20Australind%20WA%206233%2C%20Australia!5e1!3m2!1sid!2sid!4v1740538816451!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            {/* Footer Content */}
            <div className="text-white py-12 mt-12 container mx-auto">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Logo & Address */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img src={LogoIcon} alt="TRD Elite Services" className="h-20 w-auto mr-5" />
                            <div className="space-y-2 ">
                                <h3 className="text-xl">Office</h3>
                                <a 
                                    href="https://maps.app.goo.gl/ohGTQrha2gurDzyf8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-gray-300"
                                >
                                    <p className="text-sm font-light text-white">
                                        157 Braidwood DR
                                    </p>
                                    <p className="text-sm font-light text-white">
                                        Australind WA 6233
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-2">
                        <h3 className="text-xl">Services</h3>
                        <ul className="text-sm font-light text-gray-300 space-y-2">
                            <li><a className="hover:underline underline-offset-2 hover:text-white" href="/services?category=handyman">Handyman</a></li>
                            <li><a className="hover:underline underline-offset-2 hover:text-white" href="/services?category=camera-installation">Home Camera</a></li>
                            <li><a className="hover:underline underline-offset-2 hover:text-white" href="/services?category=window-tinting">Window Tinting</a></li>
                            <li><a className="hover:underline underline-offset-2 hover:text-white" href="/services?category=pressure-cleaning">Pressure Cleaning</a></li>
                            <li><a className="hover:underline underline-offset-2 hover:text-white" href="/services?category=painting">Painting</a></li>
                        </ul>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <h3 className="text-xl">Email US</h3>
                        <a href="mailto:trdservices@outlook.com" className="text-sm font-light hover:text-white text-gray-300 hover:underline underline-offset-2">
                        trdservices@outlook.com
                        </a>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl">Social Media</h3>
                        <div className="space-y-2">
                            <a
                                href="https://www.instagram.com/trdeliteservices/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-white text-gray-300"
                            >
                                <FaInstagram className="mr-2" />
                                <span className="text-sm font-light hover:text-white text-gray-300">@
                                trdeliteservices</span>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61559896857434"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-white text-gray-300"
                            >
                                <FaFacebookF className="mr-2" />
                                <span className="text-sm font-light hover:text-white text-gray-300">TRD Elite Services</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                        <h3 className="text-xl">Call US</h3>
                        <a href="https://wa.me/61401947050" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white hover:text-gray-300">
                        WhatsApp: +61 401 947 050 <br />
                        Tel: +61 401 947 050
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="container mx-auto px-4 mt-8 pt-8 border-t border-red-700">
                <p className="text-sm text-center text-white">© 2025 by TRD Elite Services. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

