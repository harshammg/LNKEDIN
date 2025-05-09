'use client'

import React, { useState } from 'react'
import { BuildingOfficeIcon, MapPinIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

// Sample job data - replace with real data from an API
const sampleJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    postedAt: '2 days ago',
    description: 'We are looking for a Senior Software Engineer to join our team...',
    requirements: [
      '5+ years of experience in software development',
      'Strong knowledge of React and Node.js',
      'Experience with cloud platforms (AWS/GCP)',
    ],
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Design Co',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    postedAt: '1 week ago',
    description: 'Join our design team to create beautiful and intuitive products...',
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio showcasing UI/UX work',
    ],
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'Growth Inc',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$80,000 - $100,000',
    postedAt: '3 days ago',
    description: 'Lead our marketing initiatives and drive growth...',
    requirements: [
      '4+ years of marketing experience',
      'Experience with digital marketing channels',
      'Strong analytical skills',
    ],
  },
]

export function JobListings() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {sampleJobs.map((job) => (
        <div
          key={job.id}
          className={`card cursor-pointer transition-colors ${
            selectedJob === job.id ? 'ring-2 ring-primary-500' : 'hover:bg-gray-50'
          }`}
          onClick={() => setSelectedJob(job.id)}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                {job.company}
              </div>
            </div>
            <button className="btn-primary">Apply</button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-gray-500">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-gray-500">
              <ClockIcon className="h-4 w-4 mr-1" />
              {job.type}
            </div>
            <div className="flex items-center text-gray-500">
              <CurrencyDollarIcon className="h-4 w-4 mr-1" />
              {job.salary}
            </div>
            <div className="text-gray-500">{job.postedAt}</div>
          </div>

          {selectedJob === job.id && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-700">{job.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Requirements:</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 