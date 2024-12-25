"use client"
import React, { PropsWithChildren } from 'react'
import { Button } from './button'
import { useFormStatus } from 'react-dom';

const SubmitButton = ({children}: PropsWithChildren) => {
    const { pending } = useFormStatus;
return (
    <div>
        <Button type='submit' aria-disabled={pending} className='w-full mt-4 mb-2'>
            {pending?"submitting...":children}
        </Button>
    </div>
  )
}

export default SubmitButton