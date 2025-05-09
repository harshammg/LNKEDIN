'use client'

import React, { useState } from 'react'
import {
  VideoCameraIcon,
  PhotoIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
} from '@heroicons/react/24/outline'

type ContentType = 'all' | 'articles' | 'research'

type FeedItem = {
  id: number
  type: 'post' | 'video' | 'article' | 'research'
  author: string
  role: string
  content: string
  likes: number
  comments: number
  title?: string
  abstract?: string
  tags?: string[]
  videoUrl?: string
  thumbnail?: string
  duration?: string
}

export function Feed() {
  const [activeTab, setActiveTab] = useState<ContentType>('all')

  const tabs: { id: ContentType; label: string; icon: React.ReactNode }[] = [
    { 
      id: 'all', 
      label: 'All',
      icon: <DocumentTextIcon className="h-5 w-5" />
    },
    { 
      id: 'articles', 
      label: 'Articles',
      icon: <PencilSquareIcon className="h-5 w-5" />
    },
    { 
      id: 'research', 
      label: 'Research Papers',
      icon: <AcademicCapIcon className="h-5 w-5" />
    },
  ]

  const feedItems: FeedItem[] = [
    {
      id: 1,
      type: 'post',
      author: "John Doe",
      role: "Software Engineer",
      content: "Just launched a new project using Next.js and Tailwind CSS! Check out the demo and let me know what you think. #webdev #nextjs",
      likes: 42,
      comments: 12,
      tags: ["Next.js", "Web Development", "JavaScript"]
    },
    {
      id: 2,
      type: 'video',
      author: "Sarah Chen",
      role: "UX Designer",
      content: "Quick tutorial on creating beautiful UI components with Tailwind CSS",
      videoUrl: "/example-video.mp4",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      duration: "2:45",
      likes: 128,
      comments: 24,
      tags: ["UI Design", "Tailwind CSS", "Tutorial"]
    },
    {
      id: 3,
      type: 'article',
      author: "Alex Johnson",
      role: "Product Manager",
      title: "The Future of Web Development",
      content: "As we look ahead to 2024, several key trends are shaping the future of web development. Let's explore what's coming next...",
      likes: 56,
      comments: 8,
      tags: ["Web Development", "Technology Trends"]
    },
    {
      id: 4,
      type: 'video',
      author: "Michael Brown",
      role: "Full Stack Developer",
      content: "Building a real-time chat application with WebSocket and React",
      videoUrl: "/chat-tutorial.mp4",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      duration: "4:20",
      likes: 89,
      comments: 15,
      tags: ["WebSocket", "React", "Real-time"]
    },
    {
      id: 5,
      type: 'research',
      author: "Dr. Sarah Chen",
      role: "AI Researcher",
      title: "Advances in Transformer Architecture",
      abstract: "This paper presents a novel approach to transformer architecture optimization, achieving significant improvements in both performance and efficiency...",
      content: "Our research demonstrates that the proposed modifications to the transformer architecture can reduce computational complexity while maintaining or improving model performance...",
      likes: 128,
      comments: 24,
      tags: ["AI", "Machine Learning", "Transformers"]
    }
  ]

  const filteredItems = feedItems.filter(item => 
    activeTab === 'all' || 
    (activeTab === 'articles' && item.type === 'article') ||
    (activeTab === 'research' && item.type === 'research')
  )

  return (
    <div className="space-y-6">
      {/* Start a Post Section */}
      <div className="card">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Your profile"
            className="profile-image w-12 h-12"
          />
          <input
            type="text"
            placeholder="Start a post"
            className="input-field flex-1"
          />
        </div>

        {/* Post Type Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <button className="post-type-button video">
            <VideoCameraIcon className="h-5 w-5" />
            <span>Video</span>
          </button>
          <button className="post-type-button photo">
            <PhotoIcon className="h-5 w-5" />
            <span>Photo</span>
          </button>
          <button className="post-type-button article">
            <PencilSquareIcon className="h-5 w-5" />
            <span>Write Article</span>
          </button>
        </div>
      </div>

      {/* Content Type Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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

      {/* Content Feed */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt={item.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.author}
                    </h3>
                    <p className="text-gray-600">{item.role}</p>
                  </div>
                  {item.title && (
                    <h2 className="text-xl font-bold text-gray-900 mt-2">
                      {item.title}
                    </h2>
                  )}
                  {item.abstract && (
                    <p className="text-gray-600 italic mt-2">
                      {item.abstract}
                    </p>
                  )}
                  <p className="mt-4 text-gray-700">{item.content}</p>
                  
                  {/* Video Thumbnail */}
                  {item.type === 'video' && item.thumbnail && (
                    <div className="mt-4 relative rounded-lg overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt="Video thumbnail"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-3">
                          <PlayIcon className="h-6 w-6 text-[#0a66c2]" />
                        </div>
                      </div>
                      {item.duration && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                          {item.duration}
                        </div>
                      )}
                    </div>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex items-center space-x-6">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                      <span>👍</span>
                      <span>{item.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                      <span>💬</span>
                      <span>{item.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                      <span>↗️</span>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 