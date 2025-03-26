'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Project {
  title: string
  description: string
  date: string
  link: string
  size?: 'large' | 'medium' | 'small'
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio v2",
      description: "A minimalist portfolio showcasing my work and experiments with Next.js, React, and modern web technologies.",
      date: "Dec 19, 2023",
      link: "https://github.com/jivndzn/portfolio",
      size: "large"
    },
  ]

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Misty forest background"
        fill
        className="object-cover object-center"
        loading="lazy"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 px-4 py-8 min-h-screen max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-white/60">
            A collection of projects I've built, from experiments to production applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative ${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'medium' ? 'md:col-span-1' : ''
              }`}
            >
              <Link href={project.link}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <h2 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-sm text-white/60">{project.date}</p>
                      </div>
                    </div>
                    <p className="text-white/80">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
