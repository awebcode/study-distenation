import { testimonials } from '@/constants/constants'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import dynamic from 'next/dynamic'
const Heading = dynamic(() => import('../../_reusable-components/Heading'), { ssr: false })


const Testimonials = () => {
    return (
        <div className='py-12 sm:py-20'>
            <Heading parts={[{ text: "What's", isSpan: true, spanColor: 'text-primary' }, { text: " Our student say" }]} subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

            <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.slice(0, 3).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </div>
    )
}

export default Testimonials