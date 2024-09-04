import type { Testimonial } from "@/types/types";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialCard: React.FC<Testimonial & { className?: string }> = ({
    quote,
    author,
    designation,
    imageUrl,
    className,
}) => {
    return (
        <div
            className={`w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 ${className}`}
        >
            <div className="p-2"> <Image
                width={40}
                height={40}
                className="object-cover mx-2 rounded-full w-8 h-8"
                src={"/assets/testimonials/quote.png"}
                alt={author}
            /></div>
            <p className="leading-loose text-gray-500 dark:text-gray-400">{quote}</p>
            <div className="flex gap-2">
{Array.from({ length: 5 }).map((_, index) => (
    <Star key={index} className="text-primary h-4 w-4"/>
))}
            </div>
            <div className="flex items-center mt-6 -mx-2">
                {imageUrl && (
                    <Image
                        width={40}
                        height={40}
                        className="object-cover mx-2 rounded-full w-14 h-14"
                        src={imageUrl}
                        alt={author}
                    />
                )}

                <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">{author}</h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {designation}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default TestimonialCard;