import Image from "next/image";
import ScrollAnimation from "@/app/components/ScrollAnimation";

const Feature = () => {
    const data = [
        {
            image: "/assets/img/icon-2.png",
            title: "Design Approach",
            content: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        },
        {
            image: "/assets/img/icon-3.png",
            title: "Innovative Solutions",
            content: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        },
        {
            image: "/assets/img/icon-4.png",
            title: "Project Management",
            content: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
        },

    ]
    return (
        <>
            <ScrollAnimation>
                <div className="container grid grid-cols-1 lg:grid-cols-2  mx-auto pb-16  px-8 animate-fade-up mt-10">
                    <div className="h-full flex flex-col justify-between my-10 lg:my-0 lg:ms-10 lg:pe-5">
                        <h4 className="text-sky-500 font-bold text-xl mb-3 text-center">Why Choose Us!</h4>
                        <h1 className="font-extrabold text-5xl mb-5 text-center">Why You Should Trust Us? Learn More About Us!</h1>
                        <div>
                            <p className="mb-4 text-warm-gray">Choosing a partner for your project involves a leap of
                                faith, and at <strong>Syntho Mind</strong>, we&apos;ve made that decision easier with
                                our <strong>risk-free approach</strong>.</p>

                            <p className="mb-4 text-warm-gray">
                                We understand that trust is earned, and that&apos;s why we invite you to explore our
                                capabilities without any upfront commitments. Our track record of successful projects
                                speaks for itself, and we want you to experience our expertise firsthand.
                            </p>

                            <p className="mb-4 text-warm-gray">
                                With a commitment to transparency, quality, and your vision, we&apos;ve built a
                                reputation that you can rely on. Our risk-free approach allows you to get to know us,
                                gauge our proficiency, and make an informed decision with confidence.
                            </p>
D

                            <p className="mb-4 text-warm-gray">
                                At <strong>Syntho Mind</strong>, we believe in proving our worth before asking for your
                                trust. Explore more about us and find out why businesses trust us as their reliable
                                partner in achieving digital success.
                            </p>
                        </div>

                    </div>

                    <div className="relative h-full px-8 outline-sky-500 outline-dashed outline-4 mt-10"
                         style={{outlineOffset: '-50px', minHeight: '464px'}}>
                        <div className="absolute w-3/4 h-3/4 left-0 top-0 ">
                            <Image className="" src="/assets/img/mobile2.jpg" alt="" fill sizes={'25vw'}/>
                        </div>
                        <div className="absolute w-3/4 h-3/4 right-0 bottom-0 ">
                            <Image className="" src="/assets/img/mobile2.jpg" alt="" fill sizes={'25vw'}/>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

        </>
    );
}

export default Feature;