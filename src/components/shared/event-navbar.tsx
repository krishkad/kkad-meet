import Link from 'next/link'
import React from 'react'

const EventNavbar = () => {
    return (
        <div className='w-full'>
            <div className="w-full h-16 flex justify-between items-center">
                <div className="">
                    <Link href={'/'}>
                        <h2 className="text-xl font-semibold">kkad <span className="text-primary">Meet</span></h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventNavbar