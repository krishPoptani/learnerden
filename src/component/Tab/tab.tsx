'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

type TabItem = {
  label: string;
  value: string;
};

interface TabsProps {
  tabs: TabItem[];
  defaultActive?: string;
  onTabChange?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActive, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActive || tabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  return (
    <div className="max-w-7xl mx-auto w-full border-b border-gray-200">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={clsx(
              'py-2 text-sm font-medium text-gray-500',
              activeTab === tab.value && 'text-[#4F4AB0] border-b-2 border-[#4F4AB0]'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
