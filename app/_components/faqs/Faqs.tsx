import React from 'react'
import ImageWithContent from '../why-study-in-usa/WhyStudyCard'
import Heading from '../Heading'
import AccordionComponent from './AccordionComponent'

const Faqs = () => {
    return (
        <div className='py-8  space-y-8'>
            {/* Left side image */}
            <ImageWithContent
                imageSrc="/assets/faqs/faq-image.png"
                altText="Faq image"
                imagePosition="right"
                imageSize="w-1000 h-1000"
                contentClassName="text-lg"
            >
                <div>
                    <Heading align="text-left" parts={[{ text: 'Study in USA' }, { text: " FAQ's?", isSpan: true, spanColor: 'text-primary' }]} subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </div>
                <AccordionComponent/>
            </ImageWithContent>

        </div>
    )
}

export default Faqs