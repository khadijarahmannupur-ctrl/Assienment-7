import React, { useContext } from 'react';
import { TimeLineContext } from '../context/TimeLineContext';

const TimeLinePage = () => {
    const {timeLine, setTimeLine} = useContext(TimeLineContext); 
    console.log(timeLine, setTimeLine);
    return (
        <div>
            {
                timeLine.map(friend => <div>
                    <h2>{friend.name}</h2>
                </div>)
            }
        </div>
    );
};

export default TimeLinePage;