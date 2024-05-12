'use client';

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6"

import logo from '@/assets/images/logo.svg';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="relative flex justify-between items-center md:px-20 h-[74px] border-b border-black bg-white">
            <div className="flex justify-between items-center w-full md:w-auto z-10 h-full px-6 md:px-0 bg-white">
                <Link href={'./'}><Image src={logo} alt="logo" /></Link>
                <span className="md:hidden">
                    {
                        menu ?
                            <FaXmark className="text-3xl" onClick={() => setMenu(false)} />
                            :
                            <FaBars className="text-3xl" onClick={() => setMenu(true)} />
                    }
                </span>
            </div>



            <ul className={`absolute md:static left-0 ${menu ? 'top-[74px]' : 'top-[-300px]'} w-full md:w-auto flex flex-col md:flex-row md:items-center py-5 md:py-0 px-6 md:px-0 gap-x-10 gap-y-6 md:gap-y-0 font-primary text-sm bg-white drop-shadow-lg md:drop-shadow-none transition-all ease-in duration-300`}>
                <Link href={'#'} className="navLink">ব্লগ</Link>
                <Link href={'#'} className="navLink">বই</Link>
                <Link href={'#'} className="navLink">লিখুন</Link>
                <Link href={'#'} className="navLink">আমাদের গল্প</Link>
                <button className="bg-gray text-white font-medium px-4 py-2 rounded-3xl hover:bg-primary hover:text-gray transition-all duration-300">শুরু করুন</button>
            </ul>
        </nav>
    )
}
export default Navbar;