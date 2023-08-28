import {TbChecks} from "react-icons/tb";
import Link from "next/link";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import React from "react";
import {BiCurrentLocation} from "react-icons/bi";
import {IoCall} from "react-icons/io5";
import {SiGmail} from "react-icons/si";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import GoogleMap from "@/app/components/GoogleMap";

const Contact = () => {
    return (
        <>
            <ScrollAnimation>

                <div className="container mx-auto px-8 my-6  overflow-hidden">
                    <div className="row ">
                        <div className="text-center mx-auto mb-5  " style={{maxWidth: '600px'}}>
                            <h4 className="text-sky-500 font-bold text-xl mb-3">Contact Us</h4>
                            <h1 className="font-extrabold text-5xl mb-5">We&apos;re excited to receive your message</h1>
                        </div>
                        <div className="grid lg:grid-cols-3 lg:gap-3 w-full">
                            <div className="flex flex-col justify-between w-full h-full me-4 font-bold text-xl min-w-0">
                                <h4 className="text-sky-500 font-bold text-xl mb-3 text-center">Contacts Way</h4>
                                <h1 className="font-extrabold text-5xl mb-5 text-center">Syntho Mind</h1>
                                <div className="card flex items-center mb-2">
                                    <div className="box h-24 w-24 bg-black text-sky-500 flex-center me-3" style={{minWidth: '96px'}}>
                                        <BiCurrentLocation className='text-4xl   '/>
                                    </div>
                                    <div className="content">
                                        <p className='me-3  text-warm-gray '>Address</p>
                                        <h3 className="my-1 font-bold text-xl">Unit 120, Kausar Tower, Kerman, Iran </h3>
                                    </div>
                                </div>
                                <div className="card flex items-center mb-2">
                                    <div className="box h-24 w-24 bg-black text-sky-500 flex-center me-3">
                                        <IoCall className='text-3xl   '/>
                                    </div>
                                    <div className="content">
                                        <p className='me-3  text-warm-gray my-1'>Call Us Now</p>
                                        <a className="my-1 font-bold text-xl" href='tel:+989138463446'>+989138463446</a>
                                    </div>
                                </div>
                                <div className="card flex items-center">
                                    <div className="box h-24 w-24 bg-black text-sky-500 flex-center me-3"  style={{minWidth: '96px'}}>
                                        <SiGmail className='text-4xl   '/>
                                    </div>
                                    <div className="content flex flex-col justify-center">
                                        <p className='me-3  text-warm-gray my-1'>Mail Us Now</p>
                                        <a className="my-1 font-bold text-xl" href='mailto:BestSynthoMind@gmail.com'>BestSynthoMind@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:mt-0 my-4">
                                <Image src={'/assets/img/reyhane.jpg'} alt={'slide-1'}
                                       width="50%" height="100%" priority placeholder = 'empty'  />
                            </div>
                            <div className="w-full md:mt-4  lg:mt-0 flex flex-col justify-center">
                                <h4 className="text-sky-500 font-bold text-xl mb-3">ABOUT MANAGER</h4>
                                <h1 className="font-extrabold text-5xl mb-5">Mrs. Reyhane Ebrahimi</h1>
                                <div className="">
                                    <div className="flex items-baseline mb-2">
                                        <h4 className="me-2 mb-0 font-extrabold text-2xl">Designation: </h4>
                                        <p className="mb-0 text-warm-gray text-xl">CEO &amp; Founder</p>
                                    </div>
                                    <div className="flex items-baseline mb-2">
                                        <h4 className="me-2 mb-0 font-extrabold text-2xl">Email:</h4>
                                        <a className="mb-0 text-warm-gray text-xl" href='mailto:ReyhaneEbrahimi27@yahoo.com'>ReyhaneEbrahimi27@yahoo.com</a>
                                    </div>
                                    <div className="flex items-baseline">
                                        <h4 className="me-2 mb-0 font-extrabold text-2xl">Phone:</h4>
                                        <a className="mb-0 text-warm-gray text-xl" href='tel:+989162491186'>+989162491186</a>
                                    </div>

                                    <div className="flex items-center mt-5">
                                        <h4 className="me-2 mb-0 font-extrabold text-2xl">Social:</h4>
                                        <div className="flex">
                                            <Link href={'#'} className={'custom-btn hidden'}><FaFacebookF/></Link>
                                            <Link href={'#'} className={'custom-btn hidden'}><FaTwitter/></Link>
                                            <Link href={'https://www.linkedin.com/in/reyhane-ebrahimi/'} className={'custom-btn'}><FaLinkedinIn/></Link>
                                            <Link href={'https://www.instagram.com/reyhan_ebrahimi1/'} className={'custom-btn'}><FaInstagram/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-10 h-96">
                        <GoogleMap/>
                    </div>

                </div>
            </ScrollAnimation>
        </>
    );
}

export default Contact;