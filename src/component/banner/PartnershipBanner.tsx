import Background from '../../assets/images/banner-bg/banner-partnership.png'
import Background2 from '../../assets/images/banner-bg/banner-partnership2.png'

export const PartnershipBanner = () => {
    return (
        <section className="relative h-[500px] md:h-[700px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="w-full absolute inset-0">
                
                {/* Desktop background without gradient */}
                <div
                    className="hidden md:block w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background})`,
                    }}
                ></div>
                <div
                    className="md:hidden w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background2})`,
                    }}
                ></div>
            </div>

            {/* Content Container */}
            
            <div className="relative container mx-auto px-4 flex flex-col md:flex-row mt-20">
                <div className='md:w-1/2'>

                </div>
                <div className="md:w-1/2 text-black md:text-black space-y-6 text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-playfair">
                        <span>Be Part of an </span>
                        <span className="bg-[#c7b46c] bg-opacity-20"> Unforgettable </span>
                        <span> Curtural Exchange</span> 
                    </h1>
                </div>
            </div>
            {/* <div>
                <img src={Line} alt="line" className="absolute bottom-0 md:bottom-50 left-0 " />
            </div> */}
        </section>
    )
}