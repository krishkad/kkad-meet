import React from 'react'
import Image from 'next/image';

const HeroImage = () => {
    return (
        <div className='w-full'>
            <div className="w-full h-[400px] sm:h-[600px]">
                <div className="relative w-full h-full mt-20">
                    <Image src={'/call-chat.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                </div>
            </div>
        </div>
    )
}

export default HeroImage