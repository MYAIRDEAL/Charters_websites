import React from 'react'


import { RiArmchairLine } from "react-icons/ri";
import { FaHelmetSafety } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

import fleetsimg from '../assets/VT.png'
import PageBanner from './PageBanner';


function OurFleetsDetails() {
    return (
        <div>


            <PageBanner data={'Premium High Class Fleet'} />
            <div className='1024:h-[70vh] bg-white flex items-center justify-around'>


                <div className='md:h-[70vh]  gap-1 items-center justify-around flex p-4 pb-10 700:w-[50rem] 1024:w-[100rem]   flex-wrap '>


                    <div>
                        <img src={fleetsimg} alt="" className='w-[35rem] rounded-lg ' />
                    </div>

                    <div className=' flex flex-col justify-around md:h-[30rem] md:w-[54rem] md:p-[3rem]'>
                        <div >
                            <div>
                                <h1>
                                    Legacy 600
                                </h1>
                                <h4>
                                    Midsize Jet
                                </h4>
                            </div>

                            <div>
                                <p>
                                    The Legacy 600 (market destination adapted after 2005) is based on ERJ-135 model. It was launched in 2000 at the Farnborough Airshow as the "Legacy 2000". The legacy carries 13 passenger in three partitioned sections for 3050 (5650 Km) nautical miles or 8 passenger for 3450 nautical miles(6390 Km)
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 flex-wrap'>


                            <div className='flex gap-2 w-[13rem]'>

                                <RiArmchairLine className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Seats :
                                </h5>

                                <h4>
                                    13
                                </h4>

                            </div>


                            <div className='flex gap-2  w-[13rem]'>
                                <FaHelmetSafety className='w-[1.5rem] h-[1.5rem]' />

                                <h5>
                                    YOM :
                                </h5>

                                <h4>
                                    2008
                                </h4>

                            </div>

                            <div className='flex gap-2  w-[13rem]'>
                                <CiLocationOn className='w-[1.5rem] h-[1.5rem]' />

                                <h5>
                                    Base :
                                </h5>

                                <h4>
                                    Bagumpet
                                </h4>

                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                <TbBrandGithubCopilot className='w-[1.5rem] h-[1.5rem]' />

                                <h5>
                                    Crew :
                                </h5>

                                <h4>
                                    1
                                </h4>

                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                <FaBagShopping className='w-[1.5rem] h-[1.5rem]' />

                                <h5>
                                    Baggage :
                                </h5>

                                <h4>
                                    8100 kg.
                                </h4>

                            </div>

                            <div className='flex gap-2  w-[13rem]'>

                                <IoIosSpeedometer className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Speed :
                                </h5>

                                <h4>
                                    460 nmph
                                </h4>

                            </div>

                            <div className='flex gap-2 w-[13rem]'>

                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Flight Attendent :
                                </h5>

                                <h4>
                                    Yes
                                </h4>

                            </div>



                        </div>

                    </div>


                </div>
            </div>

            <div className='md:h-[80vh] bg-white flex flex-col shadow-xl items-center justify-center'>


                <div className=' w-[100%] md:w-[50rem] p-4'>

                    <h1 className='text-[1.5rem]'>Specifications</h1>


                    <div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Aorcraft Type</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>Midsize Jet</h1>
                        </div>


                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Baggage Capacity</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>8100 Kg</h1>
                        </div>


                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cruise Speed</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>460 nmph</h1>
                        </div>


                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Passenger</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>13</h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Year of Mannufacture</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>2008</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Home Base</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>Begumpet</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Pilots</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>1</h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Crew</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>1</h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Flying Range</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>3400 nm</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Height</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>6.1 ft</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Width</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>6.11 ft</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Length</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>49.1 ft</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Lavatory</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>1</h1>
                        </div>

                        <div className='bg-hoverColor hover:scale-105 transition-all duration-500 rounded-lg cursor-pointer text-graybg-gray-200 w-[100%] flex items-center justify-center h-[3rem] m-[0.1rem]'>
                            <button className='font-semibold text-[1.5rem]'>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>



            </div>



        </div >
    )
}

export default OurFleetsDetails