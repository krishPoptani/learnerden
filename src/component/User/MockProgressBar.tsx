"use client"
import React from "react";

const MockProgressBar = ({ answeredCount, total, onReviewToggle, isReviewed }: {
    answeredCount: number, total: number,
    onReviewToggle: () => void,
    isReviewed: boolean,

}) => {
    const percentage = Math.round((answeredCount / total) * 100);
    return (
        <div className="w-full bg-[#F8F8F8] rounded-xl flex items-center justify-between px-7 py-3 mt-2  relative">
            <div className="w-1/2" >
                <span className=" text-xs font-medium top-[-22px]">
                    {percentage}%
                </span>
                <div className="bg-[#D9D9D9] rounded-full">
                    <div
                        className="h-3 rounded-full transition-all duration-300"
                        style={{
                            width: `${percentage}%`,
                            background: 'linear-gradient(to right, #3E4FBB, #C32E6B)'
                        }}
                    ></div>
                </div>
            </div>

            <button
                onClick={onReviewToggle}
                className=" text-sm border border-[#D9D9D9] rounded-full px-4 py-2 text-[#797979]"
            >
                {isReviewed ? 'Unreview' : 'Mark as Review'}
            </button>
        </div>
    );
};

export default MockProgressBar;
