import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { CircleLoader } from 'react-spinners';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { TimeLineContext } from '../../context/TimeLineContext';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
    const { id } = useParams();
    const { friends, loading } = useFriends();
    const expectedFriend = friends.find((friend) => String(friend.id) === id);

    const { timeLine, setTimeLine } = useContext(TimeLineContext);
    // console.log(timeLine, setTimeLine);

    if (loading) {
        return (
            <div className="h-[70vh] flex justify-center items-center">
                <CircleLoader color='#244D3F' />
            </div>
        );
    }
    const handleTimeLine = (type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            title: name,
            date: new Date().toISOString()
        };

        setTimeLine([...timeLine, newEntry]);
        toast.success(`${name} get the ${type} successfully`)
    }

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriend;
    // console.log(expectedFriend);

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
                        <div className="p-6 text-center">
                            <img
                                src={picture}
                                alt={name}
                                className="mx-auto h-24 w-24 rounded-full object-cover shadow"
                            />
                            <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>

                            <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                                {status}
                            </span>

                            <div className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                {tags}
                            </div>

                            <p className="mt-4 text-sm italic text-gray-500">
                                "{bio}"
                            </p>
                            <p className="mt-2 text-sm text-gray-600">Preferred: {email}</p>
                        </div>

                        <div className="space-y-2 border-t border-gray-200 p-4">
                            <button className="w-full rounded-xl border border-gray-200 p-6 text-sm font-medium hover:bg-gray-50 btn">
                                ⏰ Snooze 2 Weeks
                            </button>
                            <button className="w-full rounded-xl border border-gray-200 p-6 text-sm font-medium hover:bg-gray-50 btn">
                                📦 Archive
                            </button>
                            <button className="w-full rounded-xl border border-red-200 p-6 text-sm font-medium text-red-600 hover:bg-red-50 btn">
                                🗑️ Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 p-4 md:p-6 space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* days_since_contact */}
                            <div
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center"
                            >
                                <div className="text-2xl font-bold text-emerald-700">{days_since_contact}</div>
                                <div className="mt-1 text-sm text-gray-500">Days Since Contact</div>
                            </div>
                            {/* GOALs */}
                            <div
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center"
                            >
                                <div className="text-2xl font-bold text-emerald-700">{goal}</div>
                                <div className="mt-1 text-sm text-gray-500">Goal (Days)</div>
                            </div>
                            {/* Next Due */}
                            <div
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center"
                            >
                                <div className="text-2xl font-bold text-emerald-700">{next_due_date}</div>
                                <div className="mt-1 text-sm text-gray-500">Next Due</div>
                            </div>
                        </div>

                        {/* Relationship Goal */}
                        <div className="rounded-2xl border border-gray-200 p-5">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#244D3F]">Relationship Goal</h3>
                                <button className="rounded-lg border border-gray-200 px-4 py-1.5 text-sm hover:bg-gray-50">
                                    Edit
                                </button>
                            </div>
                            <div className="pl-4 text-gray-600">
                                Connect every <span className="font-semibold text-gray-900">30 days</span>
                            </div>
                        </div>

                        {/* Quick Check-In */}
                        <div className="rounded-2xl border border-gray-200 p-5">
                            <h3 className="mb-4 text-lg font-semibold text-[#244D3F]">Quick Check-In</h3>

                            {/* button-1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button
                                    onClick={() => handleTimeLine('Call')}
                                    className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center hover:bg-green-50 transition"
                                >
                                    <div className="text-2xl flex justify-center">
                                        <img src={callImg} alt="" className='w-8' />
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-gray-700">Call</div>
                                </button>

                                {/* button-2 */}
                                <button
                                    onClick={() => handleTimeLine('Text')}
                                    className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center hover:bg-green-50 transition"
                                >
                                    <div className="text-2xl flex justify-center">
                                        <img src={textImg} alt="" className='w-8' />
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-gray-700">Text</div>
                                </button>

                                {/* button-3 */}
                                <button
                                    onClick={() => handleTimeLine('Video')}
                                    className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center hover:bg-green-50 transition"
                                >
                                    <div className="text-2xl flex justify-center">
                                        <img src={videoImg} alt="" className='w-8' />
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-gray-700">Video</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;