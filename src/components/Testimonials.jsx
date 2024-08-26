import React from 'react';
import Attentent from '../assets/F-5.jpg';
import Carousal from '../subComponents/Testimonials/Carousal';
import CarousalDetails from '../subComponents/Testimonials/CarousalDetails';

const Testimonials = () => {

    return (
        <div
            className='relative  w-full  bg-cover bg-center bg-fixed  py-[11.5rem]  flex items-center justify-around flex-wrap'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Attentent})`
            }}
        >
            <Carousal />
            <CarousalDetails />
        </div>
    );
};

export default Testimonials;
