import React, { useContext } from 'react';
import { TimeLineContext } from '../context/TimeLineContext';

const TimeLinePage = () => {
    const contextData = useContext(TimeLineContext); 
    console.log(contextData);
    return (
        <div>
            this is Timeline page
        </div>
    );
};

export default TimeLinePage;