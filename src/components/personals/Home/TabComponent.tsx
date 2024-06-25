"use client";
import { useState } from 'react';
import JobListing from './JobListing';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('jobPreview');

  return (
    <div className="w-full min-h-full">
      <div className="flex space-x-4 border-b px-8 pt-4">
        <button
          className={`py-2 px-4 ${activeTab === 'jobPreview' ? 'border-b-2 border-red-500 text-red-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('jobPreview')}
        >
          Job preview
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'applicants' ? 'border-b-2 border-red-500 text-red-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('applicants')}
        >
          Applicants
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'match' ? 'border-b-2 border-red-500 text-red-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('match')}
        >
          Match
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'messages' ? 'border-b-2 border-red-500 text-red-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
        </button>
      </div>
      <div className="">
        {activeTab === 'jobPreview' && <JobListing/>}
        {activeTab === 'applicants' && <div>Content for Applicants</div>}
        {activeTab === 'match' && <div>Content for Match</div>}
        {activeTab === 'messages' && <div>Content for Messages</div>}
      </div>
    </div>
  );
};

export default TabComponent;
