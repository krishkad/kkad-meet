import Image from 'next/image'
import React from 'react'

const PhoneBoard = () => {
    return (
        <main className="w-full h-[150px] lg:h-[500px] relative">
            <Image src={'/phone-group.png'} fill sizes='height:100%,width:100%' className='object-fit' alt='img' />
        </main>
    )
}

export default PhoneBoard