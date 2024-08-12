import React from 'react'

import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaTruckDroplet } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


import imag from '../assets/F-2.jpg'
function OurServices() {
    return (

        <div className='md:h-[150vh] 500:h-[158vh] flex items-center  bg-white justify-around flex-wrap '>
            <div className=' w-[24rem] md:h-[35rem] h-[28rem]  flex flex-col justify-center'>
                <div>
                    <h1 className='text-hoverColor m-3'>
                        OUR SERVICES
                    </h1>
                </div>
                <div>
                    <h1 className='text-[3vw] m-3'>
                        We Have Best Luxury Services For You
                    </h1>
                </div>
                <div className='m-3'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quo ab modi necessitatibus ipsam fugiat quis? Ipsam, dolorem sunt repudiandae, culpa ea, esse quibusdam reiciendis consequuntur reprehenderit quis aliquam aperiam! Nostrum laborum laboriosam alias.
                    </p>
                </div>

                <button className='border transition-all hover:scale-105 duration-500 m-3 text-white outline-none border-none rounded-md bg-hoverColor w-[10rem] h-[3rem]'>VIEW SERVICES</button>

            </div>

            <div className='bg-gray-100 md:w-[55%] md:h-[89vh] 375:w-full flex flex-wrap items-center bg-cover rounded-md  justify-around' style={{
                backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),  url(${imag})`
            }}>

                <div className=' hover:bg-hoverColor text-white  cursor-pointer transition-all duration-500 h-[16rem] md:w-[23rem] m-3 rounded-md'>

                    <div>
                        <FaPaperPlane className=' w-[3rem] h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='text-xl m-6'>Private Jet Charter</h1>
                        <p className='text-lg m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>


                <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500  h-[20rem] md:w-[23rem] m-3 rounded-md'>
                    <div>
                        <MdOutlineSettingsSuggest className=' w-[3rem] h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='text-xl m-6'>Private Jet Charter</h1>
                        <p className='text-lg m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>


                <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500  h-[16rem] md:w-[23rem] m-3 rounded-md'>
                    <div>
                        <FaTruckDroplet className=' w-[3rem] h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='text-xl m-6'>Private Helicopter</h1>
                        <p className='text-lg m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>


                <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500 h-[16rem] md:w-[23rem] m-3  rounded-md'>
                    <div>
                        <CgProfile className='w-[3rem] h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='text-xl m-6'>Private Ambulance</h1>
                        <p className='text-lg m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>



            </div>

        </div>

    )
}

export default OurServices