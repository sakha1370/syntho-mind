import Image from "next/image";
import ScrollAnimation from "@/app/components/ScrollAnimation";

const Feature = () => {
    return (
        <>
            <ScrollAnimation>
                <div className="container grid grid-cols-1 lg:grid-cols-2  mx-auto py-20  px-8 animate-fade-up mt-20">
                    <div className="h-full flex flex-col justify-between my-10 lg:my-0 lg:ms-10 lg:pe-5 ">
                        <h4 className="text-sky-500 font-bold text-xl mb-3 text-center lg:text-left">Why Choose Us!</h4>
                        <h1 className="font-extrabold text-5xl mb-5 text-center lg:text-left">Why You Should Trust Us?
                            Learn More About Us!</h1>
                        <div className='mb-10'>
                            <p className="mb-4 text-warm-gray text-justify">Choosing a partner for your project involves
                                a leap of
                                faith, and at <strong>Syntho Mind</strong>, we&apos;ve made that decision easier with
                                our <strong>risk-free approach</strong>.</p>

                            <p className="mb-4 text-warm-gray text-justify">
                                We understand that trust is earned, and that&apos;s why we invite you to explore our
                                capabilities without any upfront commitments. Our track record of successful projects
                                speaks for itself, and we want you to experience our expertise firsthand.
                            </p>

                            <p className="mb-4 text-warm-gray text-justify">
                                With a commitment to transparency, quality, and your vision, we&apos;ve built a
                                reputation that you can rely on. Our risk-free approach allows you to get to know us,
                                gauge our proficiency, and make an informed decision with confidence.
                            </p>

                            <p className="mb-4 text-warm-gray text-justify">
                                At <strong>Syntho Mind</strong>, we believe in proving our worth before asking for your
                                trust. Explore more about us and find out why businesses trust us as their reliable
                                partner in achieving digital success.
                            </p>
                        </div>

                    </div>

                    <div className="relative h-full px-8
                 outline-sky-500 outline-dashed outline-4 min-h-[400px] md:min-h-[460px] lg:min-h-[300px] "
                         style={{outlineOffset: '-50px',borderRadius: '60px'}}>
                        <div className="absolute w-3/4 left-0 top-0  ">
                            <Image className="object-contain rounded-xl " src="/assets/img/mockup-4.jpg" alt=""
                                   width={1000} height={300} sizes={'25vw'} priority placeholder='empty'/>
                        </div>
                        <div className="absolute w-3/4 right-0 bottom-0 ">
                            <Image className="object-contain rounded-xl" src="/assets/img/mockup-3.jpg" alt=""
                                   width={1000} height={300} sizes={'25vw'} priority placeholder='empty'/>
                        </div>

                    </div>
                </div>
            </ScrollAnimation>

        </>
    );
}

export default Feature;