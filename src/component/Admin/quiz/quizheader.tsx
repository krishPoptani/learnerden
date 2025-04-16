'use client';
import SearchInput from "@/component/Search/Search";
import React from "react";

interface QuizHeaderProps {
  query: string;
  setQuery: (value: string) => void;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ query, setQuery }) => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        {/* Left: Title */}
        <h1 className="text-xl font-semibold text-gray-900">Quiz Sets</h1>

        {/* Right: Search + Button */}
        <div className="flex items-center gap-4">
          <SearchInput value={query} onChange={setQuery} />
          <button
            className="bg-[#4F4AB0] text-white px-6 py-3 border-none rounded-md hover:bg-[#3e3a92] transition-colors duration-200 whitespace-nowrap leading-tight"
            onClick={handleSubmit}
          >
            Add Quiz Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;

