import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const EventNavbar = () => {
    return (
        <div className='w-full'>
            <div className="w-full h-16 flex justify-between items-center">
                <div className="">
                    <Link href={'/'}>
                        <span className="text-xl font-bold text-primary">
                            Talky
                        </span>
                    </Link>
                </div>
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' />
                </SignedIn>
            </div>
        </div>
    )
}

export default EventNavbar