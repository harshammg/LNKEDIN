'use client'

import React from 'react'
import { UserPlusIcon } from '@heroicons/react/24/outline'

type SuggestedConnection = {
  id: number
  name: string
  role: string
  company: string
  image: string
  mutualConnections: number
}

export function RightSidebar() {
  const suggestedConnections: SuggestedConnection[] = [
    {
      id: 1,
      name: "Emily Chen",
      role: "Senior Product Designer",
      company: "Design Studio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      mutualConnections: 12
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      company: "Tech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      mutualConnections: 8
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Marketing Manager",
      company: "Digital Marketing Co",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      mutualConnections: 15
    },
    {
      id: 4,
      name: "David Kim",
      role: "Data Scientist",
      company: "AI Research Lab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      mutualConnections: 6
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "UX Researcher",
      company: "User Experience Co",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      mutualConnections: 9
    }
  ]

  return (
    <div className="w-80 p-4">
      <div className="space-y-6">
        {/* Connect with Others Section */}
        <div className="card">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Connect with Others
            </h2>
            <div className="space-y-4">
              {suggestedConnections.map((connection) => (
                <div key={connection.id} className="flex items-center space-x-3">
                  <img
                    src={connection.image}
                    alt={connection.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {connection.name}
                    </h3>
                    <p className="text-xs text-gray-600 truncate">
                      {connection.role} at {connection.company}
                    </p>
                    <p className="text-xs text-gray-500">
                      {connection.mutualConnections} mutual connections
                    </p>
                  </div>
                  <button className="btn-secondary p-2">
                    <UserPlusIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-sm text-[#0a66c2] hover:text-[#004182] font-medium">
              See all suggestions
            </button>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="card">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Trending Topics
            </h2>
            <div className="space-y-3">
              {['#WebDevelopment', '#AI', '#UXDesign', '#CloudComputing'].map((topic) => (
                <div key={topic} className="flex items-center justify-between">
                  <span className="text-sm text-[#0a66c2]">{topic}</span>
                  <span className="text-xs text-gray-500">2.5k posts</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Help Center</a>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Privacy & Terms</a>
            <a href="#" className="hover:underline">Ad Choices</a>
            <a href="#" className="hover:underline">Advertising</a>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Business Services</a>
            <a href="#" className="hover:underline">Get the LinkedIn app</a>
          </div>
          <p>LinkedIn Corporation © 2024</p>
        </div>
      </div>
    </div>
  )
} 