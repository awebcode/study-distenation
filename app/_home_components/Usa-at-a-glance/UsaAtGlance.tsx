import { usa_at_glance_data } from '@/constants/constants'
import React from 'react'
import Card from './CardItem'
import dynamic from 'next/dynamic'
const Heading = dynamic(() => import('../../_reusable-components/Heading'), { ssr: false })


const UsaAtGlance = () => {
    return (
        <div className='py-12 sm:py-20'>
            <Heading parts={[{ text: 'USA', isSpan: true, spanColor: 'text-primary' }, { text: " at a Glance" }]} />
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {usa_at_glance_data.map((card) => (
                    <Card key={card.id} title={card.title} content={card.content} />
                ))}
            </div></div>
    )
}

export default UsaAtGlance