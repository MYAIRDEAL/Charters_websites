import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LogUserActivity = () => {
    const location = useLocation();
    const [userLog, setUserLog] = useState('/');

    useEffect(() => {
        const logUserActivity = async (page) => {
            // Extract the base path
            const basePath = page?.split('/')[1] ? `/${page.split('/')[1]}` : '/';

            setUserLog((previousData) => previousData + basePath);


            // Log the base path
            try {
                await axios.post('http://localhost:8000/api/admin/addlogs', { log: userLog })
            }
            catch (error) {
                // ### Nothing we are displaying here because user don't want to know this Log ###
            }

            // Update the state with the base path
        };

        logUserActivity(location.pathname);
    }, [location.pathname]);

    return null; // This component does not render anything
};

export default LogUserActivity;
