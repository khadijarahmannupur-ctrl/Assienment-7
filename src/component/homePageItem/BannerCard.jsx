import React from 'react';
import useFriends from '../../hooks/useFriends';

const BannerCard = () => {
    const { friends, loading } = useFriends();
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 container mx-auto">
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">{friends.length}</h2>
                <p className="text-sm text-[#64748B] mt-1">Total Friends</p>
            </div>
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
                <p className="text-sm text-[#64748B] mt-1">On Track</p>
            </div>
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">6</h2>
                <p className="text-sm text-[#64748B] mt-1">Need Attention</p>
            </div>
            <div className="bg-white rounded-xl shadow-md py-6 text-center w-full">
                <h2 className="text-2xl font-bold text-[#244D3F]">12</h2>
                <p className="text-sm text-[#64748B] mt-1">Interactions This Month</p>
            </div>
                
            </div>
        </>

    );
};

export default BannerCard;