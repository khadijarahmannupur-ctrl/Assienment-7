import React, { useContext, useState } from 'react';
import { TimeLineContext } from '../context/TimeLineContext';
import TimeLineCard from './TimeLineCard';

const TimeLinePage = () => {
    const { timeLine } = useContext(TimeLineContext);

    // 🔹 state
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('newest');

    
    let filtered = [];

    if (filter === "All") {
        filtered = timeLine;
    } else {
        filtered = timeLine.filter(item => item.type === filter);
    }

    
    let searched = filtered.filter(item => {
        const nameMatch = item.title.toLowerCase().includes(search.toLowerCase());
        const typeMatch = item.type.toLowerCase().includes(search.toLowerCase());

        return nameMatch || typeMatch;
    });

    
    let sorted = [...searched];

    if (sort === "newest") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return (
        <div className='container mx-auto mt-10'>

            
            <h2 className="font-semibold text-4xl text-[#244D3F] mb-6">
                Timeline
            </h2>

            {/*  Search + Sort  div*/}
            <div className="flex flex-col md:flex-row gap-4 mb-6">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full md:w-1/2"
                />

                {/* Sort */}
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full md:w-1/4"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>

            </div>

            {/* Filter div */}
            <div className="flex gap-3 mb-6 flex-wrap">

                {["All", "Call", "Text", "Video"].map(item => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`px-4 py-1.5 rounded-full border text-sm font-medium transition
              
              ${filter === item
                                ? "bg-[#244D3F] text-white border-[#244D3F]"
                                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"}
            `}
                    >
                        {item}
                    </button>
                ))}

            </div>

            {/* Show Data */}
            {sorted.length === 0 ? (
                <div className='bg-gray-100 h-[60vh] rounded-2xl flex items-center justify-center'>
                    <h2 className="font-bold text-3xl text-[#244D3F]">
                        No Data Found!
                    </h2>
                </div>
            ) : (
                sorted.map(item => (
                    <TimeLineCard key={item.id} friend={item} />
                ))
            )}

        </div>
    );
};

export default TimeLinePage;