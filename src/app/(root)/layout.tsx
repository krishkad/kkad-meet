import Navbar from '@/components/shared/navbar'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <main className="w-full">
                <nav className='w-full'><Navbar /></nav>
                <main className="w-full">{children}</main>
            </main>
        </div>
    )
}

export default RootLayout