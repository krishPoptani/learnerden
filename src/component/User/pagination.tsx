'use client';

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 mx-1 rounded-md border ${
            i === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-3 py-1 mx-1 rounded-md border bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
        >
          {'<'}
        </button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-3 py-1 mx-1 rounded-md border bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
        >
          {'>'}
        </button>
      )}
    </div>
  );
};

export default Pagination;
