import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";

function FightCard({ props }) {
    const { from, to, date, timeam, timepm, price, discount, bookfor } = props;

    return (
        <div className='flex flex-col items-center justify-center h-[15rem] rounded-lg shadow-xl cursor-pointer transition-all duration-700'>
            <div className='flex items-center text-[1.5rem] justify-around w-[20rem]'>
                <h1>{from}</h1>
                <MdOutlineArrowRightAlt />
                <h1>{to}</h1>
            </div>

            <p>{date}</p>
            <div className='flex justify-around w-[15rem] items-center'>
                <p>{timeam}</p>
                <MdOutlineArrowRightAlt className='mb-2' />
                <p>{timepm}</p>
            </div>
            <p>
                <span className='line-through'>{price}</span>
                ({discount})
            </p>

            <button className='bg-hoverColor w-[9rem] h-[2.5rem] text-white rounded-lg transition-all hover:scale-110 duration-700'>
                Book for ${bookfor}
            </button>
        </div>
    );
}

export default FightCard;
