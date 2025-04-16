import React from "react";

interface StatCardProps {
  label: string;
  value: number | string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="bg-[#EAF5FF] rounded-[20px] p-6 w-full max-w-[220px] flex flex-col justify-center shadow-sm">
      <p className="text-[#94A3B8] text-sm font-medium mb-16">{label}</p>
      <div className="flex items-center justify-between">
        <div className="w-[2px] h-6 bg-[#007BFF]"></div>
        <span className="text-[#007BFF] text-[28px] font-bold leading-none">{value}</span>
      </div>
    </div>
  );
};

export default StatCard;
