import React, { useState, FormEvent } from 'react';
import tooltip from '../assets/images/galleries/email-bg.png';

interface FormData {
    name: string;
    email: string;
    service: string;
    phone: string;
    message: string;
}

const ContactUs: React.FC = () => {
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
        
        const subject = `Quote Request - ${formData.service}`;
        const body = `
            Name: ${formData.name}
            Phone: ${formData.phone}
            Service Requested: ${formData.service}

            Message:
            ${formData.message}
        `;
        
        window.location.href = `mailto:trdservices@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section className="relative min-h-[600px] overflow-hidden">
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${tooltip})`,
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}
            />

            <div className="relative container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Title */}
                    <div className="text-white">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                            Need a handyman you can trust? Contact us today and experience the TRD difference!
                        </h2>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-[#2D2D2D] p-8 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                            GET A FREE QUOTE!
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        required
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        required
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
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
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full px-4 py-2 rounded bg-white"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full px-4 py-2 rounded bg-white resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>
                            <div className="flex justify-between items-center">
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

        </section>
    );
};

export default ContactUs;