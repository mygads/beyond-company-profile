import Background from '../../assets/images/banner-bg/banner-about.png'
import Line from '../../assets/desain/home-line-banner.png'

export const AboutBanner = () => {
    return (
        <section className="relative bg-white h-[500px] md:h-[700px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="w-full absolute inset-0 mb-20">
                {/* Mobile background with gradient overlay */}
                <div
                    className="md:hidden w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.74) 47.92%, rgba(255, 255, 255, 0.00) 100%), url(${Background})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                ></div>
                
                {/* Desktop background without gradient */}
                <div
                    className="hidden md:block w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background})`,
                    }}
                ></div>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 h-full flex mt-20 justify-end">
                <div className="max-w-xl text-white space-y-6 text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-playfair">
                        <span>Transform Your </span>
                        <span className="bg-[#c7b46c] bg-opacity-20"> Travel </span>
                        <span> into a Meaningful Learning Experience</span> 
                    </h1>
                </div>
            </div>
            <div>
                <img src={Line} alt="line" className="absolute bottom-0 left-0 " />
            </div>
        </section>
    )
}