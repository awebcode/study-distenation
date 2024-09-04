import React from 'react';

interface HeadingPart {
    text: string | React.ReactNode;
    isSpan?: boolean;
    spanColor?: string;
}

interface HeadingProps {
    parts: HeadingPart[];
    fontSize?: string;
    align?: string;
    subTitle?: string;
    subTitleClassName?: string
}

const Heading: React.FC<HeadingProps> = ({
    parts,
    fontSize = 'text-4xl', // Default font size
    align = 'text-left',
    subTitle = '',
    subTitleClassName = ""
}) => {
    return (
        <div className='prose prose-orange sm:prose-lg dark:prose-invert'>

            <h1 className={`text-2xl sm:${fontSize} ${align} font-semibold  tracking-tight text-neutral-800 overflow-hidden`}>
                {parts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part.isSpan ? (
                            <span className={part.spanColor}>{part.text}</span>
                        ) : (
                            part.text
                        )}
                    </React.Fragment>
                ))}

            </h1>

            <p className={`${align} ${subTitleClassName} text-sm  leading-7 tracking-wider overflow-hidden`}>{subTitle}</p>
        </div>
    );
};

export default Heading;
