'use client'

import React, { useState } from 'react'
import { 
  GlobeAltIcon,
  BookmarkIcon,
  ShareIcon,
  ChatBubbleLeftIcon,
  FireIcon,
  CodeBracketIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

type NewsCategory = 'all' | 'ai' | 'web' | 'mobile' | 'cloud'

type NewsArticle = {
  id: number
  title: string
  description: string
  category: NewsCategory
  source: string
  time: string
  image: string
  likes: number
  comments: number
  bookmarked: boolean
}

export default function TechNewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all')
  const [articles, setArticles] = useState<NewsArticle[]>([
    {
      id: 1,
      title: "OpenAI Announces GPT-5 Development",
      description: "OpenAI has started development on GPT-5, promising significant improvements in reasoning and multimodal capabilities.",
      category: 'ai',
      source: "TechCrunch",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      likes: 1240,
      comments: 328,
      bookmarked: false
    },
    {
      id: 2,
      title: "Next.js 14 Released with Server Actions",
      description: "Vercel releases Next.js 14 with groundbreaking features including Server Actions and Partial Prerendering.",
      category: 'web',
      source: "Vercel Blog",
      time: "5 hours ago",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      likes: 892,
      comments: 156,
      bookmarked: false
    },
    {
      id: 3,
      title: "Apple Vision Pro Developer Kit Available",
      description: "Apple opens applications for Vision Pro developer kits, allowing developers to create spatial computing experiences.",
      category: 'mobile',
      source: "Apple Developer",
      time: "1 day ago",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      likes: 756,
      comments: 189,
      bookmarked: false
    },
    {
      id: 4,
      title: "AWS Launches New AI Services",
      description: "Amazon Web Services introduces new AI-powered services for developers and enterprises.",
      category: 'cloud',
      source: "AWS Blog",
      time: "3 hours ago",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
      likes: 543,
      comments: 98,
      bookmarked: false
    }
  ])

  const categories: { id: NewsCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All News', icon: <GlobeAltIcon className="h-5 w-5" /> },
    { id: 'ai', label: 'AI & ML', icon: <CpuChipIcon className="h-5 w-5" /> },
    { id: 'web', label: 'Web Dev', icon: <CodeBracketIcon className="h-5 w-5" /> },
    { id: 'mobile', label: 'Mobile', icon: <RocketLaunchIcon className="h-5 w-5" /> },
    { id: 'cloud', label: 'Cloud', icon: <ArrowTrendingUpIcon className="h-5 w-5" /> }
  ]

  const filteredArticles = articles.filter(article => 
    activeCategory === 'all' || article.category === activeCategory
  )

  const toggleBookmark = (id: number) => {
    setArticles(articles.map(article =>
      article.id === id ? { ...article, bookmarked: !article.bookmarked } : article
    ))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <GlobeAltIcon className="h-8 w-8 text-[#0a66c2]" />
          <h1 className="text-2xl font-bold text-gray-900">Tech News</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-secondary flex items-center space-x-2">
            <ClockIcon className="h-5 w-5" />
            <span>Latest</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <FireIcon className="h-5 w-5" />
            <span>Trending</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-8">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pill-tab flex-1 text-center flex items-center justify-center space-x-2 ${
                activeCategory === category.id ? 'active' : ''
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <div key={article.id} className="card overflow-hidden">
            <div className="relative h-48">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => toggleBookmark(article.id)}
                  className={`p-2 rounded-full bg-white shadow-md ${
                    article.bookmarked ? 'text-[#0a66c2]' : 'text-gray-400'
                  }`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>{article.source}</span>
                <span>•</span>
                <span>{article.time}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                    <ChatBubbleLeftIcon className="h-5 w-5" />
                    <span>{article.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-[#0a66c2]">
                    <ShareIcon className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="text-[#0a66c2] hover:text-[#004182] font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="btn-primary">
          Load More News
        </button>
      </div>
    </div>
  )
} 