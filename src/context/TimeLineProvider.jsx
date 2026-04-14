import React, { Children, useState } from 'react';
import { TimeLineContext } from './TimeLineContext';

const TimeLineProvider = ({children}) => {
    const [timeLine, setTimeLine] = useState([]);
    const data = {
        timeLine,
        setTimeLine
    }

    return (
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimeLineProvider;