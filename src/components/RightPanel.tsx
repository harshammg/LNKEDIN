'use client'

import React from 'react'
import { CalendarIcon, UserPlusIcon } from '@heroicons/react/24/outline'

export function RightPanel() {
  return (
    <div className="w-80 p-4">
      <div className="sidebar-container space-y-8">
        {/* Connect with Others Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Connect with Others</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              See All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="connect-card">
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt="Profile"
                    className="profile-image w-12 h-12"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Sarah Johnson</h3>
                    <p className="text-xs text-gray-500">Product Designer @ Design Co</p>
                  </div>
                  <button className="btn-secondary text-xs">
                    <UserPlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Upcoming Events</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              See All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="event-card">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <CalendarIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Tech Conference 2024</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Join us for the biggest tech conference of the year
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>Mar 15, 2024 • 9:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 