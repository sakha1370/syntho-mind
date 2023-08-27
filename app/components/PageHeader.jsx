import React from "react";
import Image from "next/image"
import Link from "next/link";

const PageHeader = () => {
    return (
        <>
            <div className='relative h-96 text-white flex flex-col justify-center px-14'>
                <Image className='absolute -z-10' src='/assets/img/slide-1.jpg' alt='' fill/>
                <h1 style={{fontSize: 'calc(1.625rem + 4.5vw)'}}
                    className="text-3xl leading-tight animate-slideInDown animate-once font-extrabold">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="uppercase flex text-2xl  mb-0">
                        <li className=""><Link className="" href="/">Home</Link></li>
                        <li className="mx-2 font-extrabold">/</li>
                        <li className=""><Link className="" href="/">Pages</Link></li>
                        <li className="mx-2 font-extrabold">/</li>
                        <li className="text-sky-500 active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </>
    );
}

export default PageHeader;