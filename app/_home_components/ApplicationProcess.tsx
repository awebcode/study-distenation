"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Heading = dynamic(() => import('../_reusable-components/Heading'), { ssr: false })

import { applicationProcess } from '@/constants/constants'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const ApplicationProcess = () => {
    const [windowWidth, setWindowWidth] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth
        }
        return 0
    });

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener on mount
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='py-12 sm:py-20 w-full  flex-center flex-col'>
            <Heading
                align="text-center"
                fontSize="text-3xl sm:text-4xl"
                parts={[
                    { text: 'Our', isSpan: true, spanColor: 'text-primary' },
                    { text: ' Application Process', },
                ]}
                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            {/* Application Process */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  place-items-center gap-y-10 mt-8">


                {applicationProcess.map((item, index) => (
                    <div className="group flex items-center w-full" key={index}>

                        <div className='flex items-start flex-col  justify-around md:justify-start gap-4 w-full h-full'>
                            {/* Dashed border container with rounded logo */}
                            <div
                                className={cn(
                                    'flex w-full items-center',
                                    'after:content-[""] after:w-full after:border-b after:border-gray-300 after:border-dashed after:inline-block group-hover:border-orange-500',
                                    {
                                        'after:border-none':
                                            // Default (2 columns)
                                            (windowWidth < 640 && index % 2 === 1) ||
                                            // Small screens (3 columns)
                                            (windowWidth >= 640 && windowWidth < 768 && index % 3 === 2) ||
                                            // Medium screens (5 columns)
                                            (windowWidth >= 768 && index % 5 === 4) ||
                                            // Last item
                                            (index === applicationProcess.length - 1),
                                    }
                                
                                )}
                            >
                                <div className={`group flex-center  cursor-pointer ${applicationProcess.length - 1 === index ? "bg-primary" : "bg-white"} p-2 h-[40px] w-[50px] sm:h-[60px] sm:w-[80px] rounded-full border border-dashed border-gray-400 hover:border-primary cool-transition overflow-hidden`}>
                                    {applicationProcess.length - 1 !== index ? <Image
                                        width={32} // Adjust as needed
                                        height={32} // Adjust as needed
                                        src={item.icon}
                                        alt={`Icon ${index}`}
                                        loading="lazy"
                                        className="object-cover h-5 w-5 md:h-7 md:w-7 group-hover:scale-105 cool-transition" // Ensure image covers the container
                                    /> : <Image
                                        width={32} // Adjust as needed
                                        height={32} // Adjust as needed
                                        src={`/assets/app-process/visa.png`}
                                        alt={`Icon ${index}`}
                                        loading="lazy"
                                        layout='responsive'
                                            className="object-center h-full w-full group-hover:scale-105 cool-transition " // Ensure image covers the container
                                    />}
                                </div>
                            </div>
                            {/* content */}
                            <div className="sm:-ml-8 flex-grow  flex flex-col border hover:border-orange-400 cool-transition rounded-[2px]">
                                <p className="text-center p-2 text-[10px] leading-6 sm:text-[12px] flex-grow">{item.content}</p>

                            </div>
                        </div>
                    </div>


                ))}
            </div>











        </div>
    )
}

export default ApplicationProcess