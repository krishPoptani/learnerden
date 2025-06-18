// components/Loader.tsx
import React from 'react';

const PageLoader : React.FC =  () => {
  return (
    <div className="fixed inset-0 bg-white opacity-50 flex items-center justify-center z-[9999]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default PageLoader;
