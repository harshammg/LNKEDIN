'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon, UserPlusIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

type TabType = 'connections' | 'pending' | 'suggestions'

export default function NetworkPage() {
  const [activeTab, setActiveTab] = useState<TabType>('connections')

  const tabs: { id: TabType; label: string }[] = [
    { id: 'connections', label: 'My Network' },
    { id: 'pending', label: 'Pending' },
    { id: 'suggestions', label: 'Suggestions' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <UserPlusIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Connections</p>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        <div className="card bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <UserPlusIcon className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Requests</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="card bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-100 rounded-full">
              <UserPlusIcon className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New This Week</p>
              <p className="text-2xl font-semibold text-gray-900">45</p>
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
              placeholder="Search connections..."
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
        {/* Connections List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Connection Card */}
          <div className="card bg-white p-6">
            <div className="flex items-start space-x-4">
              <img
                src="/avatars/user1.png"
                alt="User"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                    <p className="text-gray-600">Senior Product Designer @ Figma</p>
                    <p className="text-sm text-gray-500 mt-1">San Francisco, CA</p>
                  </div>
                  <button className="btn-secondary">Message</button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">Product designer with 8+ years of experience in creating beautiful and functional user interfaces.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="pill-tag">UI/UX</span>
                  <span className="pill-tag">Figma</span>
                  <span className="pill-tag">Design Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Request Card */}
          {activeTab === 'pending' && (
            <div className="card bg-white p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/avatars/user2.png"
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Michael Chen</h3>
                      <p className="text-gray-600">Software Engineer @ Google</p>
                      <p className="text-sm text-gray-500 mt-1">New York, NY</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-primary flex items-center space-x-1">
                        <CheckIcon className="h-5 w-5" />
                        <span>Accept</span>
                      </button>
                      <button className="btn-secondary flex items-center space-x-1">
                        <XMarkIcon className="h-5 w-5" />
                        <span>Ignore</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggestion Card */}
          {activeTab === 'suggestions' && (
            <div className="card bg-white p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/avatars/user3.png"
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Emily Rodriguez</h3>
                      <p className="text-gray-600">Marketing Director @ Spotify</p>
                      <p className="text-sm text-gray-500 mt-1">London, UK</p>
                    </div>
                    <button className="btn-primary flex items-center space-x-1">
                      <UserPlusIcon className="h-5 w-5" />
                      <span>Connect</span>
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">Marketing professional with expertise in digital strategy and brand development.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="pill-tag">Digital Marketing</span>
                    <span className="pill-tag">Brand Strategy</span>
                    <span className="pill-tag">Social Media</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Network Insights */}
        <div className="lg:col-span-1">
          <div className="card bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Network Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-[16px]">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">12 new connections</span> this week
                </p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-[16px]">
                <p className="text-sm text-emerald-800">
                  <span className="font-semibold">85%</span> of your connections are in tech
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-[16px]">
                <p className="text-sm text-purple-800">
                  <span className="font-semibold">3 mutual connections</span> with Sarah Johnson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 