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
    <div className="flex w-full min-h-screen flex-col items-center bg-neutral-100 p-4 md:p-8">
      <div className="container max-w-4xl space-y-6 flex flex-col items-center">
        <nav className="flex justify-center w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-16 py-2 text-base font-semibold transition-colors duration-200',
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'border-b-2 border-transparent text-neutral-600 hover:text-primary'
              )}
            >
              <p className='headline-large-emphasized'>{tab.label}</p>
            </button>
          ))}
        </nav>

        <div className="w-full border border-black">
          {activeTab === 'overview' ? <OverviewTab /> : <InsightsTab />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;