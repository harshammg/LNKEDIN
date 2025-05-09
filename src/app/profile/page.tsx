'use client'

import React from 'react'
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  MapPinIcon, 
  LinkIcon,
  PencilSquareIcon,
  PlusIcon,
  StarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

type Experience = {
  id: number
  title: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string
  description: string
}

type Education = {
  id: number
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description: string
}

type Skill = {
  id: number
  name: string
  endorsements: number
}

export default function ProfilePage() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      startDate: "Jan 2020",
      endDate: "Present",
      description: "Leading frontend development for enterprise applications. Implementing modern React patterns and best practices."
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Innovate Inc",
      location: "Seattle, WA",
      type: "Full-time",
      startDate: "Mar 2018",
      endDate: "Dec 2019",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams."
    }
  ]

  const education: Education[] = [
    {
      id: 1,
      school: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science",
      startDate: "2016",
      endDate: "2018",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors."
    },
    {
      id: 2,
      school: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2012",
      endDate: "2016",
      description: "Dean's List. Active member of the Computer Science Society."
    }
  ]

  const skills: Skill[] = [
    { id: 1, name: "React", endorsements: 42 },
    { id: 2, name: "TypeScript", endorsements: 38 },
    { id: 3, name: "Node.js", endorsements: 35 },
    { id: 4, name: "Python", endorsements: 30 },
    { id: 5, name: "AWS", endorsements: 25 }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="card mb-6">
        <div className="relative h-48 bg-gradient-to-r from-[#0a66c2] to-[#004182] rounded-t-xl">
          <div className="absolute -bottom-16 left-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="pt-20 px-8 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-600">Senior Software Engineer at Tech Corp</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  San Francisco, CA
                </span>
                <span className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  <a href="#" className="text-[#0a66c2] hover:underline">linkedin.com/in/johndoe</a>
                </span>
              </div>
            </div>
            <button className="btn-primary flex items-center">
              <PencilSquareIcon className="h-4 w-4 mr-1" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="card mb-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
            <button className="text-[#0a66c2] hover:text-[#004182]">
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate} · {exp.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="card mb-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
            <button className="text-[#0a66c2] hover:text-[#004182]">
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <AcademicCapIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree} in {edu.field}</p>
                  <p className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
            <button className="text-[#0a66c2] hover:text-[#004182]">
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center bg-gray-100 rounded-full px-4 py-2"
              >
                <span className="text-gray-900">{skill.name}</span>
                <span className="ml-2 text-gray-500 text-sm">
                  {skill.endorsements} endorsements
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 