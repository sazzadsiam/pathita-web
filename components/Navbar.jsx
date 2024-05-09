'use client';

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6"

import logo from '@/assets/images/logo.svg';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="relative flex justify-between items-center sm:px-20 h-[74px] border-b border-black bg-white">
            <div className="flex justify-between items-center w-full sm:w-auto z-10 h-full px-6 sm:px-0 bg-white">
                <Link href={'./'}><Image src={logo} alt="logo" /></Link>
                <span className="sm:hidden">
                    {
                        menu ?
                            <FaXmark className="text-3xl" onClick={() => setMenu(false)} />
                            :
                            <FaBars className="text-3xl" onClick={() => setMenu(true)} />
                    }
                </span>
            </div>



            <ul className={`absolute sm:static left-0 ${menu ? 'top-[74px]' : 'top-[-300px]'} w-full sm:w-auto flex flex-col sm:flex-row sm:items-center py-5 sm:py-0 px-6 sm:px-0 gap-x-10 gap-y-6 sm:gap-y-0 font-primary text-sm bg-white drop-shadow-lg sm:drop-shadow-none transition-all ease-in duration-[400ms]`}>
                <Link href={'#'} className="navLink">ব্লগ</Link>
                <Link href={'#'} className="navLink">বই</Link>
                <Link href={'#'} className="navLink">লিখুন</Link>
                <Link href={'#'} className="navLink">আমাদের গল্প</Link>
                <button className="bg-gray text-white font-medium px-4 py-2 rounded-3xl">শুরু করুন</button>
            </ul>
        </nav>
    )
}
export default Navbar;