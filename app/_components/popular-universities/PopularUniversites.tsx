import React from 'react';
import Image from 'next/image';
import ButtonWithArrow from '../ButtonWithArrow'; // Assuming you created the ButtonWithArrow component
import { popularUniversities } from '@/constants/constants';
import Heading from '../Heading';

// Mock data

const PopularUniversities = () => {
    return (
        <section className="relative my-8  w-full h-auto sm:h-[800px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between text-white"
            style={{ backgroundImage: `url('/assets/popular-universities/university-bg.jpg')` }} // Replace with your image path
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center w-full h-full justify-between">
                {/* Top Header */}
                <div className="mt-8 text-center">
                    <Heading parts={[{ text: 'Popular', isSpan: true, spanColor: 'text-primary' }, { text: ' Universities' }]} />
                </div>

                {/* University Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16">
                    {popularUniversities.map((university) => (
                        <div key={university.id} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg transform transition-transform hover:scale-105">
                            <Image src={university.logo} alt={university.content} width={80} height={80} className="object-contain h-20 w-20" />
                            <p className="text-center mt-4 text-sm sm:text-base text-gray-700">{university.content}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="mb-8 mt-4">
                    <ButtonWithArrow size="lg">
                        See More
                    </ButtonWithArrow>
                </div>
            </div>
        </section>
    );
};

export default PopularUniversities;
