import React from 'react'
import ImageWithContent from './WhyStudyCard'
import Heading from '../Heading'
import { Star } from 'lucide-react'
import ButtonWithArrow from '../ButtonWithArrow'

const WhyStudy = () => {
    return (
        <div className='md:py-12 py-20  space-y-8'>
            {/* Left side image */}
            <ImageWithContent
                imageSrc="/assets/app-process/2.png"
                altText="An example image"
                imagePosition="left"
                imageSize="w-1000 h-1000"
                contentClassName="text-lg"
            >
                <div>

                    <Heading align="text-left" parts={[{ text: 'Why Study in' }, { text: ' USA?', isSpan: true, spanColor: 'text-primary' }]} subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />


                    {/*  */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <h2>Quick Facts</h2>
                            <li className='flex-center gap-2'> <Star className='text-primary h-5 w-5' />
                                <p className='text-neutral-600 text-xs md:text-sm'>USA hosts more than a million international students</p></li>
                            <li className='flex-center gap-2'> <Star className='text-primary h-5 w-5' />
                                <p className='text-neutral-600 text-xs md:text-sm'>Over 25% of world’s top 100 universities are in the USA</p></li>
                            <li className='flex-center gap-2'> <Star className='text-primary h-5 w-5' />
                                <p className='text-neutral-600 text-xs md:text-sm'>Post-study stay back visas (OPT) up to 3 years for STEM programs</p></li>

                            <li className='flex-center gap-2'> <Star className='text-primary h-5 w-5' />
                                <p className='text-neutral-600 text-xs md:text-sm'>Internships (CPT) up to 12 months while studying</p></li> <li className='flex-center gap-2'> <Star className='text-primary h-5 w-5' />
                                <p className='text-neutral-600 text-xs md:text-sm'>Merit Based & Need Based Scholarships</p></li>

                        <ButtonWithArrow>See More</ButtonWithArrow>
                    </div>
                </div>
            </ImageWithContent>

            {/* Right side image */}
            <div className="py-12"> <ImageWithContent
                imageSrc="/assets/app-process/1.png"
                altText="An example image"
                imagePosition="right"
                imageSize="w-1000 h-1000"
                contentClassName="text-lg"
            >
                <Heading align="text-left" parts={[{ text: 'Careers ', isSpan: true, spanColor: 'text-primary' }, { text: ' & Industry' }]} subTitle="One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills and environmental quality." />
                <ButtonWithArrow variant="outline">Read More</ButtonWithArrow>
            </ImageWithContent></div>

        </div>
    )
}

export default WhyStudy