"use client"
const StatCard = ({ count, label }) => (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow h-48">
        <span className="text-4xl md:text-5xl font-bold text-black mb-2">{count}</span>
        <span className="text-lg md:text-xl text-gray-800 font-medium">{label}</span>
    </div>
);

export default StatCard;