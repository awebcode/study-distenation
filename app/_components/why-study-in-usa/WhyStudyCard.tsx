import React from 'react';
import Image from 'next/image';

interface ImageWithContentProps {
    imageSrc: string;
    altText: string;
    imagePosition?: 'left' | 'right';
    imageSize?: string;
    contentClassName?: string;
    children: React.ReactNode;
}
const ImageWithContent: React.FC<ImageWithContentProps> = ({
    imageSrc,
    altText,
    imagePosition = 'left',
    imageSize = 'w-40 h-40', // Default size can be adjusted
    contentClassName = '', // Additional classes for the content
    children,
}) => {
    return (
        <div className={`flex flex-col sm:flex-row ${imagePosition === 'right' ? 'sm:flex-row-reverse' : ''} items-center gap-6`}>
            <div className={`flex-shrink-0 ${imageSize}`}>
                <Image
                    src={imageSrc}
                    alt={altText}
                    className="object-cover h-auto min-w-[250px] sm:h-full sm:w-full"
                    layout="responsive"
                    width={150}
                    height={150}
                />
            </div>
            <div className={`flex-1 ${contentClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default ImageWithContent;
