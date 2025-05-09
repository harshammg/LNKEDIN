'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Remote',
]

const experienceLevels = [
  'Entry Level',
  'Associate',
  'Mid-Senior Level',
  'Director',
  'Executive',
]

export function JobFilters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJobType, setSelectedJobType] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])

  const toggleJobType = (type: string) => {
    setSelectedJobType(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const toggleExperience = (level: string) => {
    setSelectedExperience(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    )
  }

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          placeholder="Search jobs, companies, or keywords"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
        <div className="flex-1 flex space-x-4 overflow-x-auto pb-2">
          {/* Job Type Filter */}
          <div className="flex space-x-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggleJobType(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedJobType.includes(type)
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Experience Level Filter */}
          <div className="flex space-x-2">
            {experienceLevels.map((level) => (
              <button
                key={level}
                onClick={() => toggleExperience(level)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedExperience.includes(level)
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 