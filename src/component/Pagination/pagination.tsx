import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalRecords?: number;
  recordsPerPage?: number;
}


const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
  recordsPerPage = 10,
}) => {
  const getPaginationItems = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    let pages: (number | string)[] = [];
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    
    if (currentPage === 1) end += 2;
    if (currentPage === totalPages) start -= 2;
    
    pages.push(1);
    if (start > 2) pages.push('...');
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages - 1) pages.push('...');
    pages.push(totalPages);
    
    return pages;
  };
  
  const getShowingRange = () => {
    const start = (currentPage - 1) * recordsPerPage + 1;
    const end = Math.min(currentPage * recordsPerPage, totalRecords || 0);
    return `${start}-${end}`;
  };
  const Icon = '/icons/carat.svg'; 
  
  const isDisabled = (type: 'prev' | 'next') =>
    (type === 'prev' && currentPage === 1) || (type === 'next' && currentPage === totalPages);

  return (
    <div className='max-w-7xl mx-auto px-4 w-full'>
    <div className="flex flex-col  md:flex-row justify-between items-center mt-8 gap-4">
      {totalRecords !== undefined && (
        <p className="text-[#928989] mt-4 text-sm">
          Showing {getShowingRange()} of {totalRecords} Records
        </p>
      )}

      <div className="flex items-center gap-2 pt-4">
        {/* Prev Button */}
        <button
          onClick={() => !isDisabled('prev') && onPageChange(currentPage - 1)}
          disabled={isDisabled('prev')}
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            isDisabled('prev')
              ? 'opacity-60 cursor-not-allowed'
              : 'hover:border-[#2b3990]'
          }`}
        >
          <img
            src={Icon}
            alt="Previous"
            className="w-3 h-3 rotate-180 filter invert"
          />
        </button>

        {/* Page Buttons */}
        {getPaginationItems().map((page, idx) =>
          typeof page === 'number' ? (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded border text-sm font-medium transition-all
                ${
                  page === currentPage
                    ? 'text-[#2b3990] border-[#2b3990]'
                    : 'text-[#212b36] border-[#dfe3e8] hover:text-[#2b3990] hover:border-[#2b3990]'
                }`}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="text-sm px-1 text-gray-500">
              {page}
            </span>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => !isDisabled('next') && onPageChange(currentPage + 1)}
          disabled={isDisabled('next')}
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            isDisabled('next')
              ? 'opacity-60 cursor-not-allowed'
              : 'hover:border-[#2b3990]'
          }`}
        >
          <img src={Icon} alt="Next" className="w-3 h-3 filter invert" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Pagination;
