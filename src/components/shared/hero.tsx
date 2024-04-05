import React from 'react'
import { Button } from '../ui/button'
import { FaVideo } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='w-full'>
            <div className="w-full h-[calc(100vh-64px)] pb-16 flex items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <FaVideo className='w-8 h-8' />
                        <span className="text-3xl font-bold">kkad <span className="text-primary">Meet</span></span>
                    </div>
                    <span className="text-7xl font-bold">Video calls with anyone, anywhere</span>
                    <span className="text-sm font-medium">Stay connected and collaborate with friends, family, and colleagues no matter where you are.</span>
                    <div className="flex items-center gap-5">
                        <Button>Start Meeting</Button>
                        <Button variant={'ghost'}>Sign up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero