import React from 'react'
import fleets1 from '../assets/midsize-800-2.jpeg'

import PageBanner from './PageBanner'
import OurFleetsCard from './OurFleetsCard'
import { useParams } from 'react-router-dom'


function OurFleetsPage() {

    let data = {
        title: 'Citation Mustang',
        pax: 4,
        range: 1150,
        speed: 340,
        cabin: 4.48,
        img: fleets1,
    }

    let { type } = useParams();

    return (
        <div>

            <PageBanner data={'Premium High Class Fleet'} />
            <div className='md:h-[100vh] 375:h-auto 375:py-4  bg-white flex flex-wrap items-center gap-6 justify-center'>


                <OurFleetsCard data={data} />
                <OurFleetsCard data={data} />
                <OurFleetsCard data={data} />
                <OurFleetsCard data={data} />



            </div>

        </div>
    )
}

export default OurFleetsPage