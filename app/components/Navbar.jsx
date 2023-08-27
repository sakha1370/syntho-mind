import {BsFillEnvelopeOpenFill, BsFillTelephoneFill} from "react-icons/bs";
import Link from "next/link";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

import React from "react";
import Logo from "@/app/components/Logo";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className={'h-30 bg-white font-normal items-center justify-between text-sky-500 flex flex-col md:flex-row md:h-20 sticky top-0  z-30 shadow'}>
                <div className="left flex items-center md:ml-10">
                    <Logo/>
                    <strong className={'font-extrabold text-4xl font-teko '}>Syntho Mind</strong>
                </div>
                <div className="right flex items-center md:mr-10 text-gray-800 text-2xl font-normal">
                    <Link href={'/'} className={'mx-3 hover:text-sky-500 transition-all duration-300'}>Home</Link>
                    <Link href={'/about'} className={'mx-3 hover:text-sky-500 transition-all duration-300'}>About</Link>
                    <Link href={'/services'} className={'mx-3 hover:text-sky-500 transition-all duration-300'}>Services</Link>
                    {/*inline-block*/}
                    <div className="relative  text-left group hidden">
                        <button type="button"
                                className="px-4 py-4   focus:outline-none  hover:text-sky-500 flex items-center  transition-all duration-300">
                            <span>Pages</span>
                            <MdOutlineKeyboardArrowDown/>
                        </button>
                        <div
                            className={`absolute z-20 left-0  w-40  -mt-1 bg-white  border-gray-300 rounded-md  invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300`}>
                            <ul className="py-1" >
                                <li><a href="#"
                                       className="block px-4 py-2 text-gray-800  hover:text-sky-500 transition-all duration-300">Our
                                    Features</a>
                                </li>
                                <li><a href="#"
                                       className="block px-4 py-2 text-gray-800  hover:text-sky-500 transition-all duration-300">Our
                                    Projects</a>
                                </li>
                                <li><a href="#"
                                       className="block px-4 py-2 text-gray-800  hover:text-sky-500 transition-all duration-300">Team
                                    Members</a>
                                </li>
                                <li><a href="#"
                                       className="block px-4 py-2 text-gray-800  hover:text-sky-500 transition-all duration-300">Appointment</a>
                                </li>
                                <li><a href="#"
                                       className="block px-4 py-2 text-gray-800  hover:text-sky-500 transition-all duration-300">Testimonial</a>
                                </li>
                                <li><a href="#"
                                       className="block px-4 py-2 text-gray-800  hover:text-sky-500 transition-all duration-300">404
                                    Page</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href={'/contact'} className={'mx-3 hover:text-sky-500'} pre>Contact</Link>

                </div>
            </div>
        </>
    );
}

export default Navbar;