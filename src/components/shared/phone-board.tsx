import Image from 'next/image'
import React from 'react'

const PhoneBoard = () => {
    return (
        <main className="w-full h-[500px] sm:h-[1000px] relative">
            <Image src={'/phone-&-portrait.svg'} fill sizes='height:100%,width:100%' className='object-fit' alt='img' />
        </main>
    )
}

export default PhoneBoard