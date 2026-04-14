import React from 'react';
import useFriends from '../../hooks/useFriends';
import { CircleLoader } from 'react-spinners';
import FriendCard from './FriendCard';

const YourFriends = () => {
    const { friends, loading } = useFriends();
    // console.log(friends, loading);
    return (
        <div className="container mx-auto my-[60px]">
            {/* Section header */}
            <div className="mb-8 text-center">
                <h2 className="font-semibold text-4xl text-[#1F2937] text-left">Your Friends</h2>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                    <CircleLoader color='#244D3F' />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {friends.map((friend) => <FriendCard friend={friend} key={friend.id}></FriendCard>)}
                </div>
            )}
        </div>
    );
};

export default YourFriends;