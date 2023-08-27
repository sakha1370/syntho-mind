import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <div className="container mx-auto">
                <div className="relative mx-auto">
                    <Image className='mx-auto' src='/assets/img/404.gif' alt='' width={760} height={570}/>
                    <div className="absolute top-16 left-0 right-0 mx-auto">
                        <div className="flex flex-col items-center">
                            <h1 className="text-center font-extrabold text-6xl ">404</h1>
                        </div>
                        <div className="font-extrabold text-xl flex flex-col items-center mt-80">
                            <h3 className="h2">
                                You seem lost
                            </h3>

                            <p>The page you are looking for is not available!</p>

                            <Link href="/" className="px-6 py-2 mt-6 bg-sky-500 text-white block w-fit">Return Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}