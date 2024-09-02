import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

function ContactUsFormMain() {


    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const now = new Date();
    const formattedDate = formatDate(now);



    const [formData, setFormData] = useState({
        enquiryname: localStorage.getItem('enquiryname') || '',
        enquiryemail: localStorage.getItem('enquiryemail') || '',
        enquiryphone: localStorage.getItem('enquiryphone') || '',
        enquirytype: localStorage.getItem('enquirytype') || '',
        enquirydate : formattedDate,
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
            // await axios.post('http://localhost:8000/api/admin/addenquiry', formData);
            await axios.post('http://localhost:8000/api/admin/addenquiry', formData);
            setFormData({
                enquiryname: '',
                enquiryemail: '',
                enquiryphone: '',
                enquirytype: ''
            });
            localStorage.clear(); // Clear the local storage upon successful submission
            message.success('Form submission is successful');
        } catch (error) {
            message.error('Form submission was unsuccessful. Please check your email.');
        }
    };




    return (
        <div className='w-[46rem]   flex justify-center flex-col'>
            <div>
                <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>REQUEST A CALL BACK</h1>
                <div>
                    <h1 className='md:text-[3vw] text-[2rem] m-3'>Get In Touch.</h1>
                    <form className='flex flex-wrap m-3' onSubmit={handleSubmit}>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="name" className=' text-hoverColor mx-3 text-[1rem]'> Name </label>
                            <input
                                type="text"
                                name='enquiryname'
                                // placeholder='Name'
                                required
                                className={` 344:w-[19rem] my-0  360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor`}
                                onChange={handleChange}
                                value={formData.enquiryname}
                                x />
                            {/* <h1 className='mx-3 text-error hidden' ref={nameError}>Write you Name</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="email" className=' text-hoverColor mx-3 text-[1rem]'> Email </label>
                            <input
                                type="email"
                                name='enquiryemail'
                                required
                                // placeholder='Email'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.enquiryemail}
                            />
                            {/* <h1 className='mx-3  text-hoverColor hidden' ref={emailError}>Write you Email</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="phone" className=' text-hoverColor mx-3 text-[1rem]'> Mobile Number </label>
                            <input
                                type="number"
                                name='enquiryphone'
                                required
                                // placeholder='Phone'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.enquiryphone}
                            />
                            {/* <h1 className='mx-3  text-hoverColor hidden' ref={phoneError}>Write you Phone Number</h1> */}
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="type" className=' text-hoverColor mx-3 text-[1rem]'>Type of Service Looking For </label>
                            <input
                                type="text"
                                name='enquirytype'
                                required
                                // placeholder='Mid Size'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.enquirytype}
                            />
                            {/* <h1 className='mx-3   text-hoverColor hidden' ref={typeError}>Write you Type</h1> */}
                        </div>



                        <div className='flex items-center mt-5'>
                            <button className='w-[10rem] transition-all hover:scale-110 duration-500 h-[3rem] tracking-widest m-3  bg-hoverColor text-white rounded-lg'>
                                Get In Touch
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsFormMain;
