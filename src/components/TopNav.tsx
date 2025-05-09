'use client'

import React from 'react'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export function TopNav() {
  return (
    <div className="h-16 border-b border-gray-200 bg-white">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section - App Name */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#0a66c2]">
            LinkedIn
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Menu */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 