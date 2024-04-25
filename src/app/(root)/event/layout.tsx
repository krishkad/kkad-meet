import { StreamProvider } from '@/provider/stream-provider'
import React, { ReactNode } from 'react'

const EventLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <StreamProvider>
                {children}
            </StreamProvider>
        </div>
    )
}

export default EventLayout