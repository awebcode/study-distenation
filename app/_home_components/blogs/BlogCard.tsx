import { AvatarIcon } from '@radix-ui/react-icons'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaComment } from 'react-icons/fa'

const BlogCard = () => {
    return (
        <div className="max-w-2xl overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-md">
            <Image height={200} width={200} className={`object-cover w-full h-40 md:h-52`} src={`https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80`} alt="Article" />

            <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-500">
                    <Calendar /> <span>August/24/2024</span>
                </div>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit consectetur ipsum dolor.</p>
                <hr />
                <div className="text-xs sm:text-sm flex justify-between items-center text-gray-500"><div className='flex-center gap-2'><AvatarIcon /><span>Black Theme</span></div>
                    <div className='flex-center  gap-2'><FaComment /><span>25 Comments</span></div></div>
            </div>
        </div>
    )
}

export default BlogCard