import React from "react";

import { LiaCcAmex } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


import logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <footer className="relative md:h-[100vh] md:flex md:items-center py-10 text-white bg-selectType">
            <div className="container flex flex-wrap justify-around mx-auto ">
                <div className="w-full px-4 mb-6 md:w-1/4">
                    <h1 className="text-2xl font-bold text-hoverColor">
                        Quick Links
                    </h1>
                    <div>
                        <ul>
                            <li className="mb-2">Europe's latest aviation disruptions</li>
                            <li className="mb-2">Legal notices</li>
                            <li className="mb-2">Baggage restrictions</li>
                            <li className="mb-2">Montreal convention</li>
                            <li className="mb-2">Privacy Policy </li>
                            <li className="mb-2">GlobeAir CSER roadmap</li>
                            <li className="mb-2">#WeArePlanetA</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full px-4 mb-6 md:w-1/4">


                    <h1 className="text-2xl font-bold text-hoverColor">
                        Serices
                    </h1>

                    <div>
                        <ul>
                            <li className="mb-2">Catering</li>
                            <li className="mb-2">Private Jet Card</li>
                            <li className="mb-2">Helicopter Charter</li>
                            <li className="mb-2">Air Cargo by GlobeAir</li>
                            <li className="mb-2">Maintenance at GlobeAir</li>
                            <li className="mb-2">Cessna Citation Mustang C510 Base</li>
                            <li className="mb-2">Training</li>
                        </ul>
                    </div>


                </div>


                <div className="w-full px-4 mb-6 md:w-1/4">
                    <h1 className="text-2xl font-bold text-hoverColor">About</h1>
                    <ul>
                        <li className="mb-2">Partners</li>
                        <li className="mb-2">Team</li>
                        <li className="mb-2">News & Press</li>
                        <li className="mb-2">Blog</li>
                        <li className="mb-2">Glossary</li>
                        <li className="mb-2">Our fleet</li>
                        <li className="mb-2">Private Jet Frequently Asked Questions</li>
                    </ul>
                </div>



                <div className="w-full px-4 mb-6 md:w-1/4 ">
                    <h1 className="text-2xl font-bold text-hoverColor">Latest news</h1>
                    <ul className="mt-3">
                        <li className="mb-2">GlobeAir Expands Operating Hours To Bolzano</li>
                        <li className="mb-2">GlobeAir & VOO Transform Private Jet Bookings</li>
                        <li className="mb-2">GlobeAir begins construction on new hangar at Linz Airport</li>
                        <li className="mb-2">Celebrating 15 Years of Innovation and Excellence</li>
                    </ul>
                </div>


                <div className="container flex flex-wrap  justify-between  p-4 mx-auto border-b-[2px] border-b-hoverColor">


                    <div className="flex md:w-[38%] gap-3 md:gap-0 justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-hoverColor">Legal</h1>
                            <div>
                                <ul>
                                    <li className="mb-2">GlobeAir AG</li>
                                    <li className="mb-2">Polytec Strasse 1</li>
                                    <li className="mb-2">A-4063 Horsching</li>
                                    <li className="mb-2">Austria</li>
                                    <li className="mb-2">Impressum</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-hoverColor">Questions ?</h1>
                            <div>
                                <ul>
                                    <li className="mb-2">Call : +91 8767854532</li>
                                    <li className="mb-2">WhatsApp : +91 9876346781</li>
                                    <li className="mb-2">Email : abc@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[49%] flex flex-col " >
                        <div>
                            <h1 className="text-2xl font-bold text-hoverColor">Payment secured by</h1>
                            <div className="flex h-[3rem] justify-around w-[13rem] items-center">
                                <LiaCcAmex className="w-[2rem] h-[2rem]" />
                                <FaCcVisa className="w-[2rem] h-[2rem]" />
                                <FaCcMastercard className="w-[2rem] h-[2rem]" />
                            </div>
                        </div>
                    </div>


                </div>


                <div className="flex md:w-[100%] justify-between items-center p-5">
                    <div >
                        <img src={logo} alt="" className="w-[8rem] h-[3rem]" />
                        <p className="flex gap-2 mt-3">
                            <FaRegCopyright />
                            Copyright 2008 - 2024 ClobeAir AG - All rights reserved.
                        </p>
                    </div>

                    <div>
                        <div className='md:flex  flex items-center md:items-start md:justify-center mb-4 md:mb-0'>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaFacebook />}</div>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaInstagram />}</div>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaTwitter />}</div>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaYoutube />}</div>
                        </div>
                    </div>

                </div>


            </div>





        </footer>
    );
};

export default Footer;