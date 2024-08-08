import React, { useEffect, useState } from 'react';
// ### Images from assets
import fram from '../assets/fram.png';
import frameplane from '../assets/Png-2.png';
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

// ### Icons from react Icons
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// ### Import this comp Css
import '../componentCss/HeroSectioncss.css'

// -----------------------------------------------------------------------------------------------------

// import { RiDoubleQuotesR } from 'react-icons/ri';
// import { FcIcons8Cup } from 'react-icons/fc';
// import { message } from 'antd';
// import axios from 'axios';


function HeroSection() {

    const [customerExperience, setCustomerExperience] = useState([
        { name: 'Charter', img: frameplane },
        { name: 'Helicopter', img: img2 },
        { name: 'Air Ambulance', img: img3 },

    ]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const fetchExperience = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8000/api/admin/getallfeedback');
    //             console.log(response.data)
    //             setCustomerExperience(response.data.feedback);
    //         } catch (error) {
    //             message.error('Server is Busy!!!');
    //         }
    //     };

    //     fetchExperience();
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % customerExperience.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [customerExperience.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % customerExperience.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + customerExperience.length) % customerExperience.length);
    };

    return (
        <>



            <div>
                <div className="relative w-full md:h-[90vh] h-[50vh]  overflow-hidden rounded-lg">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {customerExperience.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}

                            >



                                <div className='text-white md:h-[89.6vh] flex flex-col md:flex-row md:justify-around'>
                                    {/* Social Media Icons */}
                                    <div className='md:flex hidden flex-col items-center md:items-start md:justify-center mb-4 md:mb-0'>
                                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaFacebook />}</div>
                                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaInstagram />}</div>
                                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaTwitter />}</div>
                                        <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaYoutube />}</div>
                                    </div>

                                    {/* Image Section */}
                                    <div className='relative w-full max-w-[40rem] md:flex hidden mb-4 md:mb-0 animationContainer'>
                                        <img src={fram} alt="Frame" className='absolute inset-0  m-auto customAnimation' />
                                        <img src={slide.img} alt="Frameplane" className='absolute inset-0 m-auto customAnimation' />
                                    </div>

                                    {/* Text Content */}
                                    <div className='flex flex-col w-full max-w-[100%] md:max-w-[35%] items-start md:items-start justify-center text-center md:text-left'>
                                        <div className='m-4'>
                                            <span className='text-hoverColor text-xl block md:inline'>Welcome </span>
                                            to Flights
                                        </div>
                                        <div className='text-[5vw] m-4'>
                                            <h1 className='leading-none transition-all duration-700'>
                                                Private <span className='text-hoverColor transition-all duration-700 ease-in-out'> {slide.name} </span> with Global Coverage
                                            </h1>
                                        </div>
                                        <div className='m-4'>
                                            <p className='text-sm  md:text-base'>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam laborum ipsum aspernatur ducimus, deserunt, mollitia natus similique minima ab quas expedita in quo vitae ipsa maiores recusandae accusamus doloremque corporis molestias eos unde!
                                            </p>
                                        </div>
                                        <div className='m-4'>
                                            <button className='border border-hoverColor text-hoverColor p-3 w-[7rem] tracking-widest text-sm md:text-base'>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        ))}
                    </div>


                    {/* <button
                        type="button"
                        className="absolute top-1/2 left-0 transform md:block hidden -translate-y-1/2 z-30 p-2 cursor-pointer"
                        onClick={prevSlide}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
                            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-1/2 md:block hidden right-0 transform -translate-y-1/2 z-30 p-2 cursor-pointer"
                        onClick={nextSlide}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
                            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span> 
                    </button>*/}
                </div>
            </div>




            {/* ----------------------------------------------------------------------------------------- */}





        </>
    );
}

export default HeroSection;
