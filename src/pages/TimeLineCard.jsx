import React from 'react';
import callImg from '../assets/call.png'
import textImg from '../assets/text.png'
import videoImg from '../assets/video.png'

const TimeLineCard = ({friend}) => {
    const getIcon = (type) => {
        if (type === "Call") return callImg;
        if (type === "Text") return textImg;
        if (type === "Video") return videoImg;
    };
    return (
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
    );
};

export default TimeLineCard;