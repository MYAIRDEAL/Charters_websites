import React, { useState, useEffect } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FcIcons8Cup } from 'react-icons/fc';
import { message } from 'antd';
import axios from 'axios';



function Carousal() {
  const [customerExperience, setCustomerExperience] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const fetchExperience = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/admin/getallfeedback');
  //       // console.log(response.data)
  //       setCustomerExperience(response.data.feedback);
  //     } catch (error) {
  //       message.error('Server is Busy!!!');
  //     }
  //   };

  //   fetchExperience();
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
    <div>
      <div className="relative w-[55vw] max-w-[1200px] h-[50vh] overflow-hidden rounded-lg">
        <div className="relative w-full h-full flex items-center justify-center">
          {customerExperience.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}

            >
              <div className="md:w-[45rem] h-[19rem] flex flex-col justify-between p-3">
                <p className="text-[1.3rem] leading-7 text-gray-400 overflow-hidden">
                  {slide.feedback}
                </p>
                <RiDoubleQuotesR className="absolute w-[5rem] h-[5rem] z-5 top-6 left-7 text-white hidden md:flex" />
                <div className="flex items-center justify-start md:mt-10">
                  <div className="bg-white rounded-full h-[4rem] w-[4rem] flex items-center justify-center">
                    <FcIcons8Cup className="w-[3rem] h-[3rem]" />
                  </div>
                  <div className="ml-5 text-white">
                    <h1>{slide.name}</h1>
                    <h1 className="text-hoverColor">{slide.service}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
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
        </button>
      </div>
    </div>
  );
}

export default Carousal;
