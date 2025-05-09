'use client'

import React from 'react'
import { ShareIcon } from '@heroicons/react/24/outline'

interface JobCardProps {
  company: string
  logo: string
  title: string
  location: string
  type: string
  salary: string
  applicants: number
  matchPercentage: number
  skills: string[]
}

export function JobCard({
  company,
  logo,
  title,
  location,
  type,
  salary,
  applicants,
  matchPercentage,
  skills,
}: JobCardProps) {
  return (
    <div className="card bg-white p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{company}</p>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
              <span>{location}</span>
              <span>•</span>
              <span>{type}</span>
              <span>•</span>
              <span>{salary}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            {matchPercentage}% Match
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {applicants} applicants
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="btn-secondary flex items-center space-x-2">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
        <button className="btn-primary">Apply Now</button>
      </div>
    </div>
  )
} 