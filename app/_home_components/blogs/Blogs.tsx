import React from 'react'
import BlogCard from './BlogCard'
import dynamic from 'next/dynamic'
const Heading = dynamic(() => import('../../_reusable-components/Heading'), { ssr: false })


const Blogs = () => {
    return (
        <div className="py-12 md:py-20 space-y-6 w-full">

            <Heading parts={[{ text: 'Our Latest ' }, { text: "Blogs", isSpan: true, spanColor: 'text-primary' }]} subTitle='Lorem ipsum dolor sit  amet consectetur.Lorem ipsum dolor sit  amet consectetur.Lorem ipsum dolor sit  amet consectetur.' />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <BlogCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default Blogs