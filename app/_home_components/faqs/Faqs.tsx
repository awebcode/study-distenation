import React from 'react'
import dynamic from 'next/dynamic'
const Heading = dynamic(() => import('../../_reusable-components/Heading'), { ssr: false })
const LTRImageWithContent = dynamic(() => import('../../_reusable-components/LTR_Image_Content'), { ssr: false })
import AccordionComponent from './AccordionComponent'

const Faqs = () => {
    return (
        <div className='py-8  space-y-8'>
            {/* Left side image */}
            <LTRImageWithContent
                imageSrc="/assets/faqs/faq-image.png"
                altText="Faq image"
                imagePosition="right"
                imageSize="w-1000 h-1000"
                contentClassName="text-lg"
            >
                <div>
                    <Heading align="text-left" parts={[{ text: 'Study in USA' }, { text: " FAQ's?", isSpan: true, spanColor: 'text-primary' }]} subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </div>
                <AccordionComponent />
            </LTRImageWithContent>

        </div>
    )
}

export default Faqs