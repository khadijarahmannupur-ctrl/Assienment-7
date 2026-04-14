import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="py-16 text-center relative">

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D3748]">
                Friends to keep close in your life
            </h1>

            {/* Subtitle */}
            <p className="text-[#64748B] mt-4 max-w-xl mx-auto text-sm md:text-base">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            {/* Button */}
            <button className="mt-6 inline-flex items-center gap-2 bg-[#244D3F] text-white px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
                <FaPlus size={12} />
                Add a Friend
            </button>
        </div>
    );
};

export default Banner;