import React from 'react';
import dynamic from 'next/dynamic'
const Heading = dynamic(() => import('../../_reusable-components/Heading'), { ssr: false })


import Image from 'next/image';

// Mock data

const Students_Speak = () => {
    return (
        <section className="relative my-8 w-full h-[400px] flex flex-col items-center text-white">
            {/* Background Image */}
            <div className="relative w-full h-full max-h-[600px]">
                <Image
                    src="/assets/students_speak/bg.png"
                    alt="students_speak"
                    fill
                    className="object-cover w-full h-full"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Heading
                        parts={[
                            { text: "Student's", isSpan: true, spanColor: 'text-primary' },
                            { text: <span className='text-white'> Speak</span> }
                        ]}
                        subTitleClassName="text-gray-300"
                        subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>

                {/* Carousel Items */}

            </div>


        </section>
    );
};

export default Students_Speak;
