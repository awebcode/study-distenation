"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
interface ButtonWithArrowProps {
    children: React.ReactNode;
    size?: "sm" | "lg" | "default" | "icon" | null;
    onClick?: () => void;
    className?: string;
    href?: string;
    variant?:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null;
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
    children,
    size = "lg",
    onClick,
    className = '',
    href = '#',
    variant="default"
}) => {
    return (
      <motion.button  initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -5 }} // Initial state
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} // Animation to visible
      whileTap={{ scale: 0.95, opacity: 0.8 }} // Animation on click
      transition={{
        duration: 0.8, // Duration for smooth effect
        ease: [0.6, -0.05, 0.01, 0.99], // Custom ease curve
        type: "spring", // Adds spring effect
        stiffness: 120, // Controls bounce
        damping: 10 // Smoothens bounce
      }}
      viewport={{ once: true }}>
      <Button size={size}
          variant={variant}
          onClick={onClick}
          className={cn(
              'w-fit  group flex items-center justify-center rounded-[3px] space-x-2 transition-all duration-300',
              className
          )}>
          <Link className={href} href="#"> <span>{children}</span></Link> <ArrowRight className="w-4 h-4 group-hover:translate-x-1  duration-300" />
            </Button>
        </motion.button>
  )
}

export default ButtonWithArrow