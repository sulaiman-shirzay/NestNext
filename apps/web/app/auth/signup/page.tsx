import React from 'react'
import Link from 'next/link'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-1/3 flex flex-col justify-center items-center  '>
        <h1 className='text-center text-2xl font-bold mb-4'>
          Sign Up Page
        </h1>
        <SignUpForm /> 
        <div className='flex justify-between text-sm'>
            <p>Already have an account? &nbsp;</p>
            <Link href={"/auth/login"} className='text-blue-500 hover:underline'>
              Login
            </Link>
        </div>    

    </div>
  )
}

export default SignUpPage