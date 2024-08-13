
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

const LogUserActivity = () => {
    const location = useLocation();
    const [userLog, setUserLog] = useState('');

    useEffect(() => {
        const logUserActivity = (page) => {
            // axios.post('/api/logs', { pageVisited: page, action: 'viewed' })
            //   .catch(err => console.error('Logging failed:', err));
            const decodedPath = decodeURIComponent(page);
            // console.log(decodedPath)

            // Remove symbols except slashes
            const cleanedPath = decodedPath.replace(/[^\w\/]/g, '');

            
            setUserLog((previousData) => (
                previousData += cleanedPath
            ))
            console.log(cleanedPath)

            console.log(userLog)
        };

        logUserActivity(location.pathname);
    }, [location.pathname]);

    return null; // This component does not render anything
};

export default LogUserActivity