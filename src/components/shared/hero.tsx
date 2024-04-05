import React from 'react'
import { Button } from '../ui/button'
import { FaVideo } from "react-icons/fa";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='w-full'>
            <div className="w-full md:h-[calc(100vh-64px)] md:pb-16 flex max-md:flex-col items-center gap-5">
                <div className="w-full max-h max-md:mt-[80px] max-md:justify-center max-md:items-center md:w-1/2 flex flex-col gap-3 md:gap-5">
                    <div className="flex items-center gap-4">
                        <FaVideo className='w-5 h-5 md:w-8 md:h-8' />
                        <span className="text-xl font-bold">kkad <span className="text-primary">Meet</span></span>
                    </div>
                    <span className="text-4xl md:text-7xl font-bold max-md:text-center">Video calls with anyone, anywhere</span>
                    <span className="text-sm font-medium text-muted-foreground max-md:text-center">Stay connected and collaborate with friends, family, and colleagues no matter where you are.</span>
                    <div className="flex items-center gap-5">
                        <Button>Start Meeting</Button>
                        <Button variant={'ghost'}>Sign up</Button>
                    </div>
                </div>
                <div className="w-full h-[80vh] md:w-1/2">
                    <div className="relative w-full h-full flex justify-center">
                        {/* <Image src={'/Rectangle-1.svg'} fill sizes='height:100%, width:100%' alt='img' /> */}
                        <Image src={'/Rectangle.svg'} priority fill sizes='height:100%, width:100%' alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero