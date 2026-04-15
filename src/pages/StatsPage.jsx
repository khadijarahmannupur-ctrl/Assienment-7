import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimeLineContext } from '../context/TimeLineContext';

const StatsPage = () => {
    const { timeLine } = useContext(TimeLineContext);

    const callCount = timeLine.filter(item => item.type === 'Call').length;
    const textCount = timeLine.filter(item => item.type === 'Text').length;
    const videoCount = timeLine.filter(item => item.type === 'Video').length;

    const data = [
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Text", value: textCount, fill: "#7E35E1" },
        { name: "Video", value: videoCount, fill: "#37A163" },
    ];
    if (timeLine.length === 0) {
        return (
            <div className='bg-gray-100 h-[60vh] rounded-2xl flex items-center justify-center container mx-auto mt-10'>
                <h2 className="font-bold text-3xl text-[#244D3F]">
                    No Data Found!
                </h2>
            </div>
        )
    }
    return (
        <div className='container mx-auto my-10'>
            <div>
                <h2 className="font-bold text-4xl text-[#244D3F] mb-6">
                    Friendship Analytics
                </h2>
            </div>
            <div className='border border-gray-200 rounded-2xl p-8'>
                <h3 className='text-lg font-medium text-[#244D3F] ml-10'>By Interaction Type</h3>
                <PieChart style={{ width: '100%', maxWidth: '500px', margin: "auto", maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;