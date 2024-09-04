"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {useAutoAnimate} from '@formkit/auto-animate/react'
import { ArrowRight, MenuIcon, XIcon } from 'lucide-react';
import { navLinks } from '@/constants/constants';

import {useMediaQuery} from "@/hooks/useMediaQuery"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname=usePathname()

    const isActive = (path: string) => pathname === path;

    const [animationParent] = useAutoAnimate()
    const isMobile = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <nav className="z-50 max-h-[60px] sm:max-h-[100%] bg-gray-200px py-6 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side logo */}
                    <div className=" flex items-center">
                        <Link href="/">
                            <Image height={50} width={50} className="h-24 w-24 sm:h-auto sm:w-auto" src="/assets/navbar/logo.svg" alt="Logo" />
                        </Link>
                    </div>

                    {/* Center navigation links */}
                    <div  className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                         
                            <div  key={link.name} className="relative group">
                                {link.subLinks ? (
                                    <>
                                        <Button
                                            variant={"link"}
                                            className={ `flex gap-2 ring-0 items-center  group transition-all duration-300 ${isActive(link.path) ? 'text-primary' : 'text-gray-800'
                                                } hover:text-primary`}
                                        >
                                            {link.name}  <Image height={30} width={30} className="h-auto w-auto group-hover:rotate-180" src="/assets/navbar/toggle-icon.svg" alt="Logo" />
                                        </Button>
                                        <div  className="absolute translate-y-[-100%] opacity-0 group-hover:translate-y-[0%] group-hover:opacity-100 bg-gray-100 shadow-sm rounded mt-2 py-2 w-48 cool-transition">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.path}
                                                    className={`block px-4 py-2 ${isActive(subLink.path)
                                                            ? 'text-primary'
                                                            : 'text-gray-800'
                                                        } hover:bg-gray-100 hover:text-primary`}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.path}
                                            className={`cool-transition ${isActive(link.path) ? 'text-primary' : 'text-gray-800'
                                            } hover:text-primary `}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right side button */}
                    <div className="flex items-center gap-2 ">
                        <Link href="/enquire-now">
                            <Button  variant={"outline"} size={isMobile?"sm":"lg"} className="border group border-primary text-primary  rounded-md hover:bg-primary hover:text-white transition-all duration-300">
                               <Link href="/enquire-now">Enquire Now</Link> <ArrowRight className="w-4 h-4 group-hover:translate-x-1  duration-300" />
                            </Button>
                        </Link>
                        {/* Mobile menu button */}
                        <div className="flex  md:hidden">
                            <Button
                                size={isMobile ? "sm" : "lg"}
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2  hover:bg-primary text-white cool-transition rounded-md"
                            >
                                {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                    </div>

                  
            </div>

            {/* Mobile menu */}
            <div ref={animationParent} className={`bg-gray-100 z-50 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150%]'} md:hidden cool-transition`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <Link
                                href={link.path}
                                className={`block hover:bg-primary hover:rounded-md  hover:text-white px-3 py-2 rounded-md cool-transition ${isActive(link.path) ? 'text-primary' : 'text-gray-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                            {link.subLinks && (
                                <div   className="pl-4 cool-transition">
                                    {link.subLinks.map((subLink) => (
                                        <Link
                                            key={subLink.name}
                                            href={subLink.path}
                                            className={`block hover:bg-primary hover:rounded-md hover:text-white px-3 py-2 rounded-md ${isActive(subLink.path)
                                                    ? 'text-primary'
                                                    : 'text-gray-800'
                                                }`}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
