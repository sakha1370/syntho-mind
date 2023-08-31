'use client'
import React, {useEffect, useState} from "react";
import Carousel from "@/app/components/Carousel";
import Facts from "@/app/components/Facts";
import About from "@/app/components/About";
import Service from "@/app/components/Service";
import Feature from "@/app/components/Feature";
import Project from "@/app/components/Project";
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