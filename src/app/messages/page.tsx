'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon, PaperAirplaneIcon, PhoneIcon, VideoCameraIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

type Message = {
  id: number
  sender: 'me' | 'other'
  content: string
  timestamp: string
}

type Conversation = {
  id: number
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: number
  online: boolean
}

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<number>(1)
  const [message, setMessage] = useState('')

  const conversations: Conversation[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/avatars/user1.png",
      lastMessage: "Hey, how's the project coming along?",
      timestamp: "10:30 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/avatars/user2.png",
      lastMessage: "Let's schedule a meeting to discuss the design",
      timestamp: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/avatars/user3.png",
      lastMessage: "Thanks for the feedback!",
      timestamp: "2 days ago",
      unread: 0,
      online: true
    }
  ]

  const messages: Message[] = [
    {
      id: 1,
      sender: "other",
      content: "Hey, how's the project coming along?",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      sender: "me",
      content: "Going great! Just finished the UI components",
      timestamp: "10:31 AM"
    },
    {
      id: 3,
      sender: "other",
      content: "That's awesome! Can you share the progress?",
      timestamp: "10:32 AM"
    }
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle sending message
      setMessage('')
    }
  }

  return (
    <div className="h-[calc(100vh-2rem)] flex">
      {/* Conversations List */}
      <div className="w-96 border-r border-gray-200 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search messages..."
              className="input-field pl-12"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors duration-200 ${
                activeConversation === conversation.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-[#0a66c2] rounded-full">
                    {conversation.unread}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={conversations.find(c => c.id === activeConversation)?.avatar}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              {conversations.find(c => c.id === activeConversation)?.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {conversations.find(c => c.id === activeConversation)?.name}
              </h2>
              <p className="text-sm text-gray-500">
                {conversations.find(c => c.id === activeConversation)?.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
              <PhoneIcon className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
              <VideoCameraIcon className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-[20px] p-4 ${
                  msg.sender === 'me'
                    ? 'bg-[#0a66c2] text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span
                  className={`text-xs mt-1 block ${
                    msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="input-field flex-1"
            />
            <button
              type="submit"
              className="btn-primary p-2"
              disabled={!message.trim()}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 