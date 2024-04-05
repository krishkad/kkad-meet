import React from 'react'
import { Button } from '../ui/button'
import { FaVideo } from "react-icons/fa";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='w-full'>
            <div className="w-full h-[calc(100vh-64px)] md:pb-16 flex max-md:flex-col items-center gap-5">
                <div className="w-full max-md:h-1/2 max-md:justify-center max-md:items-center md:w-1/2 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <FaVideo className='w-8 h-8' />
                        <span className="text-3xl font-bold">kkad <span className="text-primary">Meet</span></span>
                    </div>
                    <span className="text-4xl md:text-7xl font-bold max-md:text-center">Video calls with anyone, anywhere</span>
                    <span className="text-sm font-medium text-muted-foreground max-md:text-center">Stay connected and collaborate with friends, family, and colleagues no matter where you are.</span>
                    <div className="flex items-center gap-5">
                        <Button>Start Meeting</Button>
                        <Button variant={'ghost'}>Sign up</Button>
                    </div>
                </div>
                <div className="w-full max-md:h-1/2 md:w-1/2 h-full">
                    <div className="relative w-full h-full flex gap-1 justify-center items-center">
                        {/* <Image src={'/Rectangle-1.svg'} fill sizes='height:100%, width:100%' alt='img' /> */}
                        <Image src={'/Rectangle.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero