'use client'
import Contact from "@/app/components/Contact";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import {FadeLoader} from "react-spinners";
import About from "@/app/components/About";


// export const  metadata = {
//     title: {
//         default:'Contact'
//     }
// }
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
            ) : (<Contact/>)}

        </>
    );
}


export default Page;