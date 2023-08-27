import './globals.css'
// import '/public/styles/style.scss'
import {Teko, Inter} from 'next/font/google'
import TopBar from "@/app/components/TopBar";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Footer from "@/app/components/Footer";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

const teko = Teko({
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-teko',
    subsets: ['latin']
})
const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
})

export const metadata = {
    title: {
        default: 'Syntho Mind',
        template: 'Syntho Mind | %s',
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className="scroll-smooth">

        <body className={`${teko.variable} ${inter.className}  no-scrollbar flex flex-col min-h-screen`}>
        <TopBar/>
        <Navbar/>
        <div className='relative flex-grow'>
            {children}
        </div>
        <ScrollToTopButton />
<div className='relative h-1'></div>
        <Footer/>
        </body>
        </html>
    )
}
