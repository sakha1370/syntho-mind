import {BsFillEnvelopeOpenFill, BsFillTelephoneFill} from "react-icons/bs";
import Link from "next/link";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import React from "react";

const TopBar = () => {
    return (
        <>

                <div className={'h-14 bg-black text-warm-gray font-normal items-center justify-between hidden lg:flex text-xl '}>
                    <div className="left flex items-center ml-10">
                        <div className="phone flex items-center mx-4">
                            <BsFillTelephoneFill className={'text-sky-500 mr-2'}/>
                            <a href="https://t.me/+989138463446">+989138463446</a>
                        </div>
                        <div className="email flex items-center mx-4">
                            <BsFillEnvelopeOpenFill className={'text-sky-500 mr-2'}/>
                            <a href="mailto:BestSynthoMind@gmail.com">BestSynthoMind@gmail.com</a>

                        </div>
                    </div>
                    <div className="right flex items-center me-10">
                        <Link href={'#'} className={'mx-3 hidden '}>Terms</Link>
                        <Link href={'#'} className={'mx-3 hidden'}>Privacy</Link>
                        <Link href={'#'} className={'custom-btn hidden rounded-md'}><FaFacebookF/></Link>
                        <Link href={'#'} className={'custom-btn hidden rounded-md'}><FaTwitter/></Link>
                        <Link href={'#'} className={'custom-btn hidden rounded-md'}><FaLinkedinIn/></Link>
                        <Link href={'https://www.instagram.com/synthomind/'} className={'custom-btn rounded-md'}><FaInstagram/></Link>
                    </div>
                </div>
        </>
    );
}

export default TopBar;