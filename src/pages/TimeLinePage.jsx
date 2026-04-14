import React, { useContext } from 'react';
import { TimeLineContext } from '../context/TimeLineContext';
import callImg from '../assets/call.png'
import textImg from '../assets/text.png'
import videoImg from '../assets/video.png'

const TimeLinePage = () => {
    const { timeLine, setTimeLine } = useContext(TimeLineContext);
    console.log(timeLine, setTimeLine);

    const getIcon = (type) => {
        if (type === "Call") return callImg;
        if (type === "Text") return textImg;
        if (type === "Video") return videoImg;
    };
    return (
        <div className='container mx-auto mt-10'>
            <div className="mb-8 text-center">
                <h2 className="font-semibold text-4xl text-[#1F2937] text-left">Timeline</h2>
            </div>
            {timeLine.length === 0 ?
                <div className='bg-gray-100 h-[70vh] rounded-2xl flex items-center justify-center'>
                    <h2 className="font-bold text-4xl text-center my-5 text-[#1F2937]">
                        Your Timeline is Empty!
                    </h2>
                </div>
                : timeLine.map((friend) => (
                    <div key={friend.id} className="flex items-center gap-5 border border-gray-200 mt-5 p-5 rounded-2xl">

                        {/* Icon */}
                        <img src={getIcon(friend.type)} className="w-5" />

                        {/* Text */}
                        <div>
                            <p className='mb-1'>
                                <span className="text-[#244D3F] text-xl font-semibold">
                                    {friend.type}
                                </span>

                                <span className="text-gray-600 ml-1">
                                    with {friend.title}
                                </span>
                            </p>
                            <p className="text-sm text-gray-500">{friend.date}</p>
                        </div>

                    </div>
                ))

            }
        </div>
    );
};

export default TimeLinePage;