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
    return (
        <>
            <Service/>
        </>
    );
}


export default Page;