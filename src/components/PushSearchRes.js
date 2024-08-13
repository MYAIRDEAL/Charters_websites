import React from 'react';

import FightCard from './FightCard';
import { Link } from 'react-router-dom';

function PushSearchRes() {

    let tempFlightData = {
        from: 'Munich',
        to: 'Jersey',
        date: 'August 7, 2024',
        timeam: '10 : 45 AM',
        timepm: '12 : 15 PM',
        price: '$ 12, 020',
        discount: '-79%',
        bookfor: '2,490'
    }

    return (
        <div className='bg-white mt-[10rem] 1024:mt-0 1024:h-auto  w-full p-[2rem]'>
            <div className=' flex flex-col items-center justify-center '>
                <h1 className='text-xl text-hoverColor mb-4'>
                    OUR LUXURY CHARTER
                </h1>
                <h2 className='text-[3rem] text-black mb-6'>
                    We Provide Luxury Deals for You
                </h2>
                <div className='p-4 rounded-lg max-w-4xl mx-auto'>
                    <p className='text-center text-gray-300 text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloribus porro vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit vel tempore quas.
                    </p>
                </div>
            </div>


            <div className=' flex flex-wrap w-full p-[2rem] bg-white justify-center items-center md:justify-start 1024:gap-5 gap-7 768:gap-0'>
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
            </div>

            <div className='md:mt-5 flex md:justify-end justify-center w-[94%]'>
                <button className='w-[12rem] h-[3rem] text-[1.1rem] tracking-[0.3rem] bg-hoverColor text-white rounded-lg transition-all hover:scale-110 duration-700'>
                    <Link to={'/allavailablecharters'} >View More</Link>
                </button>
            </div>


        </div>
    );
}

export default PushSearchRes;


// import React from 'react';
// import FightCard from './FightCard';

// function PushSearchRes() {
//     let tempFlightData = {
//         from: 'Munich',
//         to: 'Jersey',
//         date: 'August 7, 2024',
//         timeam: '10:45 AM',
//         timepm: '12:15 PM',
//         price: '$12,020',
//         discount: '-79%',
//         bookfor: '2,490'
//     };

//     return (
//         <div className='bg-white min-h-screen w-full p-[2rem]'>
//             <FightCard props={tempFlightData} />
//         </div>
//     );
// }

// export default PushSearchRes;
