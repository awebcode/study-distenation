"use client"
import React from 'react'
import Heading from './Heading'
import { applicationProcess } from '@/constants/constants'
import Image from 'next/image'

const ApplicationProcess = () => {
    return (
        <div className='py-6 w-full sm:py-8 flex-center flex-col'>
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

            <div className="relative w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 place-items-center gap-y-10 mt-8">


                {applicationProcess.map((item, index) => (
                    <div key={index} className="relative w-full flex-center flex-col  gap-6 ">
                        {/* Dashed border container with rounded logo */}
                        <div className="flex-center w-full  items-center ">
                            <div className='flex-center bg-white p-3 h-[40px] w-[40px] sm:h-[70px] sm:w-[70px]    rounded-full border border-dashed  border-gray-500'>
                                
                                <Image
                                    width={40} // Adjust as needed
                                    height={40} // Adjust as needed
                                    src={item.icon}
                                    alt={`Icon ${index}`}
                                    className="h-4 w-4 sm:h-7 sm:w-7 object-cover" // Adjust as needed
                                />
                            </div>

                        </div>
                        <p className="absolut text-center  max-w-[200px] text-xs sm:text-sm p-2 border hover:border-orange-400 cool-transition">{item.content}</p>


                        {/* Dashed border line between items */}
                    </div>
                ))}
            </div>


          


        </div>
    )
}

export default ApplicationProcess