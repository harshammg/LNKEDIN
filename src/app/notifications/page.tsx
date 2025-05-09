'use client'

import React, { useState } from 'react'
import { 
  BellIcon,
  UserIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

type NotificationType = 'all' | 'mentions' | 'jobs' | 'news'

type Notification = {
  id: number
  type: 'connection' | 'job' | 'message' | 'news'
  title: string
  description: string
  time: string
  read: boolean
  icon: React.ReactNode
}

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<NotificationType>('all')
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'connection',
      title: 'New Connection Request',
      description: 'Sarah Johnson wants to connect with you',
      time: '2 hours ago',
      read: false,
      icon: <UserIcon className="h-6 w-6 text-blue-500" />
    },
    {
      id: 2,
      type: 'job',
      title: 'Job Match Found',
      description: 'Senior Frontend Developer position at TechCorp matches your profile',
      time: '5 hours ago',
      read: false,
      icon: <BriefcaseIcon className="h-6 w-6 text-green-500" />
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message',
      description: 'Alex Thompson sent you a message about the project',
      time: '1 day ago',
      read: true,
      icon: <ChatBubbleLeftIcon className="h-6 w-6 text-purple-500" />
    },
    {
      id: 4,
      type: 'news',
      title: 'Tech News: Next.js 14 Released',
      description: 'Next.js 14 introduces new features including Server Actions and Partial Prerendering',
      time: '3 hours ago',
      read: false,
      icon: <GlobeAltIcon className="h-6 w-6 text-orange-500" />
    },
    {
      id: 5,
      type: 'news',
      title: 'Tech News: React 19 Preview',
      description: 'React team shares preview of upcoming features in React 19',
      time: '1 day ago',
      read: false,
      icon: <GlobeAltIcon className="h-6 w-6 text-orange-500" />
    }
  ])

  const tabs: { id: NotificationType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'mentions', label: 'Mentions' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'news', label: 'Tech News' }
  ]

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true
    if (activeTab === 'mentions') return notification.type === 'connection'
    if (activeTab === 'jobs') return notification.type === 'job'
    if (activeTab === 'news') return notification.type === 'news'
    return true
  })

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <BellIcon className="h-8 w-8 text-[#0a66c2]" />
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>
        <button 
          onClick={markAllAsRead}
          className="btn-secondary flex items-center space-x-2"
        >
          <CheckCircleIcon className="h-5 w-5" />
          <span>Mark all as read</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-6">
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

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`card p-4 transition-all duration-200 ${
              !notification.read ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {notification.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{notification.description}</p>
                    <p className="text-sm text-gray-500 mt-2">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-[#0a66c2] hover:text-[#004182]"
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <div className="mt-6 text-center">
        <button className="btn-secondary flex items-center space-x-2 mx-auto">
          <ArrowPathIcon className="h-5 w-5" />
          <span>Refresh Notifications</span>
        </button>
      </div>
    </div>
  )
} 