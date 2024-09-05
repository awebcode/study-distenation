import { Button } from '@/components/ui/button';
import React from 'react';

interface CardProps {
    title: string;
    content: string[];
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div  className="flex flex-col items-start justify-center gap-2 md:gap-0 md:items-center md:justify-between bg-white h-auto rounded-lg shadow-md   pb-6 ">
            <Button size={"lg"} className="flex-start text-sm md:text-lg w-full py-6  bg-primary text-white ">{title}</Button>
            <ul className="flex items-start flex-col list-disc px-5 pt-2">
                {content.map((item, index) => (
                    <li key={index} className="text-gray-600 leading-6">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;