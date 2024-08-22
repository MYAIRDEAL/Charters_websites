import React, { useEffect, useState } from 'react'
import FightCard from '../components/FightCard'
import axios from 'axios'

function AllAvailableCharters() {


    const [pushRes, setPushRes] = useState([])

    useEffect(() => {

        let pushSearchResFunction = async () => {
            let pushResData = await axios.get('http://localhost:8000/api/admin/getallsubcategories')
            setPushRes(pushResData.data.data)

        }
        pushSearchResFunction()

    }, [])

    return (
        <div className='bg-white min-h-screen  w-full p-[2rem]'>

            <h1 className=' text-[2rem] text-hoverColor text-center'>All Available Charters</h1>

            <div className=' flex flex-wrap w-full p-[2rem] bg-white justify-center items-center md:justify-start md:gap-5 gap-7'>

                {
                    pushRes?.length > 0 && pushRes.map((element, index) => (
                        < FightCard key={index} props={element} />
                    ))
                }

            </div>

        </div>

    )
}

export default AllAvailableCharters