import React from 'react'
import { Button } from '../ui/button'
import { FaVideo } from "react-icons/fa";

import Link from 'next/link';
import HeroImage from './hero-image';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='w-full'>
            <div className="w-full flex flex-col items-center ">
                <div className="flex w-full xl:w-1/2 mt-16 flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-4">
                        <FaVideo className='w-5 h-5 md:w-8 md:h-8' />
                        <span className="text-xl font-bold">kkad <span className="text-primary">Meet</span></span>
                    </div>
                    <span className="text-4xl md:text-6xl font-bold text-center">Video calls with <br />anyone, anywhere</span>
                    <span className="text-sm font-medium text-muted-foreground text-center">Stay connected and collaborate with friends, family, and colleagues no matter where you are.</span>
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

            </div>
        </div>
    )
}

export default Hero