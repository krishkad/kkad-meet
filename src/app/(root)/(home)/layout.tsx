import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <nav className='w-full'><Navbar /></nav>
            <main className="w-full">
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default HomeLayout