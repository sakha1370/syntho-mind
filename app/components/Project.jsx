import Link from "next/link";
import {TbChecks} from "react-icons/tb";
import {useState} from "react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import Image from 'next/image';

const Project = () => {
    const [N, setNumber] = useState(1);
    const data = [
        {
            logo:'/assets/img/bootstrap.png',
            title: "Elevating User Experience: Bootstrap and Sass Frontend",
            content: "With Bootstrap and Sass, we've transformed ideas into a visually stunning and functionally flawless website. Seamlessly adapting to screens of all sizes, this project showcases the power of Bootstrap's framework and Sass's dynamic styling.",
            list: ['Html', 'Sass', 'Bootstrap'],
            link: 'https://kermansadid.ir'
        },
        {
            logo:'/assets/img/nextjs1.png',
            title: "Next.js and Tailwind: Dynamic Frontend Solutions",
            content: "Explore a site that combines the dynamic capabilities of Next.js and the efficient styling of Tailwind. From engaging visuals to seamless responsiveness, this project embodies the union of Next.js's server-side rendering and Tailwind's utility-first approach.",
            list: ['Next.js', 'Tailwind'],
            link: 'https://divar.ir/daal/zagros/'
        },
        {
            logo:'/assets/img/nextjs2.png',
            title: "Efficiency and Elegance: Modern Frontends",
            content: "Efficiency and elegance converge in this Next.js and Tailwind project. Lightning-fast loading times and streamlined styling are the hallmarks of a site that embodies the contemporary standards of frontend development.",
            list: ['Next.js', 'Tailwind'],
            link: 'https://divar.ir/jobs-explore'
        },
        {
            logo:'/assets/img/laravel.jpg',
            title: "Adding Depth to Backend Excellence",
            content: "Meet our esteemed team member who has lent their expertise to the backend landscape at Zoodex, wielding the Laravel framework with finesse. With a proven track record in crafting efficient and robust solutions, their role in enhancing backend functionalities has been instrumental. Their contributions at Zoodex have not only showcased their mastery of Laravel but have also added a layer of depth to the company's backend excellence.",
            list: ['Laravel'],
            link: 'https://zoodex.ir'
        },

    ]
    return (
        <>
            <ScrollAnimation>

                <div className="container mx-auto px-8 my-6 ">
                    <div className="text-center mx-auto mb-5  " style={{maxWidth: '600px'}}>
                        <h4 className="text-sky-500 font-bold text-xl mb-3">Our Projects</h4>
                        <h1 className="font-extrabold text-5xl mb-5">Visit Our Latest Projects And Our Innovative
                            Works</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-3">
                        <div className="flex flex-col justify-between w-full h-full me-4 font-bold text-xl">
                            <button
                                onClick={() => {
                                    setNumber(1)
                                }}
                                className={`tab-btn mb-4 ${N === 1 ? 'bg-sky-500 text-white' : 'bg-gray-50'}`}
                                type="button">
                                <h3 className="m-0">1. Sadid Industrial Town</h3>
                            </button>
                            <button
                                onClick={() => {
                                    setNumber(2)
                                }}
                                className={`tab-btn mb-4 ${N === 2 ? 'bg-sky-500 text-white' : 'bg-gray-50'}`}
                                type="button">
                                <h3 className="m-0">02. Divar | zagros</h3>
                            </button>
                            <button
                                onClick={() => {
                                    setNumber(3)
                                }}
                                className={`tab-btn mb-4 ${N === 3 ? 'bg-sky-500 text-white' : 'bg-gray-50'}`}
                                type="button">
                                <h3 className="m-0">03. Divar | jobs-explore</h3>
                            </button>
                            <button
                                onClick={() => {
                                    setNumber(4)
                                }}
                                className={`tab-btn mb-0 ${N === 4 ? 'bg-sky-500 text-white' : 'bg-gray-50'}`}
                                type="button">
                                <h3 className="m-0">04. Zoodex</h3>
                            </button>
                        </div>
                        <div className="w-full md:mt-4  lg:col-span-2 lg:mt-0">
                            <div className="grid gap-3 md:grid-cols-2">
                                <Image className="w-full h-full mt-4  md:mt-0" src={data[N - 1].logo}
                                     style={{objectFit: 'cover', minHeight: '350px'}} alt="" width={500} height={500}/>
                                <div className="mt-6 flex flex-col justify-between md:mt-0 md:h-auto">
                                    <h1 className="mb-3 font-bold text-2xl  text-justify">{data[N - 1].title}</h1>
                                    <p className="mb-4 text-warm-gray  text-justify">{data[N - 1].content}</p>
                                    {data[N - 1].list[0] ? (<p className="me-3  text-warm-gray"><TbChecks
                                        className='inline me-3 text-sky-500 font-extrabold text-2xl'/>{data[N - 1].list[0]}
                                    </p>) : ''}
                                    {data[N - 1].list[1] ? (<p className="me-3  text-warm-gray"><TbChecks
                                        className='inline me-3 text-sky-500 font-extrabold text-2xl'/>{data[N - 1].list[1]}
                                    </p>) : ''}
                                    {data[N - 1].list[2] ? (<p className="me-3  text-warm-gray"><TbChecks
                                        className='inline me-3 text-sky-500 font-extrabold text-2xl'/>{data[N - 1].list[2]}
                                    </p>) : ''}

                                    <Link href={data[N - 1].link} target='_blank'
                                          className="flex-center text-white py-3 px-3 mt-5 bg-sky-500  rounded hover:ring-4 transition-all duration-300 relative">Visit Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
}

export default Project;