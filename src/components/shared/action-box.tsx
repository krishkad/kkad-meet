"use client"
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

interface EventBoxProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
    handleClick: () => void;
}

const ActionBox = ({ title, description, icon, className, handleClick }: EventBoxProps) => {
    return (
        <div className='w-full cursor-pointer' onClick={handleClick}>
            <div className={cn("w-full aspect-square bg-orange-500 p-4 flex flex-col justify-between rounded-sm", className)}>
                <div className="w-full flex justify-start">
                    <div className="flex p-2 bg-[#e6e6e667] rounded-md">
                        {icon}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-sm font-medium text-zinc-50">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ActionBox