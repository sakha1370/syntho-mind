'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {BsEnvelopeOpenFill, BsFillEnvelopeOpenFill, BsFillTelephoneFill} from "react-icons/bs";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Script from "next/script";
import Link from "next/link";
import TopBar from "@/app/components/TopBar";
import Navbar from "@/app/components/Navbar";
import Carousel from "@/app/components/Carousel";
import Facts from "@/app/components/Facts";
import About from "@/app/components/About";
import Service from "@/app/components/Service";
import Feature from "@/app/components/Feature";
import Project from "@/app/components/Project";
import Team from "@/app/components/Team";
import Appointment from "@/app/components/Appointment";
import Testimonial from "@/app/components/Testimonial";
import Footer from "@/app/components/Footer";
import Blogs from "@/app/components/Blogs";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import PageHeader from "@/app/components/PageHeader";
import NotFind from "@/app/components/NotFind";
import ComingSoon from "@/app/components/ComingSoon";
import Head from "next/head";
import {FadeLoader} from "react-spinners";


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false)
    }, []);
    return (
        <>
            {isLoading ? (
                <div className='flex-center absolute inset-0 ' >
                    <FadeLoader color="#36d7b7"/>
                </div>
            ) : (
                <>
                    <Carousel/>
                    <Facts/>
                    <About/>
                    <Service/>
                    <Feature/>
                    <Project/>
                    {/*<Team/>*/}
                    {/*<Testimonial/>*/}
                    {/*<ComingSoon/>*/}
                    {/*<Blogs/>*/}
                    {/*<NotFind/>*/}
                </>

                )}

        </>
    )
}