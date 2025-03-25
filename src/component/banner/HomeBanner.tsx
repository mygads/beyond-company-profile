import Background from '../../assets/images/banner-bg/banner-home.png'
import Line from '../../assets/images/home-line-banner.png'

export const HomeBanner = () => {
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
            <div className="relative container mx-auto px-4 h-full flex mt-20">
                <div className="max-w-xl text-black space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-playfair">
                        Transform Your Travel into a Meaningful Learning Experience
                    </h1>
                    <p className="text-lg md:text-2xl text-black" style={{textShadow: '0px 6px 7.7px rgba(0, 0, 0, 0.39)'}}>
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