import Background from '../../assets/images/banner-bg/services-banner.png'

export const ServicesBanner = () => {
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
            <div className="absolute bottom-0 left-0 right-0 m-0 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1216" height="122" viewBox="0 0 1216 122" fill="none">
                    <g filter="url(#filter0_d_514_732)">
                        <path d="M1075.71 35H0V109H1166L1075.71 35Z" fill="url(#paint0_linear_514_732)"/>
                        <path d="M1075.71 35H0V109H1166L1075.71 35Z" fill="url(#pattern0_514_732)" fill-opacity="0.41"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_514_732" x="0" y="0.299999" width="1215.7" height="121.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="26" dy="-11"/>
                            <feGaussianBlur stdDeviation="11.85"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_514_732"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_514_732" result="shape"/>
                        </filter>
                        <pattern id="pattern0_514_732" patternContentUnits="objectBoundingBox" width="0.0360206" height="0.567568">
                            <use xlinkHref="#image0_514_732" transform="scale(0.000600343 0.00945946)"/>
                        </pattern>
                        <linearGradient id="paint0_linear_514_732" x1="1166" y1="72" x2="0" y2="72" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D0202"/>
                            <stop offset="1" stop-color="#E30303"/>
                        </linearGradient>
                        <image id="image0_514_732" width="60" height="60" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB5dZJCgMxDETRunly8wqBBJqmJw+ayn/h/QMjCQiK5JsBIbIINKLzRiNDnmhkyQuNTHmgkS1rNDJmiUbWrNDInAUa2ZuNRoVmolGlWWhUagYa1RpFo2IjaFStF43K9aBRvVY0FGpBQ6WnaCj1BA217tBQ7AoN1c7QUO4IDfX2aKzQFo1V+qOxUl/093lhpX5fex30ZoCtgd6tKX30wTGijeZxumiep4nmdXpo3qeF5rN00HyeBppt1Uezvdpo9lUXzf5qojlWPTTHq4XmnOqgOa8aaM4tP5rzy42mTXnRtCsnmrblQ9O+XGj6lAdNv3Kg6Vs8mv7FohlTGPoDYCVcaevwWx0AAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        What We Do: Expert Solutions for Your Home & Property
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                        Providing high-quality handyman and home maintenance services with professional expertise and attention to detail.
                    </p>
                </div>
            </div>
        </section>
    )
}