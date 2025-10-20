'use client';

import { useState } from 'react';
import cn from '@utils/cn';
import OverviewTab from './OverviewTab';
import InsightsTab from './InsightsTab';

const tabs = [
  { id: 'overview', label: 'ภาพรวม' },
  { id: 'insights', label: 'ข้อมูลเชิงลึก' },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

//   this is just a mockup
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 md:p-8 bg-neutral-white">
      <div className="container max-w-[1440px] space-y-6 flex flex-col items-center bg-neutral-white ">
        <nav className="flex justify-center w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-4 md:px-16 py-2 transition-colors duration-200 border-b-2',
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-neutral-600 hover:text-primary'
              )}
            >
              <p className='headline-large-emphasized'>{tab.label}</p>
            </button>
          ))}
        </nav>

        <div className="w-full ">
          {activeTab === 'overview' ? <OverviewTab /> : <InsightsTab />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;