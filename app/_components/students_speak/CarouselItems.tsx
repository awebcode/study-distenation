import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselItemCard from './CarouselItemCard'
import { carouselItems } from '@/constants/constants'
const CarouselItems = () => {
  return (
      <Carousel
          opts={{
              align: "start",
          }}
          className="relative w-full max-w-[800px] p-8 "
      >
          <CarouselContent className='overflow-x-hidden'>
              {carouselItems.map((item) => (
                  <CarouselItem key={item.id} className="basis-[200px] md:basis-1/2 lg:basis-1/3">
                      <CarouselItemCard key={item.id} {...item} />
                  </CarouselItem>
              ))}
          </CarouselContent>
          <div className="flex absolute bottom-[-50px] left-1/2">
              
              <CarouselPrevious className='bg-primary text-white' />
              <CarouselNext className='bg-primary text-white' />
          </div>
      </Carousel>
  )
}

export default CarouselItems