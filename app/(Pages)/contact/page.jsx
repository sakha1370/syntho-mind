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
    return (
        <>
            <Contact/>

        </>
    );
}


export default Page;