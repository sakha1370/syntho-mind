import Image from "next/image";
import ScrollAnimation from "@/app/components/ScrollAnimation";

const Facts = () => {
    const data = [
        {
            imageSrc: "/assets/img/design.svg",
            title: "Comprehensive Web and Mobile Solutions",
            content: "We offer end-to-end development for both web and mobile platforms. From responsive websites to feature-rich mobile apps, we bring your digital vision to life with a cohesive user experience."
        },
        {
            imageSrc: "/assets/img/Innovation.svg",
            title: "Agile Development Process",
            content: "Our agile approach ensures that your projects are executed with flexibility and efficiency. We adapt to changing requirements, iterate quickly, and deliver results on time, allowing you to stay ahead in a dynamic digital landscape."
        },
        {
            imageSrc: "/assets/img/Gantt.svg",
            title: "Design with User-Centric Focus",
            content: "Every interface we create is designed with the user in mind. Our user-centric design philosophy ensures intuitive navigation, engaging interactions, and visually appealing layouts that resonate with your target audience."
        },

    ]

    return (
        <>


            <div className=" py-5 ">
                <div className=" pt-20">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6
                    ">
                        {data.map((item, index) => (
                            <ScrollAnimation key={index} order={index}>
                                <div
                                    className={`animate-slideInUp ${
                                        index === 0 ? 'animate-delay-0' : index === 1 ? 'animate-delay-100' : 'animate-delay-200'
                                    } mx-3 relative lg:col-4 md:col-6 bg-gray-50 slideInDown mt-5 group h-full `}

                                >
                                    <div className="-mt-1.5 absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 fact-icon w-32 h-32 flex justify-center items-center rounded-full
                                 bg-white group-hover:bg-black transition-all duration-300">
                                        <Image className="" src={item.imageSrc} alt="Icon" width={64} height={64} />
                                    </div>
                                    <div className="fact-item flex-col justify-center items-center text-center bg-light h-100 px-5 pt-16 pb-10  h-full">
                                        <h3 className="mb-3 text-2xl font-bold font-teko">{item.title}</h3>
                                        <p className="mb-0  text-warm-gray">{item.content}</p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facts;