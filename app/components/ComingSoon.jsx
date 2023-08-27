import Image from "next/image";
import {useEffect, useMemo, useState} from "react";

const ComingSoon = () => {

    const targetDate = useMemo(() => new Date('2023-12-31T23:59:59'), []);
    const getRemainingTime = (targetDate) => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return {
            total: timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };
    const [remainingTime, setRemainingTime] = useState(getRemainingTime(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const timeLeft = getRemainingTime(targetDate);
            setRemainingTime(timeLeft);

            if (timeLeft.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);



    const {days, hours, minutes, seconds}=remainingTime
        return (
        <>
            <div className="flex flex-col justify-center items-center font-extrabold text-6xl container mx-auto min-w-screen lg:items-start  lg:w-1/2 lg:ms-0 text-white">
                <h1 className='mb-12 mx-auto'>Coming Soon</h1>
                <div className="time w-full grid grid-cols-2 text-center md:grid-cols-4 text-4xl">
                    <div className="days mb-12">
                        <h1>{days}</h1>
                        <p>Days</p>
                    </div>
                    <div className="hours">
                        <h1>{hours}</h1>
                        <p>Hour</p>
                    </div>
                    <div className="mins">
                        <h1>{minutes}</h1>
                        <p>MINS</p>
                    </div>
                    <div className="secs">
                        <h1>{seconds}</h1>
                        <p>SECS</p>
                    </div>
                </div>
            </div>
            <Image src='/assets/img/slide-1.jpg' alt=''  fill className="object-cover -z-10"/>
        </>
    );
}

export default ComingSoon