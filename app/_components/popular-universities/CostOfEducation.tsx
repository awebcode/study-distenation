import React from 'react'
import Heading from '../Heading'
import {  Plus } from 'lucide-react'
import ImageWithContent from '../why-study-in-usa/WhyStudyCard'

const CostOfEducation = () => {
  return (
    <div className='py-8  space-y-8'>
      {/* Left side image */}
      <ImageWithContent
        imageSrc="/assets/popular-universities/costOfEducation.png"
        altText="costOfEducation"
        imagePosition="left"
        imageSize="w-1000 h-1000"
        contentClassName="text-lg"
      >
        <div>

          <Heading align="text-left" parts={[{ text: 'Cost', isSpan: true, spanColor: 'text-primary' }, { text: ' of Education' }]} subTitle="In the U.S., tuition fees vary based on the state, the university funding model, and the student’s country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board, they’ve rendered an estimate of last year’s average tuition costs, which will roughly reflect the next few years." />


          {/*  */}
          <div className="flex flex-col justify-start items-start gap-2 pt-4">
            <li className='flex-center gap-2 font-semibold text-primary'><Plus className='text-primary h-4 w-4' /><p>Total Expenses 41535</p></li>
            <li className='flex-center gap-2'>
              <Plus className=' h-4 w-4' />
              <p className='text-neutral-600 text-xs md:text-sm'>Tuition Fees for one-year (Indicative) 25000</p></li>
            <li className='flex-center gap-2'>
              <Plus className=' h-4 w-4' />
              <p className='text-neutral-600 text-xs md:text-sm'>Living and Accommodation 15000</p></li>
            <li className='flex-center gap-2'>
              <Plus className=' h-4 w-4' />
              <p className='text-neutral-600 text-xs md:text-sm'>Visa Fees (Visa & SEVIS) 535</p></li>



          </div>
        </div>
      </ImageWithContent>

     

    </div>
  )
}

export default CostOfEducation