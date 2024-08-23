import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

function ContactUsForm({ props }) {
    const [formData, setFormData] = useState({
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        phone: localStorage.getItem('phone') || '',
        type: localStorage.getItem('type') || '',
        departure: localStorage.getItem('departure') || props?.departure || 'Bangalore',
        arrival: localStorage.getItem('arrival') || props?.arrival || 'Dubai',
        passengers: localStorage.getItem('passengers') || props?.passengers || '1',
        date: localStorage.getItem('date') || props?.date || '21-09-2023'
    });

    useEffect(() => {
        Object.keys(formData).forEach(key => {
            localStorage.setItem(key, formData[key]);
        });
    }, [formData]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/admin/addbooking', formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                type: '',
                departure: props?.departure || 'Bangalore',
                arrival: props?.arrival || 'Dubai',
                passengers: props?.passengers || '1',
                date: props?.date || '21-09-2023'
            });
            localStorage.clear(); // Clear the local storage upon successful submission
            message.success('Form submission is successful');
        } catch (error) {
            message.error('Form submission was unsuccessful. Please check your email.');
        }
    };

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const now = new Date();
    const formattedDate = formatDate(now);

    return (
        <div className='w-[46rem] 375:h-[120vh] 400:h-[90vh] 500:h-[100vh] 768:h-[60vh] flex justify-center flex-col mb-[10rem] md:mb-0'>
            <div>
                <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>CONTACT US</h1>
                <div>
                    <h1 className='md:text-[3vw] text-[2rem] m-3'>Get In Touch.</h1>
                    <form className='flex flex-wrap m-3' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='name'
                            placeholder='Name'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.name}
                        />
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <input
                            type="number"
                            name='phone'
                            placeholder='Phone'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.phone}
                        />
                        <input
                            type="text"
                            name='type'
                            placeholder='Mid Size'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.type}
                        />
                        <input
                            type="text"
                            name='departure'
                            placeholder='Goa'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.departure}
                        />
                        <input
                            type="text"
                            name='arrival'
                            placeholder='Chennai'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.arrival}
                        />
                        <input
                            type="text"
                            name='date'
                            placeholder={formattedDate}
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.date}
                        />
                        <input
                            type="text"
                            name='passengers'
                            placeholder='0'
                            className='344:w-[19rem] 360:w-[20.5rem] m-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                            onChange={handleChange}
                            value={formData.passengers}
                        />
                        <button className='w-[10rem] transition-all hover:scale-110 duration-500 h-[3rem] tracking-widest m-3 bg-hoverColor text-white rounded-lg'>
                            Get In Touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;
