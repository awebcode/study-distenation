import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
      <Button size={size}
          variant={variant}
          onClick={onClick}
          className={cn(
              'w-fit  group flex items-center justify-center rounded-[3px] space-x-2 transition-all duration-300',
              className
          )}>
          <Link className={href} href="#"> <span>{children}</span></Link> <ArrowRight className="w-4 h-4 group-hover:translate-x-1  duration-300" />
      </Button>
  )
}

export default ButtonWithArrow