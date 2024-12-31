"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '@/components/ui/SubmitButton'
import { signUp } from '@/lib/auth'
import React, { useActionState } from 'react'

const signUpForm = () => {
    const [state, action] = useActionState (signUp, undefined)
  return (
    <form action={action} className='w-100'>
        <div className='flex flex-col gap-2'>
            {state?.message && <p className='text-sm text-red-500'>{state.message}</p>}
            <div className='w-80'>
                <Label htmlFor='name'>
                    Name
                </Label>
                    <Input id='name' name='name' placeholder='Ahmed'/>
            </div>
            {state?.error?.name && <p className='text-sm text-red-500'>{state.error.name}</p>}
            <div>
                <Label htmlFor='email'>
                    Email
                </Label>
                    <Input id='email' name='email' placeholder='ahmed@example.com'/>
            </div>
            {state?.error?.email && <p className='text-sm text-red-500'>{state.error.email}</p>}
            <div>
                <Label htmlFor='password'>
                    Password
                </Label>
                    <Input id='password' name='password' type='password'/>
            </div>
                {state?.error?.password && 
                (
                    <div>
                        <p>Password must:</p>
                        <ul>
                            {state.error.password.map((error) => (<li key={error} className='text-sm text-red-500'>{error}</li>))}
                        </ul>
                    </div>
                )
                }
        </div>
        <SubmitButton>Submit</SubmitButton>
    </form>    
)
}

export default signUpForm