import React from 'react'
import FightCard from './FightCard'

function AllAvailableCharters() {

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
        <div className='bg-white min-h-screen  w-full p-[2rem]'>

            <h1 className=' text-[2rem] text-hoverColor text-center'>All Available Charters</h1>

            <div className=' flex flex-wrap w-full p-[2rem] bg-white justify-center items-center md:justify-start md:gap-5 gap-7'>
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
                <FightCard props={tempFlightData} />
            </div>

        </div>



    )
}

export default AllAvailableCharters