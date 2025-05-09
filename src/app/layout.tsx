'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { TopNav } from '@/components/TopNav'
import { Sidebar } from '@/components/Sidebar'
import { RightSidebar } from '@/components/RightSidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <TopNav />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">
              {children}
            </main>
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  )
} 