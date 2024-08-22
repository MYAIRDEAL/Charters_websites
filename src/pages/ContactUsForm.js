import React, { useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

function ContactUsForm({ props }) {


    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            type: '',
            departure: props?.departure || 'Bangalore',
            arrival: props?.arrival || 'Dubai',
            passengers: props?.passengers || '1',
            date: props?.date || '21-09-2023'

        }
    )

    const handleChange = (data) => {
        setFormData({
            ...formData,
            [data.target.name]: data?.target?.value,
        });
    };

    const handelSubmit = async (element) => {
        element.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/admin/addbooking', formData)
            setFormData(
                {
                    name: '',
                    email: '',
                    phone: '',
                    type: '',
                    departure: props?.departure || 'Bangalore',
                    arrival: props?.arrival || 'Dubai',
                    passengers: props?.passengers || '1',
                    date: props?.date || '21-09-2023'

                }
            )
            message.success('Form submition is Successful ')
        }
        catch (error) {
            message.error('Form submition is unsuccessful Check your Email')
        }
    }

    function formatDate(date) {
        const day = String(date.getDate())?.padStart(2, '0');
        const month = String(date.getMonth() + 1)?.padStart(2, '0'); // Months are 0-indexed
        const year = date?.getFullYear();

        return `${day}-${month}-${year}`;
    } 
    const now = new Date();
    const formattedDate = formatDate(now);
    return (
        <div className=' w-[46rem]  375:h-[120vh] 400:h-[90vh] 500:h-[100vh] 768:h-[60vh] flex justify-center flex-col mb-[10rem] md:mb-0'>
            <div>
                <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>CONTACT US</h1>
                <div>
                    <h1 className='md:text-[3vw] text-[2rem] m-3'>
                        Get In Touch.
                    </h1>
                    <form className='flex flex-wrap m-3' onSubmit={handelSubmit}>
                        <input type="text" name='name' placeholder='Name' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' onChange={handleChange} />
                        <input type="email" name='email' placeholder='Email' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem]  outline-none border-b-2 border-hoverColor' onChange={handleChange} />
                        <input type="number" name='phone' placeholder='Phone' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem]  outline-none border-b-2 border-hoverColor' onChange={handleChange} />
                        <input type="Subject One" name='type' placeholder='Mid Size' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' onChange={handleChange} />
                        <input type="Subject One" name='departure' placeholder='Goa' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' onChange={handleChange} value={formData.departure} />
                        <input type="Subject One" name='arrival' placeholder='Chennai' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' onChange={handleChange} value={formData.arrival} />
                        <input type="text" name='date' placeholder={formattedDate} className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' onChange={handleChange} value={formData.date} />
                        <input type="Subject One" name='passengers' placeholder='0' className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor' onChange={handleChange} value={formData.passengers} />
                        <button className='w-[10rem] transition-all hover:scale-110 duration-500 h-[3rem] tracking-widest m-3 bg-hoverColor text-white rounded-lg' >Get In Touch</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUsForm