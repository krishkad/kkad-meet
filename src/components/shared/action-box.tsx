import { cn } from '@/lib/utils';
import { EventBoxProps } from '@/types/index.t';
import React from 'react'



const ActionBox = ({ title, description, icon, className }: EventBoxProps) => {
    return (
        <div className='w-full'>
            <div className={cn("w-full aspect-square bg-orange-500 p-4 flex flex-col justify-between rounded-sm", className)}>
                <div className="w-full flex justify-center">
                    {icon}
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