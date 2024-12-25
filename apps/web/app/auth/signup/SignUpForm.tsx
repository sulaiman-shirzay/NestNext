import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '@/components/ui/SubmitButton'
import React from 'react'
const signUpForm = () => {
  return (
    <form action="">
        <div className='flex flex-col gap-2'>
            <div>
                <Label htmlFor='name'>
                    Name
                </Label>
                    <Input id='name' name='name' placeholder='Ahmed'/>
            </div>
            <div>
                <Label htmlFor='email'>
                    Email
                </Label>
                    <Input id='email' name='email' placeholder='ahmed@example.com'/>
            </div>
            <div>
                <Label htmlFor='password'>
                    Password
                </Label>
                    <Input id='password' name='password' type='password'/>
            </div>
        </div>
        <SubmitButton>Submit</SubmitButton>
    </form>    
)
}

export default signUpForm