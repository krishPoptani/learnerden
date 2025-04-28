"use client"
import React from "react";

const Timer = ({ secondsLeft }: { secondsLeft: number }) => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return (
        <div className="flex gap-3">
            ⏱
            <div>
            <span className="text-base text-[#707070] font-semibold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')} Mins </span>
            <p className="text-xs text-[#ACAAAA]">Time Left</p>
            </div> 
        </div>
    );
};

export default Timer;
