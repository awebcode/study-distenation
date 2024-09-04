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

        <div className="p-2 h-auto w-full h-full rounded-sm">
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <Image
                        height={1000}
                        width={1000}
                        src={image} // Replace with your actual image path
                        alt={name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-xs md:text-sm text-gray-600">{university}</p>
                    </div>
                </div>

        </div>
    )
}

export default CarouselItemCard