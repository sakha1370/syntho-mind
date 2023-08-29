import {BiChevronRight} from "react-icons/bi";
import {FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import GoogleMap from "@/app/components/GoogleMap";

const Footer = () => {
    return (
        <>
            <div className="mx-0 p-5  bg-gray-900 text-warm-gray w-full ">
                <div className="container mx-auto">
                    <div className=" grid md:grid-cols-2 lg:grid-cols-4">
                        <div className="mt-6 order-2 lg:order-1">
                            <h3 className="mb-4 font-bold text-2xl text-white">Address</h3>
                            <p className="mb-2 flex items-center"><FaAngleRight className=' text-sky-500 text-lg me-3'/>
                                <a href="#" className='pointer-events-none'>Unit 120, Kausar Tower, Kerman, Iran</a>
                            </p>
                            <p className="mb-2 flex items-center"><FaAngleRight className=' text-sky-500 text-lg me-3'/><a
                                href="tel:+989138463446">+989138463446</a></p>
                            <p className="mb-2 flex items-center"><FaAngleRight className=' text-sky-500 text-lg me-3'/><a
                                href="mailto:bestsynthomind@gmail.com">BestSynthoMind@gmail.com</a>
                            </p>
                            <div className="flex pt-2 mb-6">
                                <Link href={'#'} className={'custom-btn hidden'}><FaFacebookF/></Link>
                                <Link href={'#'} className={'custom-btn hidden'}><FaTwitter/></Link>
                                <Link href={'#'} className={'custom-btn hidden'}><FaLinkedinIn/></Link>
                                <Link href={'https://www.instagram.com/synthomind/'} className={'custom-btn'}><FaInstagram/></Link>
                            </div>
                        </div>
                        <div className="mt-6 hidden">
                            <h3 className="mb-4  font-bold text-2xl text-white">Services</h3>
                            <a className="mb-2 flex items-center" href=""><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>Architecture</a>
                            <a className="mb-2 flex items-center" href=""><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>3D Animation</a>
                            <a className="mb-2 flex items-center" href=""><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>House Planning</a>
                            <a className="mb-2 flex items-center" href=""><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>Interior Design</a>
                            <a className="mb-2 flex items-center" href=""><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>Construction</a>
                        </div>
                        <div className="mt-6 order-3  lg:order-2">
                            <h3 className="mb-4 font-bold text-2xl text-white">Quick Links</h3>
                            <Link className="mb-2 flex items-center" href="/about"><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>About Us</Link>
                            <Link className="mb-2 flex items-center" href="/contact"><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>Contact Us</Link>
                            <Link className="mb-2 flex items-center" href="/services"><FaAngleRight
                                className=' text-sky-500 text-lg me-3'/>Our Services</Link>
                            {/*<Link className="mb-2 flex items-center" href=""><FaAngleRight*/}
                            {/*    className=' text-sky-500 text-lg me-3'/>Terms & Condition</Link>*/}
                            {/*<Link className="mb-2 flex items-center" href=""><FaAngleRight*/}
                            {/*    className=' text-sky-500 text-lg me-3'/>Support</Link>*/}
                        </div>
                        <div className='col-span-2 order-1 lg:order-3'>

                            <GoogleMap/>
                        </div>
                        {/*<div className="mt-6">*/}
                        {/*    <h3 className="mb-4 font-bold text-2xl text-white">Newsletter</h3>*/}
                        {/*    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>*/}
                        {/*    <div className="relative mt-2 border border-gray-50" style={{maxWidth: '400px'}}>*/}
                        {/*        <input*/}
                        {/*            className="bg-transparent w-full py-3 ps-6 pe-5 text-warm-gray placeholder:text-warm-gray"*/}
                        {/*            type="text" placeholder="Your e mail"/>*/}
                        {/*        <button type="button"*/}
                        {/*                className="px-6 py-1 bg-sky-500 text-white absolute top-0 right-0 mt-2 me-2">SignUp*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                {/*<hr className='border-gray-700 my-4'/>*/}
                {/*<div className="container mx-auto">*/}
                {/*    <div className="text-center md:text-start mb-3 md:mb-0">*/}
                {/*        &copy; <a href="#" className='text-white'>Your Site Name</a>, All Right Reserved.*/}
                {/*    </div>*/}
                {/*    <div className="text-center md:text-end md:me-3">*/}
                {/*        Designed By <a href="" className='text-white'>HTML Codex</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default Footer;