import React, { useEffect, useState } from 'react'

import { FcBusinessman } from "react-icons/fc";
import PageBanner from './PageBanner';
import axios from 'axios';
import { message } from 'antd';
import ErrorComp from '../components/ErrorComp';




function TestimonialsPage() {

    const [showAllExp, setShowAllExp] = useState('');

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/getallfeedback');
                setShowAllExp(response.data.feedback);
            } catch (error) {
                message.error('Internet is slow to get feedbacks');
            }
        };
        fetchExperience();
    }, []);


    return (

        <div>

            <PageBanner data={'Testimonials'} />

            <div className='bg-white'>


                <div className=' flex flex-col items-center justify-center h-[20rem] '>
                    <h1 className='text-hoverColor tracking-[0.4rem]'>TESTIMONIALS</h1>
                    <h1 className='1487:text-[2.5rem]'>What Client Says About Flights
                    </h1>
                    <p className='1487::w-[45rem] text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.
                    </p>
                </div>

                <div className='flex items-center min-h-[20rem] justify-evenly flex-wrap gap-4 py-4'>
                    {

                        showAllExp?.length > 0 ? showAllExp.map((element, index) => (
                            <div className='w-[28rem] border-[2px] border-hoverColor  rounded-lg ' key={index}>
                                <div>
                                    <p className='text-gray-400 1487:text-[1.3rem] h-[23.5rem] overflow-hidden leading-[2.3rem] p-2 mb-0'>
                                        {`" ${element.feedback} "`}   {/* Max Char is 447 */}
                                    </p> 
                                    
                                </div>
                                <div className='flex items-center '>
                                    <FcBusinessman className='m-4 bg-gray-400 p-1 rounded-full w-[3rem] h-[3rem]' />
                                    <div>
                                        <h1 className='text-[1.2rem] m-1'>{element.name}</h1>
                                        <p className='m-1'>{element.service}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                            :
                            <ErrorComp />

                    }

                </div>
            </div>





        </div>

    )
}

export default TestimonialsPage