import { Button } from '@/components/ui/button';
import React from 'react';

interface CardProps {
    title: string;
    content: string[];
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div  className=" bg-white h-auto rounded-lg shadow-md pb-6">
            <Button size={"lg"} className="text-lg w-full py-6  bg-primary text-white  font-bold mb-2">{title}</Button>
            <ul className="flex items-start flex-col list-disc p-3 h-full ">
                {content.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;