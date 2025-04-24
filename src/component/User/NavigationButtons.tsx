"use client"
import React from "react";

const NavigationButtons = ({
    onPrevious,
    onNext,
    isLast
}: {
    onPrevious: () => void,
    onNext: () => void,
    isLast: boolean
}) => {
    return (
        <div className="flex justify-center gap-5 mt-4">
            <button onClick={onPrevious} className="bg-[#F0F0F0] px-4 py-2 rounded-full">Previous</button>
            <div className="space-x-2">
                <button onClick={onNext} className="bg-purple-600 text-white px-4 py-2 rounded-full">
                    {isLast ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default NavigationButtons;
