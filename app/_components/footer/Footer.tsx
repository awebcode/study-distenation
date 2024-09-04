import React from 'react';
import {
    Facebook,
    Instagram,
   
    Phone,
    Mail,
} from 'lucide-react';

import {
    FaWhatsapp,
    
} from "react-icons/fa";

import {
    IoLocationOutline,

} from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
            <div className="container  flex flex-col md:flex-row justify-between items-center w-full">
                <div className="mb-4 md:mb-0">
                    <div className=" flex items-center">
                        <Link href="/">
                            <Image height={100} width={100} className="h-auto w-auto" src="/assets/navbar/logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <p className="text-gray-400 pt-2">The Travel Blog Elementor Template Kit</p>
                    {/* Social Icons */}
                    <div className="flex space-x-4 py-2">
                        <Link href="#" className="text-white hover:text-primary cool-transition">
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="text-white hover:text-primary cool-transition">
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="text-white hover:text-primary cool-transition">
                            <FaWhatsapp className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div>
                        <h2 className="text-xl font-semibold text-primary">Category</h2>
                         <ul className="space-y-2 flex flex-col gap-y-2">
                            <li><Link href="#" className="hover:text-primary cool-transition">Immigration</Link></li>
                            <li><Link href="#" className="hover:text-primary cool-transition">Study Abroad</Link></li>
                            <li><Link href="#" className="hover:text-primary cool-transition">Uncategorized</Link></li>
                            <li><Link href="#" className="hover:text-primary cool-transition">Scholarship</Link></li>
                            <li><Link href="#" className="hover:text-primary cool-transition">News</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-primary">Latest Post</h2>
                        <ul className="space-y-2 flex flex-col gap-y-2">
                            <li><Link href="#" className="hover:text-primary cool-transition">Study in China</Link></li>
                            <li><Link href="#" className="hover:text-primary cool-transition">Bright Scholarships in China</Link></li>
                            <li><Link href="#" className="hover:text-primary cool-transition">How to Apply to Foreign Universities</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-primary">Contact Us</h2>
                        <ul className="space-y-2 flex flex-col gap-y-2">
                            <li>
                                <IoLocationOutline className="text-primary w-4 h-4 inline-block mr-2" />
                                <span>Khai-e, 12(2/4th floor), Pragati Sarani, Gulshan, Dhaka 1212 (Near American Embassy)</span>
                            </li>
                            <li>
                                <Phone className="text-primary w-4 h-4 inline-block mr-2" />
                                <span>+880 1607-026367</span>
                            </li>
                            <li>
                                <Mail className="text-primary w-4 h-4 inline-block mr-2" />
                                <span>info@northwayglobal.com.bd</span>
                            </li>
                        </ul>
                    </div>
                </nav>
               
            </div>
            <div className="mt-4 text-center text-gray-500">
                Designed and Developed By Ethical Den
            </div>
        </footer>
    );
};

export default Footer;