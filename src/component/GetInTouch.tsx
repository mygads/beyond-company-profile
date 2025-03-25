import React, { useState, FormEvent } from 'react';
import tooltip from '../assets/desain/Tooltip.png'

interface FormData {
    name: string;
    email: string;
    service: string;
    phone: string;
    message: string;
}

const GetInTouch: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        service: '',
        phone: '',
        message: ''
    });

    const services = [
        "Handyman Services",
        "Home Camera Installation",
        "Window Tinting",
        "Pressure Cleaning",
        "Painting"
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const subject = `New Project Inquiry - ${formData.service}`;
        const body = `
            Name: ${formData.name}
            Phone: ${formData.phone}
            Service Requested: ${formData.service}

            Message:
            ${formData.message}
        `;
        
        window.location.href = `mailto:info@trdelite.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section
            className="relative min-h-[600px] overflow-hidden bg-gray-50"
        >
            <div className="absolute inset-0 z-10 w-5/10 h-full hidden md:block" style={{
                background: `url(${tooltip}) white 50px 50px repeat`,
                clipPath: 'polygon(0 0, 50% 0, 100% 100%, 0 100%)'
                }}>
            </div>
            <div className="relative min-h-[530px] mt-[70px] overflow-hidden bg-[#383838]">
            
                <div className="container mx-auto relative z-10 h-full flex flex-col md:flex-row justify-between items-center py-10 md:py-0 px-4 md:px-6">
                    <div className="flex flex-col items-start w-full md:w-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-1 bg-yellow-500"></div>
                        </div>
                        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold leading-tight max-w-md text-white md:text-black">
                            Your project could be<br />
                            our next success story!
                        </h2>
                    </div>

                    {/* Right Section with Form */}
                    <div className="w-full md:w-5/10 flex items-center">
                        <div className="w-full max-w-2xl">
                            <h3 className="text-xl md:text-2xl font-normal mt-4 text-white my-6 md:my-8">
                                Get in Touch with TRD Elite Services
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        required
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        required
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <select
                                        required
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                    >
                                        <option value="">Services*</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                            {service}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full px-4 py-2 rounded bg-white resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                    <p className="text-sm text-gray-400">
                                        * indicates a required field
                                    </p>
                                    <button
                                        type="submit"
                                        className="px-8 py-2.5 bg-red-600 text-white rounded-full 
                                        hover:bg-red-700 transition-colors duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;