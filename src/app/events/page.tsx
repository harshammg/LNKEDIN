'use client'

import React, { useState } from 'react'
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  VideoCameraIcon,
  BuildingOfficeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'

type Event = {
  id: number
  title: string
  type: 'online' | 'in-person' | 'hybrid'
  date: string
  time: string
  location: string
  organizer: string
  attendees: number
  image: string
  description: string
  tags: string[]
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')
  const [searchQuery, setSearchQuery] = useState('')

  const events: Event[] = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      type: "hybrid",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco Convention Center",
      organizer: "TechCorp Solutions",
      attendees: 1250,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      description: "Join us for a day of innovation, networking, and learning about the latest trends in technology.",
      tags: ["Technology", "Networking", "Innovation"]
    },
    {
      id: 2,
      title: "Web Development Workshop",
      type: "online",
      date: "March 20, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      organizer: "WebDev Academy",
      attendees: 450,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Learn advanced web development techniques and best practices from industry experts.",
      tags: ["Web Development", "Workshop", "Learning"]
    },
    {
      id: 3,
      title: "AI & Machine Learning Conference",
      type: "in-person",
      date: "April 5, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "New York Tech Hub",
      organizer: "AI Research Network",
      attendees: 800,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description: "Explore the future of AI and machine learning with leading researchers and practitioners.",
      tags: ["AI", "Machine Learning", "Conference"]
    }
  ]

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Discover and join professional events</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4 mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10 w-full"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <button className="btn-secondary flex items-center space-x-2">
          <FunnelIcon className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-8">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pill-tab flex-1 text-center flex items-center justify-center space-x-2 transition-all duration-200 ${
              activeTab === 'upcoming' 
                ? 'bg-[#0a66c2] text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            <CalendarIcon className="h-5 w-5" />
            <span>Upcoming Events</span>
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`pill-tab flex-1 text-center flex items-center justify-center space-x-2 transition-all duration-200 ${
              activeTab === 'past' 
                ? 'bg-[#0a66c2] text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            <ClockIcon className="h-5 w-5" />
            <span>Past Events</span>
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Event Image */}
            <div className="h-48 relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'online' 
                    ? 'bg-blue-100 text-blue-800'
                    : event.type === 'in-person'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            </div>

            {/* Event Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{event.description}</p>

              {/* Event Details */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                  <span>{event.organizer}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <span>{event.attendees.toLocaleString()} attendees</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex space-x-3">
                <button className="btn-primary flex-1">
                  {event.type === 'online' ? 'Join Online' : 'Register'}
                </button>
                <button className="btn-secondary">
                  <VideoCameraIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">No events found</h3>
          <p className="mt-2 text-gray-600">
            Try adjusting your search or create a new event
          </p>
          <button className="btn-primary mt-6">
            Create Event
          </button>
        </div>
      )}
    </div>
  )
} 