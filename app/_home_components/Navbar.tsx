"use client"

import { useEffect, useState } from 'react';
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
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [animationParent] = useAutoAnimate()
    const isMobile = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <nav ref={animationParent} className={`fixed top-0 w-full z-50 max-h-[100px] md:max-h-full   py-4 shadow-sm ${!isVisible ? 'bg-white' : 'bg-gray-100/80'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center ">
                    {/* Left side logo */}
                    <div className="flex items-center h-24 w-24 sm:h-auto sm:w-auto">
                        <Link href="/">
                            <Image height={1000} width={1000} className="h-full w-full" src="/assets/navbar/logo.svg" alt="Logo" />
                        </Link>
                    </div>

                    {/* Center navigation links */}
                    <div  className="hidden md:flex items-center gap-6 ">
                        {navLinks.map((link) => (
                         
                            <div  key={link.name} className="relative group ">
                                {link.subLinks ? (
                                    <>
                                        <span
                                            // variant={"link"}
                                            className={ `cursor-pointer flex gap-2 ring-0 items-center  group transition-all duration-300 ${isActive(link.path) ? 'text-primary' : 'text-gray-800'
                                                } hover:text-primary`}
                                        >
                                            {link.name}  <Image height={30} width={30} className="h-auto w-auto group-hover:rotate-180" src="/assets/navbar/toggle-icon.svg" alt="Logo" />
                                        </span>
                                        <div  className="absolute translate-y-[100%] opacity-0  backdrop-filter  backdrop-blur-sm border bg-slate-50/80 group-hover:translate-y-[-6%] group-hover:opacity-100  shadow-sm rounded mt-2 py-2  w-full min-w-28 cool-transition duration-500 z-50">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.path}
                                                    className={`cool-transition block px-4 py-2 ${isActive(subLink.path)
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
                    <div className="cursor-pointer flex  items-center gap-2 ">
                        <Link href="/enquire-now">
                            <Button  variant={"outline"} size={isMobile?"sm":"lg"} className="border group border-primary text-primary    rounded-[3px] hover:bg-primary hover:text-white cool-transition">
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
            <div  className={`bg-gray-100/30 backdrop-blur-md z-50 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150%]'} md:hidden cool-transition`}>
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
                    <Link href="/enquire-now">
                        <Button variant={"outline"}  className="w-full py-6 bg-gray-100 border group border-primary text-primary    rounded-[3px] hover:bg-primary hover:text-white cool-transition">
                            <Link href="/enquire-now">Enquire Now</Link> <ArrowRight className="w-4 h-4 group-hover:translate-x-1  duration-300" />
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
