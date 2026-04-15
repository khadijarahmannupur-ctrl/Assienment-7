import React, { useContext, useState } from 'react';
import { TimeLineContext } from '../context/TimeLineContext';
import TimeLineCard from './TimeLineCard';

const TimeLinePage = () => {
    const { timeLine } = useContext(TimeLineContext);

    // 🔹 states
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('newest');

    // 🔹 filter + search
    const filteredData = timeLine
        .filter(item => filter === "All" ? true : item.type === filter)
        .filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.type.toLowerCase().includes(search.toLowerCase())
        );

    // 🔹 sort
    const sortedData = [...filteredData].sort((a, b) => {
        return sort === "newest"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
    });

    return (
        <div className='container mx-auto mt-10'>

            {/* Title */}
            <h2 className="font-semibold text-4xl text-[#244D3F] mb-6">
                Timeline
            </h2>

            {/* 🔍 Search + Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search by name or type..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full md:w-1/2"
                />

                {/* Sort */}
                <select
                    onChange={(e) => setSort(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full md:w-1/4"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>

            </div>

            {/* 🔘 Filter */}
            <div className="flex gap-3 mb-6 flex-wrap">
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

            {/* 📋 Timeline List */}
            {sortedData.length === 0 ? (
                <div className='bg-gray-100 h-[60vh] rounded-2xl flex items-center justify-center'>
                    <h2 className="font-bold text-3xl text-[#244D3F]">
                        No Data Found!
                    </h2>
                </div>
            ) : (
                sortedData.map((item) => (
                    <TimeLineCard key={item.id} friend={item} />
                ))
            )}

        </div>
    );
};

export default TimeLinePage;