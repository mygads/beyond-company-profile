import Background from '../../assets/images/banner-bg/about-us-banner.png'

export const AboutUsBanner = () => {
    return (
        <section className="relative h-[600px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="w-full absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                }}
            >
            </div>

            <div 
                className="absolute bottom-0 right-0 h-10 md:h-20 w-7/10 ml-auto"
                style={{ 
                    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                    background: 'linear-gradient(90deg, #7D0202 0%, #E30303 100%)',
                    filter: 'drop-shadow(26px -11px 23.7px rgba(0, 0, 0, 0.25))'
                }}
            >
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Your Trusted Handyman Solution in Perth & South West!
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                        Providing high-quality handyman and home maintenance services with professional expertise and attention to detail.
                    </p>
                </div>
            </div>
        </section>
    )
}