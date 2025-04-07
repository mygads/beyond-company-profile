import Background from '../../assets/images/banner-bg/banner-services.png'
import Background2 from '../../assets/images/banner-bg/banner-service-hp.png'

export const ServicesBanner = () => {
    return (
        <section className="relative h-[350px] md:h-[600px] overflow-hidden">
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
                    className=" md:hidden w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background2})`,
                    }}
                ></div>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto mr-2 px-4 h-full flex mt-20 justify-end">
                <div className="max-w-xl text-white md:text-black space-y-6 text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-playfair">
                        <span>Transform Your </span>
                        <span className="bg-[#c7b46c] bg-opacity-20"> Travel </span>
                        <span> into a Meaningful Learning Experience</span> 
                    </h1>
                </div>
            </div>
            {/* <div>
                <img src={Line} alt="line" className="absolute bottom-0 md:bottom-50 left-0 " />
            </div> */}
        </section>
    )
}