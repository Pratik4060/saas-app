import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
const navbar = () => {
  return (
    <nav className='navbar'>
   <Link href ='/'>
      <div className='flex-items-center gap-2.5 cursor-pointer'>
        <Image
         src ='/images/logo.svg' 
         alt='logo' width={50} height={50} />
      </div>
      
   </Link>
   
   <  div className='flex items-center gap-4'>
   <NavItems/>
 <p>sign in</p>
   </div>
    </nav>
  )
}

export default navbar
