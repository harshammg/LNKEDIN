'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-80 p-4">
      <div className="sidebar-container space-y-8">
        {/* Profile Summary */}
        <Link href="/profile" className="block text-center hover:opacity-90 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="profile-image w-24 h-24 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
          <p className="text-sm text-gray-500">Software Engineer @ Tech Corp</p>
        </Link>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <Link 
            href="/" 
            className={`nav-item ${pathname === '/' ? 'active' : ''}`}
          >
            <HomeIcon className="h-6 w-6" />
            <span>Home</span>
          </Link>
          <Link 
            href="/jobs" 
            className={`nav-item ${pathname === '/jobs' ? 'active' : ''}`}
          >
            <BriefcaseIcon className="h-6 w-6" />
            <span>Jobs</span>
          </Link>
          <Link 
            href="/network" 
            className={`nav-item ${pathname === '/network' ? 'active' : ''}`}
          >
            <UserGroupIcon className="h-6 w-6" />
            <span>Network</span>
          </Link>
          <Link 
            href="/network/my-pages" 
            className={`nav-item pl-8 ${pathname === '/network/my-pages' ? 'active' : ''}`}
          >
            <BuildingOfficeIcon className="h-5 w-5" />
            <span>My Pages</span>
          </Link>
          <Link 
            href="/events" 
            className={`nav-item pl-8 ${pathname === '/events' ? 'active' : ''}`}
          >
            <CalendarIcon className="h-5 w-5" />
            <span>Events</span>
          </Link>
          <Link 
            href="/messages" 
            className={`nav-item ${pathname === '/messages' ? 'active' : ''}`}
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span>Messages</span>
          </Link>
          <Link 
            href="/learning" 
            className={`nav-item ${pathname === '/learning' ? 'active' : ''}`}
          >
            <BookOpenIcon className="h-6 w-6" />
            <span>Learning</span>
          </Link>
          <Link 
            href="/community" 
            className={`nav-item ${pathname === '/community' ? 'active' : ''}`}
          >
            <UserCircleIcon className="h-6 w-6" />
            <span>Community</span>
          </Link>
          <Link 
            href="/notifications" 
            className={`nav-item ${pathname === '/notifications' ? 'active' : ''}`}
          >
            <BellIcon className="h-6 w-6" />
            <span>Notifications</span>
          </Link>
          <Link 
            href="/tech-news" 
            className={`nav-item ${pathname === '/tech-news' ? 'active' : ''}`}
          >
            <GlobeAltIcon className="h-6 w-6" />
            <span>Tech News</span>
          </Link>
          <Link 
            href="#" 
            className="nav-item"
          >
            <Cog6ToothIcon className="h-6 w-6" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Resume Section */}
        <div className="card bg-primary-50">
          <h3 className="text-lg font-semibold text-primary-900 mb-2">Resume Builder</h3>
          <p className="text-sm text-primary-700 mb-4">
            Build your professional resume and get noticed by top companies
          </p>
          <button className="btn-primary w-full">Create Resume</button>
        </div>
      </div>
    </div>
  )
} 