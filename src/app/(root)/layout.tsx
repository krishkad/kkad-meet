import Navbar from '@/components/shared/navbar'
import { Toaster } from '@/components/ui/toaster'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <main className="w-full">
                <main className="w-full">{children}</main>
                <Toaster />
            </main>
        </div>




    )
}

export default RootLayout