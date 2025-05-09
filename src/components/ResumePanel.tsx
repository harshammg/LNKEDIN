'use client'

import React from 'react'
import {
  PencilSquareIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

export function ResumePanel() {
  return (
    <div className="card bg-white p-6 sticky top-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Smart Resume Center
      </h2>

      {/* Resume Actions */}
      <div className="space-y-3">
        <button className="btn-secondary w-full flex items-center justify-center space-x-2">
          <PencilSquareIcon className="h-5 w-5" />
          <span>Edit Resume</span>
        </button>
        <button className="btn-secondary w-full flex items-center justify-center space-x-2">
          <ArrowDownTrayIcon className="h-5 w-5" />
          <span>Download PDF</span>
        </button>
        <button className="btn-primary w-full flex items-center justify-center space-x-2">
          <SparklesIcon className="h-5 w-5" />
          <span>Auto-Match Resume</span>
        </button>
      </div>

      {/* Resume Strength */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-900">Resume Strength</h3>
          <span className="text-sm font-medium text-emerald-600">80%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: '80%' }}
          />
        </div>
      </div>

      {/* Missing Skills */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-900 mb-4">
          Missing Skills for Dream Job
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-amber-50 rounded-xl">
            <div className="flex items-start space-x-3">
              <AcademicCapIcon className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Advanced TypeScript
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Learn advanced TypeScript patterns and best practices
                </p>
                <a
                  href="#"
                  className="text-sm text-amber-600 font-medium hover:text-amber-700 mt-2 inline-block"
                >
                  View Course →
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl">
            <div className="flex items-start space-x-3">
              <AcademicCapIcon className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  System Design
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Master scalable architecture and system design principles
                </p>
                <a
                  href="#"
                  className="text-sm text-amber-600 font-medium hover:text-amber-700 mt-2 inline-block"
                >
                  View Course →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 p-4 bg-blue-50 rounded-xl">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          Tips to Improve
        </h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Add more detailed project descriptions</li>
          <li>• Include measurable achievements</li>
          <li>• Update your skills section</li>
        </ul>
      </div>
    </div>
  )
} 