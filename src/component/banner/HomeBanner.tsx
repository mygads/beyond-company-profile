import Background from '../../assets/images/banner-bg/banner-home.png'
import Background2 from '../../assets/images/banner-bg/bg-home.png'
import Line from '../../assets/desain/home-line-banner.png'

export const HomeBanner = () => {
    return (
        <section className="relative bg-white h-[400px] md:h-[600px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="w-full absolute inset-0 mb-20">
                {/* Mobile background with gradient overlay */}
                <div
                    className="md:hidden w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background2})`,
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
            <div className="relative container mx-auto px-4 h-full flex mt-18 md:mt-30">
                <div className="max-w-xl text-black space-y-4 text-white md:text-black">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-playfair">
                        Beyond Dreams Tours
                    </h1>
                    <p className="text-lg md:text-2xl" style={{textShadow: '0px 6px 7.7px rgba(0, 0, 0, 0.39)'}}>
                        Explore Our Tours & Get a Free Consultation
                    </p>
                </div>
            </div>
            <div>
                <img src={Line} alt="line" className="absolute bottom-0 left-0 " />
            </div>
        </section>
    )
}