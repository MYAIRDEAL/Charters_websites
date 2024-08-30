import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

function FightCard({ props }) {
    return (
        <div className='flex flex-col m-1 items-center justify-center h-[15rem] rounded-lg shadow-xl cursor-pointer transition-all duration-700'>
            <div className='flex items-center text-[1.1rem] justify-around  375:w-[17rem] 400:w-[18rem]  md:w-[25rem] '>
                <h1 className='overflow-hidden'>{props?.departure}</h1> 
                <MdOutlineArrowRightAlt />
                <h1 className='overflow-hidden'>{props?.arrival}</h1>
            </div>

            <p>{props?.date}</p>
            <div className='flex justify-around w-[15rem] items-center'>
                <p>{props?.fromtime}</p>
                <MdOutlineArrowRightAlt className='mb-2' />
                <p>{props?.endtime}</p>
            </div>
            <p className='text-green-500 font-semibold'>
                <span className='line-through text-red-400'>${props?.price} </span> 
                (-{props?.discount}%)
            </p>

            <Link to={`/contactus/${encodeURIComponent(JSON.stringify(props))}`} >

                <button className='bg-hoverColor w-[9rem] h-[2.5rem] text-white rounded-lg transition-all hover:scale-110 duration-700'>
                    Book for ${props?.discountprice}
                </button>

            </Link>
        </div>
    );
}

export default FightCard;
