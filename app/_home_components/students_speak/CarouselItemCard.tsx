import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

interface CarouselItemCardProps {
    name: string;
    university: string;
    image: string;
}
const CarouselItemCard = ({ name, university, image }: CarouselItemCardProps) => {
    return (

        <div className="p-2  h-full m-auto w-full shadow-md  rounded-sm">
                    <Image
                        height={1000}
                        width={1000}
                        src={image} // Replace with your actual image path
                        alt={name}
                        className="w-full h-40 object-cover rounded-t-xl"
                    />
                    <div className="p-4 m-auto">
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-xs md:text-sm text-gray-500">{university}</p>
                    </div>

        </div>
    )
}

export default CarouselItemCard