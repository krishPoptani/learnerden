'use client';
import SearchInput from "@/component/Search/Search"; // Assuming this is already reusable
import React from "react";

interface ContentHeaderProps {
  title: string;
  query: string;
  setQuery: (value: string) => void;
  buttonLabel: string;
  onButtonClick: () => void;
  showButton?: boolean;
  showSearch?: boolean;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  query,
  setQuery,
  buttonLabel,
  onButtonClick,
  showButton = true,
  showSearch = true,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
      <div className="flex justify-between items-center">
        {/* Left: Title */}
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

        {/* Right: Search + Button */}
        <div className="flex items-center gap-4">
          {showSearch && <SearchInput value={query} onChange={setQuery} />}
          {showButton && (
            <button
              className="bg-[#4F4AB0] text-white px-6 py-3 border-none rounded-md hover:bg-[#3e3a92] transition-colors duration-200 whitespace-nowrap leading-tight"
              onClick={onButtonClick}
            >
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
