'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon, BookmarkIcon, BriefcaseIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { JobCard } from '@/components/JobCard'
import { ResumePanel } from '@/components/ResumePanel'

type TabType = 'discover' | 'saved' | 'applied' | 'achievements'

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('discover')

  const tabs: { id: TabType; label: string }[] = [
    { id: 'discover', label: 'Discover' },
    { id: 'saved', label: 'Saved' },
    { id: 'applied', label: 'Applied' },
    { id: 'achievements', label: 'Achievements' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-100 rounded-full">
              <BriefcaseIcon className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Job Matches</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>
        <div className="card bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <BookmarkIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Applications Sent</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="card bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <TrophyIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="card bg-white p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="input-field pl-12"
            />
          </div>
          <button className="btn-secondary flex items-center space-x-2">
            <span>Advanced Filters</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-8">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pill-tab flex-1 text-center ${
                activeTab === tab.id ? 'active' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job Listings */}
        <div className="lg:col-span-2 space-y-6">
          <JobCard
            company="TechCorp"
            logo="/company-logos/techcorp.png"
            title="Senior Frontend Developer"
            location="San Francisco, CA"
            type="Full-time"
            salary="$120k - $150k"
            applicants={42}
            matchPercentage={95}
            skills={['React', 'TypeScript', 'Next.js', 'Tailwind CSS']}
          />
          <JobCard
            company="DesignHub"
            logo="/company-logos/designhub.png"
            title="UI/UX Designer"
            location="Remote"
            type="Contract"
            salary="$90k - $110k"
            applicants={28}
            matchPercentage={88}
            skills={['Figma', 'UI Design', 'User Research', 'Prototyping']}
          />
        </div>

        {/* Resume Panel */}
        <div className="lg:col-span-1">
          <ResumePanel />
        </div>
      </div>
    </div>
  )
} 