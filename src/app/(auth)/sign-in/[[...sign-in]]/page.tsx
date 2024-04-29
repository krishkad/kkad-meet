import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn afterSignInUrl={'/event'} />
    </div>
  )
}

export default SignInPage