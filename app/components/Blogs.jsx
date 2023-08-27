import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/app/components/ScrollAnimation";

const Blogs = () => {
    const data = [
        {
            image: "/assets/img/service-1.jpg",
            icon: "/assets/img/icon-5.png",
            title: "We have 25 years of experience in architecture industry",
            date: "01 JAN, 2045",
            author: "ADMIN",
        },
        {
            image: "/assets/img/service-2.jpg",
            icon: "/assets/img/icon-6.png",
            title: "We have 25 years of experience in architecture industry",
            date: "01 JAN, 2045",
            author: "ADMIN",
        },
        {
            image: "/assets/img/service-3.jpg",
            icon: "/assets/img/icon-7.png",
            title: "We have 25 years of experience in architecture industry",
            date: "01 JAN, 2045",
            author: "ADMIN",
        },

    ]
    return (
        <>
            <div className="container py-5 mx-auto">
                <div className="container px-8">
                    <ScrollAnimation>

                        <div className="text-center mx-auto mb-5 " style={{maxWidth: '600px'}}>
                            <h4 className="text-sky-500 font-bold text-xl mb-3">LATEST BLOG</h4>
                            <h1 className="font-extrabold text-5xl mb-5">Latest Architecture Articles From Our Blog
                                Post</h1>
                        </div>
                    </ScrollAnimation>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {data.map((item, index) => (
                            <ScrollAnimation key={`Services-${item.title}-${index}`} order={index+1}>
                                <div  className="{`animate-fade-up ${
                                    index === 0 ? 'animate-delay-0' : index === 1 ? 'animate-delay-100' : 'animate-delay-200'
                                } mx-3 relative lg:col-4 md:col-6 bg-gray-50 fadeInUp mt-5 group`}">
                                    <div className="flex flex-col  group">
                                        <div className="h-56 w-full relative">
                                            <Image className="group-hover:blur-0 relative duration-500 blur-sm"
                                                   src={item.image} alt='' fill objectFit='cover'
                                                   objectPosition='center center'/>
                                            <div
                                                className="opacity-30 absolute z-10 inset-0 bg-black transition-opacity duration-500"></div>
                                        </div>
                                        <div className="p-5 z-20 ">
                                            <p className="mb-3  text-warm-gray">
                                                <span>{item.date}</span>
                                                <span>{" "}/{" "}</span>
                                                <span>{item.author}</span>
                                            </p>
                                            <h3 className="my-5 text-2xl font-bold line-clamp-2">{item.title}</h3>
                                            <Link className="inline-flex h-8 text-sky-500 hover:bg-sky-500 hover:text-white
                                         transition-all duration-300  items-center bg-transparent py-1 px-4 border-2"
                                                  href="#">
                                                Read More
                                            </Link>
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

export default Blogs;