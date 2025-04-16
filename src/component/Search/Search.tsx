import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md bg-white focus-within:ring-1 focus-within:ring-white">
      <Search className="w-4 h-4 text-gray-400 mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-gray-700 placeholder-gray-400 bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchInput;
