import React from 'react'

function SalesValues() {
    return (
        <div className="bg-sky-200 rounded-t-xl p-6 flex justify-between items-center mx-4">
            {/* Left Side Content */}
            <div>
                <h2 className="text-lg text-slate-800 mb-1">Sales Value</h2>
                <p className="text-3xl text-slate-900">$10,567</p>
                <p className="text-sm text-slate-700 mt-1">
                    Yesterday <span className="text-green-600 font-semibold ml-1">10.57%</span>
                </p>
            </div>

            {/* Right Side Buttons */}
            <div className="flex space-x-2">
                <button className="bg-sky-400 text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-sky-500 transition">
                    Month
                </button>
                <button className="bg-slate-800 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-black transition">
                    Week
                </button>
            </div>
        </div>
    )
}

export default SalesValues


