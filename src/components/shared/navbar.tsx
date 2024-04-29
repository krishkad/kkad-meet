import { navLinks } from '@/constant/index.c'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className="max-w-wrapper">
                <div className="w-full h-16 flex items-center justify-between">
                    <div className='flex items-center gap-5'>
                        <span className="text-xl font-bold">
                            Kkad <span className="text-primary">Meet</span>
                        </span>
                        <div className="hidden md:flex items-center gap-5">
                            {navLinks.map((item, i) => {
                                return <Link href={item.href} key={i} className='hover:text-foreground hover:underline text-muted-foreground'>
                                    <span className="font-semibold text-sm">{item.label}</span>
                                </Link>
                            })}
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <SignedOut>
                            <Link href={'/sign-up'}>
                                <Button className='text-sm' size={'sm'}>Sign Up</Button>
                            </Link>
                            <Link href={'/sign-in'}>
                                <Button className='text-sm' size={'sm'} variant={'ghost'}>Sign In</Button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl='/sign-in' />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar