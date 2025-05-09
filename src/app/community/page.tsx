'use client'

import React, { useState } from 'react'
import { 
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FireIcon,
  StarIcon,
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'

type Group = {
  id: number
  name: string
  description: string
  members: number
  image: string
  isJoined: boolean
  topics: string[]
}

type Post = {
  id: number
  author: string
  role: string
  group: string
  content: string
  likes: number
  comments: number
  time: string
  image?: string
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'groups' | 'discussions'>('groups')
  const [searchQuery, setSearchQuery] = useState('')

  const groups: Group[] = [
    {
      id: 1,
      name: "React Developers",
      description: "A community for React developers to share knowledge and best practices",
      members: 12450,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      isJoined: true,
      topics: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      name: "AI & Machine Learning",
      description: "Discuss the latest developments in AI and machine learning",
      members: 8750,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      isJoined: false,
      topics: ["AI", "Machine Learning", "Data Science"]
    },
    {
      id: 3,
      name: "Cloud Architecture",
      description: "Best practices and discussions about cloud architecture and deployment",
      members: 5430,
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
      isJoined: false,
      topics: ["AWS", "Azure", "Cloud Computing"]
    }
  ]

  const posts: Post[] = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Senior React Developer",
      group: "React Developers",
      content: "Just published a new article about React Server Components and their impact on performance. Check it out!",
      likes: 124,
      comments: 32,
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    },
    {
      id: 2,
      author: "Alex Chen",
      role: "ML Engineer",
      group: "AI & Machine Learning",
      content: "Excited to share our team's latest research on transformer architectures. We've achieved some interesting results in reducing model size while maintaining performance.",
      likes: 89,
      comments: 24,
      time: "5 hours ago"
    }
  ]

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <UserGroupIcon className="h-8 w-8 text-[#0a66c2]" />
          <h1 className="text-2xl font-bold text-gray-900">Community</h1>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Create Group</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search groups, topics, or discussions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field pl-12 w-full"
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-8">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('groups')}
            className={`pill-tab flex-1 text-center ${
              activeTab === 'groups' ? 'active' : ''
            }`}
          >
            Groups
          </button>
          <button
            onClick={() => setActiveTab('discussions')}
            className={`pill-tab flex-1 text-center ${
              activeTab === 'discussions' ? 'active' : ''
            }`}
          >
            Discussions
          </button>
        </div>
      </div>

      {activeTab === 'groups' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <div key={group.id} className="card overflow-hidden">
              <div className="relative h-48">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button
                    className={`btn-secondary ${
                      group.isJoined ? 'bg-gray-100' : ''
                    }`}
                  >
                    {group.isJoined ? 'Joined' : 'Join Group'}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {group.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{group.members.toLocaleString()} members</span>
                  <button className="text-[#0a66c2] hover:text-[#004182]">
                    View Group
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {post.author}
                        </h3>
                        <p className="text-gray-600">{post.role}</p>
                        <p className="text-sm text-gray-500">
                          {post.group} • {post.time}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EllipsisHorizontalIcon className="h-6 w-6" />
                      </button>
                    </div>
                    <p className="mt-4 text-gray-700">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="mt-4 rounded-lg w-full h-48 object-cover"
                      />
                    )}
                    <div className="mt-4 flex items-center space-x-6">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                        <HeartIcon className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                        <ShareIcon className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                        <BookmarkIcon className="h-5 w-5" />
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recommended Groups */}
      {activeTab === 'groups' && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups.slice(0, 3).map((group) => (
              <div key={group.id} className="card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <p className="text-sm text-gray-500">
                      {group.members.toLocaleString()} members
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="btn-secondary w-full">
                  {group.isJoined ? 'Leave Group' : 'Join Group'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 