import React, { useEffect, useState } from 'react'

import NavHeroBar from './NavHeroBar';
import OurServices from './OurServices';
import AboutFlight from './AboutFlight';
import LearnMore from './LearnMore';
import AirportCount from './AirportCount';
import LuxuryCharter from './LuxuryCharter';
import Testimonials from './Testimonials';
import OurPackage from './OurPackage';
import ShowEstimates from './ShowEstimates';
import PushSearchRes from './PushSearchRes';
import axios from 'axios';
import { message } from 'antd';

function MainHomeComp() {


    const [components, setComponents] = useState([]);

    useEffect(() => {
        const fetchComponents = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/components');
                setComponents(response.data);
            } catch (error) {
                message.error('Server Down To Switch Components');
            }
        };

        fetchComponents();
    }, []);

    const componentMapping = {
        'NavHeroBar': NavHeroBar,
        'ShowEstimates': ShowEstimates,
        'OurServices': OurServices,
        'AboutFlight': AboutFlight,
        'LearnMore': LearnMore,
        // 'AirportCount': AirportCount,
        'LuxuryCharter': LuxuryCharter,
        'PushSearchRes': PushSearchRes,
        'Testimonials': Testimonials,
        // 'OurPackage': OurPackage,
    };





    return (
        <div className="Home">
            {/* <h2>Home Section</h2> */}
            {components.map((componentId) => {
                const Component = componentMapping[componentId];
                return <Component key={componentId} />;
            })}
        </div>
    );






    // return (
    //         <div>
    //             <NavHeroBar />
    //             <ShowEstimates />
    //             <OurServices />
    //             <AboutFlight />
    //             <LearnMore />
    //             <AirportCount />
    //             {/* <LuxuryCharter /> */}
    //             <PushSearchRes/>
    //             <Testimonials />
    //             <OurPackage />
    //         </div>



    // )
}

export default MainHomeComp