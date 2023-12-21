"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(true);
    const [ isHidden, setIsHidden ] = useState(true);
    const [ isAboutClosed, setIsAboutClosed ] = useState(true);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    const handleAbout = () => {
        setIsAboutClosed(!isAboutClosed)
    }

    return (
        <nav className={`${isOpen ? '' : 'sticky'} bg-white z-30 w-full top-0 px-4 py-5 md:bg-transparent lg:px-12`}>
            <div className="flex items-center space-x-10 justify-between">
                <Link href="/">
                    <Image src={logo} alt="Site Icon" className='w-[8rem] h-[4rem]' />
                </Link>

                <div className="hidden [&>a]:font-semibold [&>div>div>span]:font-semibold [&>div>div>div>a]:font-semibold md:flex md:flex-wrap md:items-center md:justify-center space-x-5">
                    <Link href="/" className="hover:text-lightBlue">Home</Link>
                    <Link href="/services" className="hover:text-lightBlue">Services</Link>
                    <div onMouseEnter={handleAbout} onMouseLeave={handleAbout} onClick={handleAbout} className="cursor-pointer z-30">
                        <div className="hover:text-lightBlue flex items-center space-x-1">
                            <span>About Us</span>
                            <span>{isAboutClosed ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</span>
                        </div>
                        {isAboutClosed ? '' :
                            <div className="z-50">
                                <div className="bg-white absolute pr-9 pl-3 py-3 flex flex-col space-y-3 shadow-md hover:[&>a]:text-lightBlue">
                                    <Link onClick={handleAbout} href="/about/our-church" >Our Church</Link>
                                    <Link onClick={handleAbout} href="/about/our-beliefs" >Our Beliefs</Link>
                                </div>
                            </div>}
                    </div>
                    <Link href="/services" className="hover:text-lightBlue">Services</Link>
                    <Link href="/contact" className="hover:text-lightBlue">Contact Us</Link>
                </div>

                <button
                    onClick={() => { handleOpen(); handleHidden() }}
                    aria-label='Hamburger Menu'
                    className={`hamburger ${isOpen ? '' : 'open'} block md:hidden focus:outline-none hover:text-[#ec4949]`}
                >
                    <div>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                </button>
            </div>

            <div className="md:hidden">
                <div id="menu" className={`flex-col ${isHidden ? 'hidden' : 'flex'} absolute place-items-start self-end py-8 bg-white bg-opacity-95 sm:w-auto sm:self-center left-0 right-0 drop-shadow-md`}>
                    <div className="mr-auto flex flex-col space-y-6 pl-4">
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/">Home</Link>

                        <div onClick={handleAbout} className="cursor-pointer">
                            <div className="flex items-center space-x-1">
                                <span>About Us</span>
                                <span>{isAboutClosed ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
                            </div>
                            {isAboutClosed ? '' :
                                <div className="z-50">
                                    <div className="relative pt-2 flex flex-col space-y-4 [&>a]:border-b [&>a]:pb-2 hover:[&>a]:border-lightBlue">
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/about/our-church" >Our Company</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/about/our-beliefs" >Our Branches</Link>
                                    </div>
                                </div>}
                        </div>
                        <Link href="/servies" className="hover:text-lightBlue">Servies</Link>
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
