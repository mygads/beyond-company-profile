import React from 'react';
import image from '../assets/images/galleries/about-us.png';

export const AboutUsSection: React.FC = () => {
    return (
        <section className="relative bg-gray-100 py-24 overflow-hidden">
            <div className="container mx-auto md:px-16 px-6 mb-20">
                <div className="justify-between flex flex-col md:flex-row gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="md:w-1/2 w-full space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                ABOUT
                            </h2>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                US
                            </h2>
                        </div>
                        <p className="text-lg leading-relaxed">
                            At <span className="font-semibold">TRD Elite Services</span>, we are{' '}
                            <span className="font-semibold">more than just handymen</span> <br />
                            —we are your home improvement partners. With years 
                            of experience in home repairs, installations, and 
                            maintenance, we take pride in delivering high-quality, 
                            reliable, and efficient services for homeowners across 
                            Perth and the South West of WA.
                        </p>
                    </div>
                    <img
                        src={image}
                        alt="Professional handyman with safety equipment"
                        className="object-cover w-full md:w-1/3"
                    />
                </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0">
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
        </section>
    );
};