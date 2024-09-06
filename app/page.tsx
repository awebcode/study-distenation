import React from 'react'
import Hero from './_home_components/Hero'
import ApplicationProcess from './_home_components/ApplicationProcess'
import WhyStudy from './_home_components/why-study-in-usa/WhyStudyInUsa'
import PopularUniversities from './_home_components/popular-universities/PopularUniversites'
import CostOfEducation from './_home_components/popular-universities/CostOfEducation'
import UsaAtGlance from './_home_components/Usa-at-a-glance/UsaAtGlance'
import Testimonials from './_home_components/testimonials/Testimonials'
import Students_Speak from './_home_components/students_speak/Students_Speak'
import CarouselItems from './_home_components/students_speak/CarouselItems'
import Faqs from './_home_components/faqs/Faqs'
import Blogs from './_home_components/blogs/Blogs'

const page = () => {
  return (
    <div className=''>
      
      <Hero />
      <div className="container">
        <ApplicationProcess />
        <WhyStudy />
      </div>
      <PopularUniversities />
      <div className="container">

        <CostOfEducation />
        <UsaAtGlance />
        <Testimonials />

      </div>

      <div className="relative py-6">
        <Students_Speak />
        <div className="z-20 absolute bottom-[0px] w-full flex justify-center">
          <div className="container absolute bottom-[-200px] py-8 space-y-6">  <CarouselItems /></div>
        </div>
      </div>
      {/* Faqs */}

      <div className="container mt-[300px]">
        <Faqs />

        <Blogs />


      </div>
    </div>
  )
}

export default page