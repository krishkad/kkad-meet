import React from 'react'
import Image from 'next/image';

const HeroImage = () => {
    return (
        <div className='w-full mt-10 sm:mt-20'>
            <div className="max-w-5xl mx-auto max-sm:h-[50vh] max-lg:h-[50vh] lg:h-[70vh] grid grid-cols-1 sm:grid-cols-3">
                <div className="relative max-sm:hidden w-full h-full mt-20">
                    <Image src={'/left-phone.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                </div>
                <div className="relative max-sm:hidden w-full h-full">
                    <Image src={'/middile-phone.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                </div>
                <div className="relative max-sm:hidden w-full h-full mt-20">
                    <Image src={'/right-phone.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                </div>
                <div className="sm:hidden relative w-full h-full">
                    <Image src={'/mobile-phone-mockup.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                </div>
            </div>
        </div>
    )
}

export default HeroImage