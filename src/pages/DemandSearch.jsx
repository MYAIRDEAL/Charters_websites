import React, { useEffect, useState } from 'react';
import DemandSearchCards from './DemandSearchCards';
import PageBanner from './PageBanner';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import ErrorComp from '../components/ErrorComp';

const DemandSearch = () => {
    const { selecttype } = useParams();

    let parsedData = {};
    try {
        parsedData = JSON.parse(decodeURIComponent(selecttype));
    } catch (error) {
        message.error('Error parsing data');
        console.error('Parsing error:', error);
    }

    const [responseData, setResponseData] = useState([]);
    
    useEffect(() => {
        const sendData = async () => {
            try {
                let response = await axios.post('http://localhost:8000/api/admin/demandsearch', parsedData);
                setResponseData(response?.data?.data || []);
                message.success('Request successful');
            } catch (error) {
                //  Handel this error silently
            }
        };

        sendData();
    }, []);

    return (
        <div className='bg-white'>
            <PageBanner data={'Sub Category'} />

            <div className='h-[4rem] flex items-center m-8'>
                <h1 className='text-[2rem]'>All Available Flights</h1>
            </div>
            <div className='flex flex-wrap w-full p-[2rem] justify-center md:min-h-[40rem] items-center md:justify-evenly 1024:gap-5 gap-7 768:gap-7'>
                {responseData && responseData?.length > 0 ? (
                    responseData.map((element, index) => (
                        <DemandSearchCards key={index} props={element} />
                    ))
                ) : (
                    <ErrorComp/>
                )}
            </div>
        </div>
    );
};

export default DemandSearch;
