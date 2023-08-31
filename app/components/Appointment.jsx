import {BsFillEnvelopeOpenFill, BsFillTelephoneFill} from "react-icons/bs";
import React from "react";

const Appointment = () => {

    return (
        <>
            {/*<div className="container py-5 mx-auto">*/}
            <div className="">
                <input type="email" placeholder="Your Email"/>

                <div className="">
                    <h4 className="text-sky-500 font-bold text-xl mb-3">Appointment</h4>
                    <h1 className="font-extrabold text-5xl mb-5">Make An Appointment To Start Your Dream Project</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                        diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet</p>
                    <div className="">
                        <div className="">
                            <div className="flex">

                                <BsFillTelephoneFill
                                    className={' flex flex-shrink-0 items-center justify-center w-16 h-16 text-sky-500 mr-1'}/>
                                <div className="ms-4">
                                    <p className="mb-2">Call Us Now</p>
                                    <h3 className="mb-0"><a href="tel:+989138463446">+989138463446</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex">

                                <BsFillEnvelopeOpenFill
                                    className={' flex flex-shrink-0 items-center justify-center w-16 h-16 text-sky-500 mr-1'}/>
                                <div className="ms-4">
                                    <p className="mb-2">Mail Us Now</p>
                                    <h3 className="mb-0"><a
                                        href="mailto:BestSynthoMind@gmail.com">BestSynthoMind@gmail.com</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hs">
                <div className="">
                    <input type="text" className="form-control h-14" placeholder="Your Name"/>
                </div>
                <div className="hs4">
                <input type="email" className=" h-14" placeholder="Your Email"/>
                </div>
                <div className="">
                    <input type="text" className="form-control h-14" placeholder="Your Mobile"/>
                </div>
                <div className="">
                    <select className="form-select h-14">
                        <option selected>Choose Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                    </select>
                </div>
                <div className="">
                    <div className="date" id="date">
                        <input type="text"
                               className="form-control datetimepicker-input h-14"
                               placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker"/>
                    </div>
                </div>
                <div className="">
                    <div className="time" id="time" data-target-input="nearest">
                        <input type="text"
                               className="form-control datetimepicker-input h-14"
                               placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker"/>
                    </div>
                </div>
                <div className="">
                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                </div>
                <div className="">
                    <button className=" w-full py-3" type="submit">Book Appointment</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default Appointment;