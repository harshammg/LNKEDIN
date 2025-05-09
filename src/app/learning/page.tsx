'use client'

import React, { useState } from 'react'
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  ClockIcon, 
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

type Course = {
  id: number
  title: string
  instructor: string
  rating: number
  duration: string
  level: string
  image: string
  category: string
}

type LearningPath = {
  id: number
  title: string
  description: string
  courses: number
  duration: string
  image: string
}

export default function LearningPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' }
  ]

  const courses: Course[] = [
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      duration: '12 hours',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'development'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Michael Chen',
      rating: 4.9,
      duration: '8 hours',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'design'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Emily Rodriguez',
      rating: 4.7,
      duration: '10 hours',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'marketing'
    }
  ]

  const learningPaths: LearningPath[] = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Master both frontend and backend development',
      courses: 12,
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Product Management',
      description: 'Learn to build and manage successful products',
      courses: 8,
      duration: '4 months',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning</h1>
        <p className="text-gray-600">Expand your skills with expert-led courses</p>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-[#0a66c2] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Learning Paths */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Learning Paths</h2>
          <button className="text-[#0a66c2] text-sm font-medium flex items-center">
            View all
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map((path) => (
            <div key={path.id} className="card overflow-hidden">
              <div className="relative h-48">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{path.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      {path.courses} courses
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {path.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recommended Courses</h2>
          <button className="text-[#0a66c2] text-sm font-medium flex items-center">
            View all
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="card overflow-hidden">
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                  {course.level}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 