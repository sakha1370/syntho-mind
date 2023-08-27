import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import Image from 'next/image';

const Team = () => {
    const data = [
        {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            name: 'Programmer Name',
            jobTitle: 'Designation',
        },
        {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            name: 'Programmer Name',
            jobTitle: 'Designation',
        },
        {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            name: 'Programmer Name',
            jobTitle: 'Designation',
        },
        {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            name: 'Programmer Name',
            jobTitle: 'Designation',
        },
    ]

    return (
        <>
            <div className="container mx-auto px-3 my-10">
                <ScrollAnimation>
                    <div className="text-center mx-auto mb-5" style={{maxWidth: '600px'}}>
                        <h4 className="text-sky-500 font-bold text-xl mb-3">Team Members</h4>
                        <h1 className="font-extrabold text-5xl mb-5">We Are Creative Architecture Team For Your Dream
                            Home</h1>
                    </div>
                </ScrollAnimation>
                <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, index) => (
                        <ScrollAnimation key={`Team-${item}-${index}`} order={index + 1}>
                            <div key={`Team-${item}-${index}`} className="relative bg-gray-50 hover:ring-8 transition-all duration-300
                        mb-6 w-fit mx-auto">
                                <div className="relative">
                                    <Image className="-mb-5" src="/assets/img/team-1.jpg" alt=""/>
                                    <div className="text-center flex justify-center">
                                        <Link href={'#'} className={'custom-btn2 '}><FaFacebookF/></Link>
                                        <Link href={'#'} className={'custom-btn2'}><FaTwitter/></Link>
                                        <Link href={'#'} className={'custom-btn2 '}><FaLinkedinIn/></Link>
                                        <Link href={'#'} className={'custom-btn2'}><FaInstagram/></Link>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="my-1 font-bold text-2xl">Architect Name</h3>
                                    <span className="text-sky-500">Designation</span>
                                </div>
                            </div>
                        </ScrollAnimation>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Team;