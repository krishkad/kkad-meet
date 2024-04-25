"use client"
import React from 'react'
import { PiCircleNotchThin } from "react-icons/pi";

const Loader = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <PiCircleNotchThin className='w-[100px] h-[100px] rotate-[360] repeat-infinite animate-spin text-zinc-400' />
        </div>
    )
}

export default Loader