import Link from "next/link";

const TextCarousel = ({n}) => {
    const titles = [
        'Elevating Digital Experiences: From Web to Mobile',
        'Empowering Your Brand\'s Online Journey',
        'Code-driven Transformations: Your Catalyst for Online Triumph'
    ]
    return (
        <>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white h-full w-full lg:w-1/2 bg-black bg-opacity-70 p-10 ">
                <div className="flex flex-col h-full justify-center items-center">

                    <h1 style={{ fontSize: 'calc(0.625rem + 4.5vw)' }} className="pe-16 text-xl leading-tight animate-slideInDown animate-once font-sans font-extrabold my-auto">
                        {titles[n]}
                    </h1>
                    {/*<p className="font-normal text-white">Vero rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>*/}
                    <div className="items-center pt-4 animate-fade-right hidden">
                        <Link href="" className="sm:py-3 px-3 sm:px-5 me-5 bg-sky-500 rounded hover:ring-4 transition-all duration-300 ">Read More</Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TextCarousel;