import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    const { name, picture, days_since_contact, tags, status } = friend;

    // status color
    const statusColor =
        status === "overdue"
            ? "bg-[#EF4444] text-white"
            : status === "almost due"
                ? "bg-[#EFAD44] text-white"
                : "bg-[#244D3F] text-white";
    return (
        <Link to={`/${friend.id}`} className="bg-white rounded-xl shadow-sm p-5 text-center mt-10">

            {/* Image */}
            <img
                src={picture}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto object-cover"
            />

            {/* Name */}
            <h3 className="mt-3 font-semibold text-[#2D3748]">{name}</h3>

            {/* Days */}
            <p className="text-xs text-[#94A3B8] mt-1">
                {days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs bg-green-100 text-[#244D3F] px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Status */}
            <div className="mt-3">
                <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
                    {status}
                </span>
            </div>
        </Link>
    );
};

export default FriendCard;