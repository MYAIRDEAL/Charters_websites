import React from 'react'

import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import flightfront from '../assets/F-12.jpg'

function ContactUs() {
    return (

        <div className='w-full h-[200vh] flex flex-col bg-white'>



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

            <div className='flex md:mt-[5rem] flex-wrap'>


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

                <div className=' w-[46rem] h-[90vh] flex justify-center flex-col mb-[10rem] md:mb-0'>
                    <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>CONTACT US</h1>
                    <div>
                        <h1 className='md:text-[3vw] text-[2rem] m-3'>
                            Get In Touch.
                        </h1>

                        <form action="#" className='flex flex-wrap m-3'>

                            <input type="text" name='name' placeholder='Name' className='w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' />
                            <input type="email" name='email' placeholder='Email' className='w-[20.5rem] m-3 h-[3rem]  outline-none border-b-2 border-hoverColor' />
                            <input type="number" name='phone' placeholder='Phone' className='w-[20.5rem] m-3 h-[3rem]  outline-none border-b-2 border-hoverColor' />
                            <input type="Subject One" name='subject' placeholder='Subject One' className='w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' />
                            <textarea name="content" id="content" rows={10} cols={20} className='md:w-[42rem] w-[21rem] m-3 outline-none border-b-2 border-hoverColor'> Textarea </textarea>

                            <button className='w-[10rem] transition-all hover:scale-110 duration-500 h-[3rem] tracking-widest m-3 bg-hoverColor text-white rounded-lg'>SEND MESSAGE</button>

                        </form>

                    </div>


                </div>
            </div>






        </div>

    )
}

export default ContactUs