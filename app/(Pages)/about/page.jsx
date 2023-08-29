'use client'
import TopBar from "@/app/components/TopBar";
import Navbar from "@/app/components/Navbar";
import PageHeader from "@/app/components/PageHeader";
import React, {useEffect, useState} from "react";
import ComingSoon from "@/app/components/ComingSoon";
import About from "@/app/components/About";
import Head from "next/head";
import {FadeLoader} from "react-spinners";


const Page = () => {
    return (
        <>
            <About/>
        </>
    );
}

export default Page;