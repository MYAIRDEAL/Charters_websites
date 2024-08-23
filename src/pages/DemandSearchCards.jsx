import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { Link } from 'react-router-dom';

import spicejet from '../assets/SG.png'

function DemandSearchCards({props}) {
    const {_id, chartertype,subCategoryName , pax, speed, price, description,  image, availability,bookingtype,departure,arrival, journeytype,  date , yom , seats , crew , airhosts, levatory, fromtime, endtime, flyingrange, cabinwidth, cabinheight, baggage } = props;

    return (
        <div className='flex 1024:flex-row flex-col justify-around items-center bg-white h-[25rem] rounded-lg shadow-xl cursor-pointer transition-all duration-700 md:w-[80%] 700:h-[28rem] 1024:h-[11rem]'>
            <div>

                <div className=' flex flex-col  items-center '>

                    <img src={image} alt="" className='rounded-full w-[6rem]' />
                    <h1 className='text-[1.5rem]'>{subCategoryName}</h1>
                </div>

            </div>

            <div className='flex flex-col items-center justify-around h-[10rem] md:h-[6rem] '>
                <div className='flex items-center text-[1.5rem] justify-around md:w-[30rem] w-[20rem] bg-white'>
                    <h1>{departure}</h1>
                    <div className='flex gap-3 items-center'>
                        <div className='border-dashed w-6 h-0 text-black border-[2px] border-black'></div>
                        <MdOutlineFlightTakeoff />
                        <div className='border-dashed w-6 h-0 text-black border-[2px] border-black'></div>
                    </div>
                    <h1>{arrival}</h1>
                </div>
                <p>{date}</p>
                <div className='flex justify-around md:w-[30rem] w-[20rem] items-center'>
                    <p>{fromtime}</p>
                    <MdOutlineArrowRightAlt className='mb-2 w-[2rem] h-[2rem]' />
                    <p>{endtime}</p>
                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <Link to={`/ourfleetsdetails/${encodeURIComponent(JSON.stringify(props))}`}>

                    <button className='bg-hoverColor w-[11rem] h-[3rem] text-white rounded-lg transition-all hover:scale-110 duration-700'>
                        View More Details
                    </button>

                </Link>
            </div>

        </div>
    );
}

export default DemandSearchCards;
