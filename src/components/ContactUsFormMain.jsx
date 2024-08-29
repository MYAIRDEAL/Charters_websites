import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

function ContactUsForm({ props }) {
    const [formData, setFormData] = useState({
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        phone: localStorage.getItem('phone') || '',
        type: props?.chartertype || localStorage.getItem('type') || 'Mid Size',
        departure: props?.departure || localStorage.getItem('departure') || 'Departure',
        arrival: props?.arrival || localStorage.getItem('arrival') || 'Arrival',
        passengers: props?.passengers || localStorage.getItem('passengers') || '1',
        date: props?.date || localStorage.getItem('date') || '21-09-2023'
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

    // const nameError = useRef();
    // const emailError = useRef();
    // const phoneError = useRef();
    // const typeError = useRef();
    // const departureError = useRef();
    // const arrivalError = useRef();
    // const dateError = useRef();
    // const paxError = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Reset errors
        // nameError.current.classList.add('hidden');
        // emailError.current.classList.add('hidden');
        // phoneError.current.classList.add('hidden');
        // typeError.current.classList.add('hidden');
        // departureError.current.classList.add('hidden');
        // arrivalError.current.classList.add('hidden');
        // dateError.current.classList.add('hidden');
        // paxError.current.classList.add('hidden');

        // let isValid = true;

        // if (formData.name.length === 0) {
        //     nameError.current.classList.remove('hidden');
        //     isValid = false;
        // }

        // if (formData.email.length === 0) {
        //     emailError.current.classList.remove('hidden');
        //     isValid = false;
        // }

        // if (formData.phone.length === 0) {
        //     phoneError.current.classList.remove('hidden');
        //     isValid = false;
        // }

        // if (formData.type.length === 0) {
        //     typeError.current.classList.remove('hidden');
        //     isValid = false;
        // }
        // if (formData.departure.length === 0) {
        //     departureError.current.classList.remove('hidden');
        //     isValid = false;
        // }
        // if (formData.arrival.length === 0) {
        //     arrivalError.current.classList.remove('hidden');
        //     isValid = false;
        // }
        // if (formData.passengers.length === 0) {
        //     paxError.current.classList.remove('hidden');
        //     isValid = false;
        // }
        // if (formData.date.length === 0) {
        //     dateError.current.classList.remove('hidden');
        //     isValid = false;
        // }

        // if (!isValid) {
        //     return; // Stop submission if any validation fails
        // }

        try {
            // await axios.post('http://localhost:8000/api/admin/addbooking', formData);
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
        <div className='w-[46rem]   flex justify-center flex-col'>
            <div>
                <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>CONTACT US</h1>
                <div>
                    <h1 className='md:text-[3vw] text-[2rem] m-3'>Get In Touch.</h1>
                    <form className='flex flex-wrap m-3' onSubmit={handleSubmit}>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="name" className=' text-hoverColor mx-3 text-[1rem]'> Name </label>
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                required
                                className={` 344:w-[19rem] my-0  360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor`}
                                onChange={handleChange}
                                value={formData.name}
                                x />
                            {/* <h1 className='mx-3 text-error hidden' ref={nameError}>Write you Name</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="email" className=' text-hoverColor mx-3 text-[1rem]'> Email </label>
                            <input
                                type="email"
                                name='email'
                                required
                                placeholder='Email'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.email}
                            />
                            {/* <h1 className='mx-3  text-hoverColor hidden' ref={emailError}>Write you Email</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="phone" className=' text-hoverColor mx-3 text-[1rem]'> Mobile Number </label>
                            <input
                                type="number"
                                name='phone'
                                required
                                placeholder='Phone'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.phone}
                            />
                            {/* <h1 className='mx-3  text-hoverColor hidden' ref={phoneError}>Write you Phone Number</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="type" className=' text-hoverColor mx-3 text-[1rem]'> Charter Type </label>
                            <input
                                type="text"
                                name='type'
                                required
                                placeholder='Mid Size'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.type}
                            />
                            {/* <h1 className='mx-3   text-hoverColor hidden' ref={typeError}>Write you Type</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="departure" className=' text-hoverColor mx-3 text-[1rem]'> Departure </label>
                            <input
                                type="text"
                                name='departure'
                                required
                                placeholder='Departure'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.departure}
                            />
                            {/* <h1 className='mx-3   text-hoverColor hidden' ref={departureError}>Write Departure</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="arrival" className=' text-hoverColor mx-3 text-[1rem]'> Arrival </label>
                            <input
                                type="text"
                                name='arrival'
                                required
                                placeholder='Arrival'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.arrival}
                            />
                            {/* <h1 className='mx-3   text-hoverColor hidden' ref={arrivalError}>Write Arrival</h1> */}
                        </div>


                        <div className='flex flex-col my-1'>
                            <label htmlFor="date" className=' text-hoverColor mx-3 text-[1rem]'> Date </label>
                            <input
                                type="text"
                                name='date'
                                required
                                placeholder={formattedDate}
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.date}
                            />
                            {/* <h1 className='mx-3   text-hoverColor hidden' ref={dateError}>Write Date</h1> */}
                        </div>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="passengers" className=' text-hoverColor mx-3 text-[1rem]'> Pax </label>
                            <input
                                type="text"
                                name='passengers'
                                required
                                placeholder='0'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.passengers}
                            />
                            {/* <h1 className='mx-3   text-hoverColor hidden' ref={paxError}>Passengers Count</h1> */}
                        </div>
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
