import React, { PropsWithChildren } from 'react'

function AuthLayout({children}:PropsWithChildren) {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-cyan-500 h-screen flex items-center justify-center'>
        {children}
    </div>
  )
}

export default AuthLayout