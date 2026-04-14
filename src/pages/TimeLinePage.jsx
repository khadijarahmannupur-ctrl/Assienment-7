import React, { useContext, useState } from 'react';
import { TimeLineContext } from '../context/TimeLineContext';
import TimeLineCard from './TimeLineCard';

const TimeLinePage = () => {
    const { timeLine } = useContext(TimeLineContext);

    const [filter, setFilter] = useState('All');

    const filteredData =
        filter === "All"
            ? timeLine
            : timeLine.filter((item) => item.type === filter);

    return (
        <div className='container mx-auto mt-10'>

            {/* Title */}
            <div className="mb-8">
                <h2 className="font-semibold text-4xl text-[#244D3F]">
                    Timeline
                </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 mb-6">
                {["All", "Call", "Text", "Video"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`px-4 py-1 rounded-full border ${filter === item
                                ? "bg-[#244D3F] text-white"
                                : "bg-white"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Empty State */}
            {filteredData.length === 0 ? (
                <div className='bg-gray-100 h-[60vh] rounded-2xl flex items-center justify-center'>
                    <h2 className="font-bold text-3xl text-[#244D3F]">
                        No Data Found!
                    </h2>
                </div>
            ) : (
                filteredData.map((friend) => (
                    <TimeLineCard key={friend.id} friend={friend} />
                ))
            )}

        </div>
    );
};

export default TimeLinePage;