import Image from "next/image";
import {FaLaravel} from "react-icons/fa";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import {BiLogoDjango, BiLogoFlutter, BiLogoReact, BiLogoTailwindCss} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";

const Service = () => {
    const data = [
        {
            image: "/assets/img/react.jpg",
            icon: <BiLogoReact className="mb-4 mx-auto text-6xl text-sky-500" />,
            title: "React",
            content: "Building Interactive UIs with React",
        },
        {
            image: "/assets/img/nextjs.jpg",
            icon: <TbBrandNextjs className="mb-4 mx-auto text-6xl text-sky-500" />,
            title: "Next.js",
            content: "Next-level Web Development with Next.js",
        },
        {
            image: "/assets/img/tailwind.png",
            icon: <BiLogoTailwindCss className="mb-4 mx-auto text-6xl text-sky-500" />,
            title: "Tailwind CSS",
            content: "Effortless Styling with Tailwind CSS",
        },
        {
            image: "/assets/img/flutter.jpg",
            icon: <BiLogoFlutter className="mb-4 mx-auto text-6xl text-sky-500" />,
            title: "Flutter",
            content: "Fluttering into the Future: Creating Cross-Platform Apps with Flutter",
        },
        {
            image: "/assets/img/laravel1.jpg",
            icon: <FaLaravel className="mb-4 mx-auto text-6xl text-sky-500" />,
            title: "Laravel",
            content: "Crafting Dynamic Web Applications with Laravel",
        },
        {
            image: "/assets/img/django.jpg",
            icon: <BiLogoDjango className="mb-4 mx-auto text-6xl text-sky-500" />,
            title: "Django",
            content: "Pythonic Perfection: Web Development with Django",
        },
    ]
    return (
        <>
            <div className="container py-5 mx-auto">
                <div className="container px-8">
                    <ScrollAnimation>
                        <div className="text-center mx-auto mb-5 " style={{maxWidth: '600px'}}>
                            <h4 className="text-sky-500 font-bold text-xl mb-3">Our Services</h4>
                            <h1 className="font-extrabold text-5xl mb-5">Empowering Digital Presence: Crafting Websites and Mobile Apps with Modern Frameworks</h1>
                        </div>
                    </ScrollAnimation>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5">
                        {data.map((item, index) => (
                            <ScrollAnimation key={`Services-${item.title}-${index}`} order={index + 1}>
                                <div key={`Services-${item.title}-${index}`} className="{`animate-slideInUp ${
                                    index === 0 ? 'animate-delay-0' : index === 1 ? 'animate-delay-100' : 'animate-delay-200'
                                } mx-3 relative  bg-gray-50 fadeInUp mt-5 group`} h-full rounded-xl overflow-hidden">
                                    <div className="flex-center relative text-center h-full group">
                                        <Image
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                                            src={item.image} alt="" fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                        <div
                                            className="opacity-0 group-hover:opacity-70 absolute z-10 inset-0 bg-black transition-opacity duration-500"></div>
                                        <div className="p-5 z-20  group-hover:text-white">
                                            {item.icon}
                                            {/*<BiLogoReact className="mb-4 mx-auto text-6xl" />*/}
                                            {/*<Image className="mb-4 mx-auto" src={item.icon} alt="Icon"*/}
                                            {/*       width={64} height={64}/>*/}
                                            <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                                            <p className="mb-3  text-warm-gray group-hover:text-white">{item.content}</p>
                                            {/*<a className=" inline-flex w-8 h-8 group-hover:w-32 transition-all duration-300 overflow-hidden items-center bg-white py-1 px-2 text-sky-500 group"*/}
                                            {/*   href="#">*/}
                                            {/*    /!*<BsPlus className='text-lg inline'/>*!/*/}
                                            {/*    <span className='ms-1 me-3 font-extrabold text-xl'>+</span>*/}
                                            {/*    <span*/}
                                            {/*        className='inline-block whitespace-nowrap transition-all duration-500'>Read More</span>*/}
                                            {/*</a>*/}
                                            {/**/}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;