import React from 'react'
import MenuItem from './MenuItem'
import { IoMdHome } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 mx-w-6xl sm:mx-auto items-center py-6'>

        <div className='flex '>
            <MenuItem title="HOME" address="/" Icon={IoMdHome}/>
            <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex space-x-5 items-center'>
            <DarkModeSwitch/>
            <Link href="/">
                <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
            </Link>
        </div>


    </div>
  )
}
