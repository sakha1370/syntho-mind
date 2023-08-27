'use client'
import TopBar from "@/app/components/TopBar";
import Navbar from "@/app/components/Navbar";
import PageHeader from "@/app/components/PageHeader";
import React, {useEffect, useState} from "react";
import ComingSoon from "@/app/components/ComingSoon";
import About from "@/app/components/About";
import Service from "@/app/components/Service";
import {FadeLoader} from "react-spinners";
import Contact from "@/app/components/Contact";

const Page = () => {
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
            ) : (<Service/>)}

        </>
    );
}


export default Page;