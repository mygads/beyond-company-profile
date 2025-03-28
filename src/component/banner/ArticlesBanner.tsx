import Background from '../../assets/images/banner-bg/banner-articles.png'

export const ArticlesBanner = () => {
    return (
        <section className="relative h-[200px] md:h-[410px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="w-full absolute inset-0">
                
                {/* Desktop background without gradient */}
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background})`,
                    }}
                ></div>
            </div>

            {/* Content Container */}
            
            <div className="relative container mx-auto px-4 h-full flex items-end justify-end pb-10">
                <div className="text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight font-playfair">
                        Articles
                    </h1>
                </div>
            </div>
        </section>
    )
}