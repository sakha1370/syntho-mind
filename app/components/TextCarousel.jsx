import Link from "next/link";

const TextCarousel = ({n}) => {
    const titles = [
        'Elevating Digital Experiences: From Web to Mobile',
        'Empowering Your Brand\'s Online Journey',
        'Building Seamless Web and Mobile Solutions'
    ]
    return (
        <>
            <div className="absolute-center text-white h-auto pr-16 min-w-[90%] xl:min-w-[70%]">
                <h1 style={{fontSize:'calc(1.625rem + 4.5vw)'}} className="text-3xl leading-tight animate-slideInDown animate-once font-sans font-extrabold">{titles[n]}</h1>
                {/*<p className=" font-normal text-white">Vero rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>*/}
                <div className="flex items-center pt-4 animate-fade-right">
                    <Link href="" className="sm:py-3 px-3 sm:px-5 me-5 bg-sky-500  rounded hover:ring-4 transition-all duration-300 hidden">Read More</Link>
                </div>
            </div>
        </>
    );
}

export default TextCarousel;