import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-screen h-screen'>{children}</div>
    )
}

export default AuthLayout