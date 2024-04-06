import React from 'react'
import { Button } from '../ui/button'
import { FaVideo } from "react-icons/fa";

import Link from 'next/link';
import HeroImage from './hero-image';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='w-full'>
            <div className="w-full flex flex-col items-center relative">
                <div className="flex w-full md:w-1/2 h-[40vh] flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-4">
                        <FaVideo className='w-5 h-5 md:w-8 md:h-8' />
                        <span className="text-xl font-bold">kkad <span className="text-primary">Meet</span></span>
                    </div>
                    <span className="text-4xl md:text-6xl font-bold text-center">Video calls with anyone, anywhere</span>
                    <span className="text-sm font-medium text-muted-foreground max-md:text-center">Stay connected and collaborate with friends, family, and colleagues no matter where you are.</span>
                    <div className="flex items-center gap-5">
                        <Link href={'/event'}>
                            <Button>Start Meeting</Button>
                        </Link>
                        <Link href={'/sign-up'}>
                            <Button variant={'ghost'}>Sign up</Button>
                        </Link>
                    </div>
                </div>
                <HeroImage />
                {/* <Image src={'/emoji-1.png'} width={40} height={40} className='absolute inset-y-1/2' alt='img' />
                <Image src={'/emoji-2.png'} width={40} height={40} className='absolute inset-y-24 inset-x-3' alt='img' />
                <Image src={'/emoji-3.png'} width={40} height={40} className='absolute inset-y-1/2 inset-x-4' alt='img' />
                <Image src={'/emoji-4.png'} width={40} height={40} className='absolute inset-y-1/2 inset-x-2' alt='img' /> */}
            </div>
        </div>
    )
}

export default Hero