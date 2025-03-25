import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { X } from 'lucide-react';
import after1 from '../assets/images/galleries/after1.png';
import before1 from '../assets/images/galleries/before1.png';
import after2 from '../assets/images/galleries/after2.png';
import before2 from '../assets/images/galleries/before2.png';
import after3 from '../assets/images/galleries/after3.png';
import before3 from '../assets/images/galleries/before3.png';
import after4 from '../assets/images/galleries/after4.png';
import before4 from '../assets/images/galleries/before4.png';
import after5 from '../assets/images/galleries/after5.png';
import before5 from '../assets/images/galleries/before5.png';
import image1 from '../assets/images/galleries/image1.png';
import image2 from '../assets/images/galleries/image2.png';
import image3 from '../assets/images/galleries/image3.png';
import image4 from '../assets/images/galleries/image4.png';
import image5 from '../assets/images/galleries/image5.png';
import image6 from '../assets/images/galleries/image6.png';
import image7 from '../assets/images/galleries/image7.png';
import image8 from '../assets/images/galleries/image8.png';



interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

const Galleries: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const beforeAfterImages = [
        {
            before: before1,
            after: after1,
            alt: "Ceiling repair transformation"
        },
        {
            before: before2,
            after: after2,
            alt: "Bench restoration transformation"
        },
        {
            before: before3,
            after: after3,
            alt: "Concrete patio transformation"
        },
        {
            before: before4,
            after: after4,
            alt: "Concrete patio transformation"
        },
        {
            before: before5,
            after: after5,
            alt: "Concrete patio transformation"
        },
    ];

    const galleryImages: GalleryImage[] = [
        { id: 1, src: after1, alt: "Carpet cleaning" },
        { id: 2, src: after2, alt: "Car interior detailing" },
        { id: 3, src: after3, alt: "Exterior fixtures" },
        { id: 4, src: after4, alt: "Concrete patio work" },
        { id: 5, src: after5, alt: "Vehicle interior cleaning" },
        { id: 6, src: image1, alt: "Carpet cleaning" },
        { id: 7, src: image2, alt: "Car interior detailing" },
        { id: 8, src: image3, alt: "Exterior fixtures" },
        { id: 9, src: image4, alt: "Concrete patio work" },
        { id: 10, src: image5, alt: "Vehicle interior cleaning" },
        { id: 11, src: image6, alt: "Concrete patio work" },
        { id: 12, src: image7, alt: "Concrete patio work" },
        { id: 13, src: image8, alt: "Concrete patio work" },
        { id: 14, src: before1, alt: "Concrete patio work" },
        { id: 15, src: before2, alt: "Concrete patio work" },
        { id: 16, src: before3, alt: "Concrete patio work" },
        { id: 17, src: before4, alt: "Concrete patio work" },
        { id: 18, src: before5, alt: "Concrete patio work" },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#8B0000] mb-8">
                    Swipe to Reveal! – See the Transformation
                </h2>
                <div className="space-y-8">
                    {/* Left Side - Before/After Sliders */}
                    <div className="w-full ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {beforeAfterImages.map((image, index) => (
                                <div key={index} className="shadow-xl rounded-lg overflow-hidden max-h-[250px]">
                                    <ReactCompareImage
                                        leftImage={image.before}
                                        rightImage={image.after}
                                        sliderPositionPercentage={0.5}
                                        handle={
                                            <div key={`handle-${index}`} className="w-4 h-4 bg-red-600 rounded-full border-2 border-white" style={{ zIndex: 2 }} />
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Gallery Grid */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {galleryImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Click to enlarge
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage.src || "/placeholder.svg"}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-[90vh] object-contain"
                    />
                </div>
            )}
        </section>
    );
};

export default Galleries;