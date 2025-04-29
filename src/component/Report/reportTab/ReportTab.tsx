import React, { FC } from 'react';

interface ReportTabProps {
  activeTab: string;
  categoryActiveTab: string;
  setActiveTab: (tab: string) => void;
  setCategoryActiveTab: (tab: string) => void;
}

const ReportTab: FC<ReportTabProps> = ({
  activeTab,
  setActiveTab,
  categoryActiveTab,
  setCategoryActiveTab
}) => {
  const tabs = ['Student-wise', 'Category-wise', 'Subject-wise'];
  const categoryTabs = ['Syllabus', 'Competitive Exam', 'Foreign Language'];

  return (
    <div className="max-w-7xl mx-auto w-full pl-4 pb-4">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-semibold cursor-pointer ${
              activeTab === tab ? 'text-[#4F4AB0]' : 'text-black'
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {activeTab === "Category-wise" && (
        <div className="flex items-center gap-4 mt-4">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCategoryActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium text-sm ${
                categoryActiveTab === tab
                  ? 'bg-[#4F4AB0] text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportTab;
