import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import React from "react";
import ScrollAnimation from "@/app/components/ScrollAnimation";


const About = () => {
    return (
        <>
            <ScrollAnimation>
                <div className="container grid grid-cols-1 lg:grid-cols-2  mx-auto py-16 px-8">

                    <div className="relative h-full px-8
                 outline-sky-500 outline-dashed outline-4" style={{outlineOffset: '-50px', minHeight: '464px'}}>
                        <div className="absolute w-3/4 h-3/4 left-0 top-0   rounded-xl overflow-hidden">
                            <Image className="object-contain" src="/assets/img/mobile1.png" alt="" fill sizes={'25vw'} priority placeholder = 'empty'/>
                        </div>
                        <div className="absolute w-3/4 h-3/4 right-0 bottom-0 rounded-xl overflow-hidden">
                            <Image className="object-contain" src="/assets/img/mobile2.jpg" alt="" fill sizes={'25vw'} priority placeholder = 'empty'/>
                        </div>

                    </div>

                    <div className="h-full flex flex-col justify-between my-10 lg:my-0 lg:ms-10">
                        <h4 className="text-sky-500 font-bold text-xl mb-3 text-center">About Us</h4>
                        <h1 className="font-extrabold text-5xl mb-5 text-center">Empowering Digital Transformation</h1>
                        <p className=' text-warm-gray text-justify'>At Syntho Mind, we are dedicated to revolutionizing the
                            digital landscape. With a passion for innovation and a commitment to excellence, we
                            specialize in crafting cutting-edge solutions that drive businesses forward. Our expertise
                            in web development, app design, backend systems and etc allows us to
                            transform ideas into impactful reality. Join us in shaping the future of technology.</p>
                        <div className="flex items-center mb-5 flex-col md:flex-row">
                            <h1 className="w-48 h-32 border-4 flex-center border-sky-500 font-extrabold text-7xl mb-4"
                                data-toggle="counter-up">
                                <CountUp end={49} duration={10} scrollSpyOnce prefix={'%'}/>
                            </h1>
                            <div className="ps-4 font-bold text-xl">
                                <h3 className="mb-3">Risk-Free: Pay Only If Satisfied</h3>
                                <h3 className="mb-3">49% Weekly, Final 51% Upon Satisfactory Completion</h3>
                                <h3 className="mb-0">Competitive Rates for Premium Results</h3>
                            </div>
                        </div>
                        <Link href="" className="sm:py-3 px-3 sm:px-5 me-5 bg-sky-500 text-white  rounded w-32 text-center
                    hover:ring-4 transition-all duration-300 hidden">Read
                            More</Link>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
}

export default About;