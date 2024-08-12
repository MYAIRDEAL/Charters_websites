import React from 'react';
import { FaSignature } from 'react-icons/fa';
import fram from '../assets/HeroBg.png';
import piolet from '../assets/F-1-1.jpg';

function AboutFlight() {
    return (
        <div id="navHerSection" className="relative md:mt-[0rem] w-[98.8vw] bg-fixed bg-cover bg-center h-[100vh] bg-black" style={{ backgroundImage: `url(${fram})` }}>
            <div className="375:relative z-10 overflow-auto h-full md:flex  md:items-center md:justify-center ">
                <div className="flex flex-col md:flex-row  items-center justify-center md:justify-around p-4 md:p-8 relative z-10">
                    {/* Info section */}


                    <div className="bg-hoverColor rounded-md w-full md:w-[25rem] h-auto md:h-[30rem] font-semibold p-4 flex flex-col items-center justify-around mb-4 md:mb-0 md:absolute md:left-[-9rem] md:top-32  ">


                        <div className="flex mb-4">
                            <FaSignature className="w-[2rem] h-[2rem]" />
                            <div className="mt-2">
                                <h1 className="text-[1.5rem]">Luxury Flight</h1>
                                <p>
                                    Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex  mb-4">
                            <FaSignature className="w-[2rem] h-[2rem]" />
                            <div className="mt-2">
                                <h1 className="text-[1.5rem]">Luxury Flight</h1>
                                <p>
                                    Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <FaSignature className="w-[2rem] h-[2rem]" />
                            <div className="mt-2">
                                <h1 className="text-[1.5rem]">Luxury Flight</h1>
                                <p>
                                    Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image and text section */}
                    <div className="flex flex-col md:flex-row w-full md:w-[80%] items-center md:ml-[8rem]">
                        <div className="mb-4 md:mb-0">
                            <img src={piolet} alt="" className="w-full md:w-[458px] h-auto md:h-[610px] rounded-md" />
                        </div>
                        <div className="flex flex-col md:w-[26rem] text-white p-3">
                            <div className="m-3 text-center md:text-left">
                                <h1 className="text-hoverColor font-semibold tracking-[2px] text-[1.5rem] md:text-[2rem]">
                                    ABOUT FLIGHTS
                                </h1>
                                <h1 className="text-[1.5rem] md:text-[3vw]">
                                    Luxury Private Jet Travel, Tailored To You.
                                </h1>
                            </div>
                            <div className="m-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi quos minus soluta quasi deleniti iure explicabo nihil recusandae sapiente voluptatibus earum expedita minima accusantium incidunt temporibus libero esse velit aliquid dolorum, perferendis iste!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ducimus!
                                </p>
                            </div>
                            <div className="m-3">
                                <button className="w-full md:w-[10rem] border hover:scale-105 rounded-lg transition-all duration-300 hover:bg-hoverColor hover:text-white text-hoverColor border-hoverColor h-[3em]">
                                    VIEW ABOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFlight;
