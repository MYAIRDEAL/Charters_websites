import React, { useEffect, useState } from 'react'

import NavHeroBar from './NavHeroBar';
import OurServices from './OurServices';
import AboutFlight from './AboutFlight';
import LearnMore from './LearnMore';
import Testimonials from './Testimonials';
import ShowEstimates from './ShowEstimates';
import PushSearchRes from './PushSearchRes';
import OurFleets from './OurFleets';
import axios from 'axios';
import ContactusMain from '../components/ContactusMain'
import { message } from 'antd';

function MainHomeComp() {

    const [components, setComponents] = useState([]);



    useEffect(() => {
        const fetchComponents = async () => {
            try {
                const response = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/components');
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
        'OurFleets': OurFleets,
        'PushSearchRes': PushSearchRes,
        'Testimonials': Testimonials,        
        'ContactPage': ContactusMain,        
    };





    return (
        <div className="Home">
        {components.map((componentId) => {
            const Component = componentMapping[componentId];
            if (!Component) {
                console.error(`Component not found for id: ${componentId}`);
                return null;
            }
            return <Component key={componentId} />;
        })}
    </div>
    );
}

export default MainHomeComp
