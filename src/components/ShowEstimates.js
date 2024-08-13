import React, { useEffect, useRef, useState } from 'react';
import { DatePicker, message } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { IoMdSwap } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiFlightTakeoffFill } from "react-icons/ri";
import '../componentCss/ShowEstimatesCss.css'
import axios from 'axios';

const ShowEstimates = () => {
    const [dateData, setDate] = useState(null);

    const onChange = (date, dateString) => {
        setDate(dateString);
    };

    const [fromValue, setFromValue] = useState('Bangalore');
    const [toValue, setToValue] = useState('Dubai');
    const [selectType, setSelectType] = useState('Jet');
    const [formData, setFormData] = useState(null); 

    const handleFromChange = (e) => setFromValue(e.target.value);
    const handleToChange = (e) => setToValue(e.target.value);

    const handleSwap = () => {
        setFromValue(toValue);
        setToValue(fromValue);
    };

    const [selectTypePopUp, setSelectTypePopUp] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSelectTypePopUp(false);
        }
    };

    const handleOptionClick = (option) => {
        setSelectType(option);
        setSelectTypePopUp(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formHandler = (element) => {
        element.preventDefault();
        let name = element.target.name.value;
        let email = element.target.email.value;
        let to = element.target.to.value;
        let from = element.target.from.value;
        let phone = element.target.phone.value;
        let passengers = element.target.passengers.value;
        let date = dateData;
        let section = selectType.toLowerCase().replace(/\s+/g, '').slice(0, 3)

        let postData = { name, email, to, from, phone, passengers, date, section };
        setFormData(postData);
    };

    useEffect(() => {
        const sendData = async () => {
            if (formData) {
                try {
                    let response = await axios.post('http://localhost:8000/api/admin/demandsearch', formData);
                    message.success('Request successful');
                } catch (error) {
                    message.error('Server is Busy try after some time');
                }
            }
        };

        sendData();
    }, [formData]);


    return (
        <div className=' md:h-[50vh] h[30vh] w-full p-4 flex flex-col justify-center items-center'>
            <h1 className='text-[2.5rem] text-white font-semibold'>Private Jet Charters</h1>
            
            <div className=' w-[75%] font-semibold md:flex hidden'>
                <button className={` w-[10rem] h-[2.5rem] outline-none mx-3 text-white rounded-lg transition-all duration-700 ${selectType === 'jet' ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`} onClick={(e) => setSelectType(e.target.innerText.toLowerCase())} >Jet</button>
                <button className={` w-[10rem] h-[2.5rem] mx-3 outline-none  rounded-lg  text-white transition-all duration-700 ${selectType === 'helicopter' ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`} onClick={(e) => setSelectType(e.target.innerText.toLowerCase())} >Helicopter</button>
            </div>

            <div className='w-[80%] md:hidden flex flex-col relative' ref={dropdownRef}>
                <div
                    className='w-[50%] flex items-center justify-around rounded-lg bg-hoverColor text-white cursor-pointer'
                    onClick={() => setSelectTypePopUp(prev => !prev)}
                >
                    <p className='mt-2 flex items-center'>{selectType || 'Jet'}</p>
                    <IoIosArrowDown />
                </div>

                <div
                    className={`absolute w-[50%] mt-2 rounded-lg bg-selectType ${selectTypePopUp ? 'block' : 'hidden'} z-10`}
                    style={{ top: '100%' }}
                >
                    <ul className='list-none p-0 m-0'>
                        <li
                            className={`text-[1.2rem] transition-all duration-300 text-white py-2 pl-5 ${selectType === 'jet' ? 'bg-hoverColor' : ''}`}
                            onClick={() => handleOptionClick('Jet')}
                        >
                            Jet
                        </li>
                        <li
                            className={`text-[1.2rem] transition-all duration-300 text-white py-2 pl-5 ${selectType === 'air ambulance' ? 'bg-hoverColor' : ''}`}
                            onClick={() => handleOptionClick('Air Ambulance')}
                        >
                            Air Ambulance
                        </li>
                        <li
                            className={`text-[1.2rem] transition-all duration-300 text-white py-2 pl-5 ${selectType === 'charter' ? 'bg-hoverColor' : ''}`}
                            onClick={() => handleOptionClick('Charter')}
                        >
                            Charter
                        </li>

                    </ul>
                </div>
            </div>

            <form action="#" method='post' onSubmit={formHandler}>
                <div className="form">
                    <div id='first'>
                        <label htmlFor='from' className='flex gap-4'>Origin {<RiFlightTakeoffFill />} Departure</label>
                        <div id='oneinnerdiv'>
                            <input
                                type='text'
                                name='from'
                                id='from'
                                placeholder='VOBL'
                                value={fromValue} onChange={handleFromChange}
                            />
                            <IoMdSwap id='icon' onClick={handleSwap} className='cursor-pointer' />
                            <input
                                type='text'
                                name='to'
                                id='to'
                                placeholder='OMDW'
                                value={toValue}
                                onChange={handleToChange}
                            />
                        </div>
                    </div>

                    <div className='second'>
                        <label htmlFor='departure'>Date</label>
                        <DatePicker
                            showTime
                            format='DD-MM-YYYY HH:mm'
                            id='date'
                            onChange={onChange}
                        />
                    </div>

                    <div className='third'>
                        <label htmlFor='passengers'>Passengers</label>
                        <input
                            type='number'
                            name='passengers'
                            placeholder='0'
                        />
                    </div>

                    <div className='fourth'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type='number'
                            name='phone'
                            placeholder='9876745329'
                        />
                    </div>

                    <div className='five'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='abc@gmail.com'
                        />
                    </div>

                    <div className='six'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Jon'
                        />
                    </div>

                    <div className='seven hover:scale-105 duration-200'>
                        <button type='submit'>
                            SHOW ESTIMATES
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ShowEstimates;
