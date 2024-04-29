import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignUp afterSignUpUrl={'/event'} />
    </div>)
}

export default SignUpPage