"use client";
import React from 'react';
import { motion } from 'framer-motion';
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

            <motion.h1 initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -5 }} // Start invisible, lower position, slightly smaller and rotated
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}    // Animate to visible, original size, and position
                transition={{
                    duration: 0.8,     // Slower duration for a smooth effect
                    ease: [0.6, -0.05, 0.01, 0.99], // Custom ease curve for professional feel
                    type: "spring",    // Adds a slight spring effect
                    stiffness: 120,    // Controls how bouncy the spring is
                    damping: 10
                }}        // Smoothens the bounceransition details
                viewport={{ once: true }} className={`text-2xl sm:${fontSize} ${align} font-semibold  tracking-tight text-neutral-800 overflow-hidden`}>
                {parts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part.isSpan ? (
                            <span className={part.spanColor}>{part.text}</span>
                        ) : (
                            part.text
                        )}
                    </React.Fragment>
                ))}

            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20, scale: 0.7, rotate: -4 }} // Start invisible, lower position, slightly smaller and rotated
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}    // Animate to visible, original size, and position
                transition={{
                    duration: 0.6,     // Slower duration for a smooth effect
                    ease: [0.4, -0.05, 0.02, 0.99], // Custom ease curve for professional feel
                    type: "spring",    // Adds a slight spring effect
                    stiffness: 110,    // Controls how bouncy the spring is
                    damping: 11
                }}        // Smoothens the bounceransition details
                viewport={{ once: true }} className={`${align} ${subTitleClassName} text-sm  leading-7 tracking-wider overflow-hidden`}>{subTitle}</motion.p>
        </div>
    );
};

export default Heading;
