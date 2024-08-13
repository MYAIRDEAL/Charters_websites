import React, { useState } from 'react';
import airbus from '../assets/F-6.jpg';
import bosing from '../assets/F-9.jpg';
import poilet from '../assets/F-8.jpg';
import { Link } from 'react-router-dom';

function LuxuryCharter() {
    const [selectOurFleet, setSelectOurFleet] = useState('');

    const handleClick = (fleetName) => {
        setSelectOurFleet(fleetName);
    };

    return (
        <div className='flex flex-col justify-around md:mb-[5rem]  1024:h-[20rem] 700:h-[30rem] w-full p-[2rem]'>
            <div className='flex flex-col items-center justify-center '>
                <h2 className='md:text-[3rem] text-hoverColor mb-6'>
                    OUR LUXURY FLEETS
                </h2>
            </div>

            <div className='flex justify-around py-10 flex-wrap gap-6 '>
                <Link to={`/ourfleets/very Lingh Jet`}>

                    <div
                        className='cursor-pointer rounded-xl font-semibold p-6 shadow-2xl max-w-md flex flex-col justify-center items-center bg-cover bg-center mb-4 md:mb-0 md:h-[6rem] h-[5rem] w-[20rem]'
                        style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${airbus})` }}
                        onClick={() => handleClick('Very Light Jets')}
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Very Light Jets</h1>
                    </div>

                </Link>

                <Link to={`/ourfleets/Lingh Jet`}>
                    <div
                        className='cursor-pointer rounded-xl font-semibold p-6 shadow-2xl max-w-md flex flex-col justify-center items-center bg-cover bg-center mb-4 md:mb-0 md:h-[6rem] h-[5rem] w-[20rem]'
                        style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${bosing})` }}
                        onClick={() => handleClick('Light Jet')}
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Light Jet</h1>
                    </div></Link>

                <Link to={`/ourfleets/Super Lingh Jet`}>

                    <div
                        className='cursor-pointer rounded-xl font-semibold p-6 shadow-2xl max-w-md flex flex-col justify-center items-center bg-cover bg-center mb-4 md:mb-0 md:h-[6rem] h-[5rem] w-[20rem]'
                        style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${poilet})` }}
                        onClick={() => handleClick('Super Light Jet')}
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Super Light Jet</h1>
                    </div>
                </Link>

                <Link to={`/ourfleets/Turbo prop Aircraft`}>
                    <div
                        className='cursor-pointer rounded-xl font-semibold p-6 shadow-2xl max-w-md flex flex-col justify-center items-center bg-cover bg-center mb-4 md:mb-0 md:h-[6rem] h-[5rem] w-[20rem]'
                        style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${poilet})` }}
                        onClick={() => handleClick('Turbo prop Aircraft')}
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Turbo prop Aircraft</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default LuxuryCharter;
