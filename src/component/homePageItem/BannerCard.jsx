import React from 'react';

const BannerCard = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 container mx-auto">
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">Number</h2>
                <p className="text-sm text-[#64748B] mt-1">Label</p>
            </div>
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">Number</h2>
                <p className="text-sm text-[#64748B] mt-1">Label</p>
            </div>
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">Number</h2>
                <p className="text-sm text-[#64748B] mt-1">Label</p>
            </div>
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">Number</h2>
                <p className="text-sm text-[#64748B] mt-1">Label</p>
            </div>
                
            </div>
        </>

    );
};

export default BannerCard;