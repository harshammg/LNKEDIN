'use client'

import React, { useState } from 'react'
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  PlusIcon,
  PencilSquareIcon,
  ChartBarIcon,
  MegaphoneIcon,
  UserPlusIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

type Page = {
  id: number
  name: string
  type: 'company' | 'professional' | 'group'
  followers: number
  posts: number
  image: string
  description: string
  lastActive: string
}

export default function MyPagesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'company' | 'professional' | 'group'>('all')

  const pages: Page[] = [
    {
      id: 1,
      name: "TechCorp Solutions",
      type: "company",
      followers: 12500,
      posts: 45,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      description: "Leading technology solutions provider specializing in enterprise software and cloud services.",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Web Development Professionals",
      type: "group",
      followers: 8500,
      posts: 128,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      description: "A community of web developers sharing knowledge, opportunities, and best practices.",
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "AI Research Network",
      type: "professional",
      followers: 3200,
      posts: 67,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description: "Professional network for AI researchers and practitioners to share insights and collaborate.",
      lastActive: "3 days ago"
    }
  ]

  const filteredPages = pages.filter(page => 
    activeTab === 'all' || page.type === activeTab
  )

  const tabs = [
    { id: 'all', label: 'All Pages', icon: <GlobeAltIcon className="h-5 w-5" /> },
    { id: 'company', label: 'Company Pages', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
    { id: 'professional', label: 'Professional Pages', icon: <UserGroupIcon className="h-5 w-5" /> },
    { id: 'group', label: 'Groups', icon: <UserGroupIcon className="h-5 w-5" /> },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Pages</h1>
          <p className="text-gray-600 mt-1">Manage your professional pages and communities</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Create New Page</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-8">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pill-tab flex-1 text-center flex items-center justify-center space-x-2 transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-[#0a66c2] text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPages.map((page) => (
          <div key={page.id} className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 relative">
              <img
                src={page.image}
                alt={page.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Page Info */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{page.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <PencilSquareIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-semibold text-gray-900">{page.followers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-semibold text-gray-900">{page.posts}</p>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <ChartBarIcon className="h-5 w-5" />
                  <span>Analytics</span>
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <MegaphoneIcon className="h-5 w-5" />
                  <span>Post</span>
                </button>
              </div>

              {/* Last Active */}
              <p className="text-sm text-gray-500 mt-4">
                Last active: {page.lastActive}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPages.length === 0 && (
        <div className="text-center py-12">
          <UserPlusIcon className="h-12 w-12 text-gray-400 mx-auto" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">No pages found</h3>
          <p className="mt-2 text-gray-600">
            Create a new page to start building your professional presence
          </p>
          <button className="btn-primary mt-6">
            Create New Page
          </button>
        </div>
      )}
    </div>
  )
} 