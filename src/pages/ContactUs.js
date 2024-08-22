import React from 'react'

import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import flightfront from '../assets/F-12.jpg'
import ContactUsForm from './ContactUsForm';
import { useParams } from 'react-router-dom';

function ContactUs() {
    let decodedBookingData = null;
    let { detailsofbooking } = useParams()
    try {
        decodedBookingData = JSON.parse(decodeURIComponent(detailsofbooking))
    }
    catch (error) {
        console.log(error)
    }

    return (

        <div className='w-full 375:h-[240vh] 400:h-[190vh] 500:h-[210vh] 900:h-[150vh] 1024:h-[170vh] 1487:h-[150vh]  flex flex-col bg-white'>
            <div
                className=" h-[60vh]  bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${flightfront})`,
                }}
            >
                <div className="flex items-center justify-between p-[3rem] h-full text-white">
                    <div className='text-[5vw]'>
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                    <div className='md:flex hidden flex-col items-center md:items-start md:justify-center mb-4 md:mb-0'>
                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaFacebook />}</div>
                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaInstagram />}</div>
                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaTwitter />}</div>
                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaYoutube />}</div>
                    </div>
                </div>
            </div>

            <div className='flex md:mt-[5rem] flex-wrap  items-center justify-center'>
                <div className=' w-[45rem] flex flex-col items-center justify-center  px-10 '>
                    <div className='my-5'>
                        <h1 className='text-hoverColor text-[1.5rem]' >Phone Number</h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className='flex text-[1.5rem] items-center '>
                            <LuPhoneCall className='text-hoverColor mx-3' />
                            <h1 className='text-[1.1rem] md:text-[1.5rem] '>
                                123-234-11234
                            </h1>
                        </div>
                    </div>

                    <div className='my-5'>
                        <h1 className='text-hoverColor text-[1.5rem]' >Email Address</h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className='flex text-[1.5rem] items-center'>
                            <CgMail className='text-hoverColor mx-3' />
                            <h1 className='text-[1.1rem] md:text-[1.5rem] '>
                                hello@awesome.com
                            </h1>
                        </div>
                    </div>

                    <div className='my-5'>
                        <h1 className='text-hoverColor text-[1.5rem]' >Address</h1>
                        <p className='text-[1.1rem] text-gray-400 '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className='flex text-[1.5rem]  items-center'>
                            <FaLocationDot className='text-hoverColor mx-3' />
                            <h1 className='text-[1.1rem] md:text-[1.5rem] '>
                                99 Roving St., Big City, PKU 23456
                            </h1>
                        </div>
                    </div>


                </div>


                <ContactUsForm props={decodedBookingData} />

            </div>

        </div>

    )
}

export default ContactUs