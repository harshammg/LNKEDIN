'use client'

import React, { useState } from 'react'
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline'

interface ReelProps {
  author: string
  role: string
  videoUrl: string
  likes: number
  comments: number
}

export function Reel({ author, role, videoUrl, likes: initialLikes, comments: initialComments }: ReelProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [comments, setComments] = useState(initialComments)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <div className="card">
      {/* Author Info */}
      <div className="flex items-center space-x-3">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={author}
          className="profile-image w-12 h-12"
        />
        <div>
          <h3 className="text-sm font-medium text-gray-900">{author}</h3>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      {/* Video Content */}
      <div className="mt-4 rounded-[20px] overflow-hidden bg-gray-100 relative aspect-[9/16]">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
          poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        />
      </div>

      {/* Engagement Stats */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex items-center space-x-4 border-t border-gray-100 pt-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 text-sm font-medium ${
            isLiked ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <HeartIcon className={`h-5 w-5 ${isLiked ? 'fill-primary-600' : ''}`} />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  )
} 