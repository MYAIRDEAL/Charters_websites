import React from 'react'
import { Link } from 'react-router-dom'



function OurFleetsCard({ data }) {
    return (
        <div className=' w-[20rem] shadow-lg rounded-xl overflow-hidden'>

            <div>
                <img src={data.img} alt="" />
            </div>
            <div className='p-3'>
                <div className='my-3'>
                    <h1>
                        {data.title}
                    </h1>
                </div>

                <div>
                    <div className='flex justify-between border-b-[2px] py-1'>
                        <h5>pax</h5>
                        <h5>{data.pax}</h5>
                    </div>
                    <div className='flex justify-between border-b-[2px] py-1'>
                        <h5>Range (nm)</h5>
                        <h5>{data.range}</h5>
                    </div>
                    <div className='flex justify-between border-b-[2px] py-1'>
                        <h5>Speed (KTAS)</h5>
                        <h5>{data.speed}</h5>
                    </div>
                    <div className='flex justify-between border-b-[2px] py-1'>
                        <h5>Cabin height (ft)</h5>
                        <h5>{data.cabin}</h5>
                    </div>
                </div>

                <Link to={'/ourfleetsdetails'}>

                    <div className='my-3 p-3 flex border-hoverColor cursor-pointer border-[2px] rounded-lg items-center justify-center'>
                        <button className='font-semibold text-hoverColor'>
                            SEE DETAILS
                        </button>

                    </div>

                </Link>

            </div>



        </div>

    )
}

export default OurFleetsCard