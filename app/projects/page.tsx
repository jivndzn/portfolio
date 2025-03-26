"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"
import { useState } from "react"

interface Project {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  github: string
  images: string[]
  type: "capstone" | "school" | "personal"
}

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({})

  const projects: Project[] = [
    {
      title: "AI-RAMS",
      subtitle: "Thesis Project (Capstone)",
      description:
        "AI-RAMS (Resourceful AI-Integrated Management System) is an intelligent rainwater monitoring and analysis system designed to optimize water usage by combining rainwater harvesting with real-time pH monitoring. The system ensures water quality and efficiency for domestic, agricultural, and industrial applications using AI-driven insights.",
      technologies: ["Vite", "React", "Supabase", "Node.js"],
      github: "https://github.com/jivndzn/ai-rams",
      images: ["/ai-rams1.png", "/ai-rams2.png"],
      type: "capstone",
    },
    {
      title: "Tourism Site: Apalit",
      subtitle: "School Project",
      description:
        "It's a travel agency landing page. Here all functionality and animation build with css like navbar, input validation design, card flip, etc.",
      technologies: ["HTML5", "CSS3", "Figma", "Tailwindcss"],
      github: "https://github.com/jivndzn/TourismApalit",
      images: ["/apalit1.png", "/apalit2.png"],
      type: "school",
    },
    {
      title: "PyGame Platformer",
      subtitle: "Personal Project",
      description: "Platformer game that I explored using Python Pygame",
      technologies: ["Python"],
      github: "https://github.com/jivndzn/platformer-game",
      images: ["/pygame1.png", "/pygame2.png"],
      type: "personal",
    },
  ]

  const handleImageChange = (projectTitle: string, index: number) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectTitle]: index,
    }))
  }

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "capstone":
        return "from-blue-600 to-purple-600"
      case "school":
        return "from-green-600 to-teal-600"
      case "personal":
        return "from-orange-600 to-red-600"
      default:
        return "from-gray-600 to-gray-800"
    }
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <Image src="/background.jpg" alt="Misty forest background" fill className="object-cover object-center" priority />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 px-4 py-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/" className="text-white/90 hover:text-white flex items-center gap-2 transition-colors">
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
            <p className="text-white/60">A showcase of my work, from academic projects to personal explorations.</p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="relative"
              >
                {/* Project Card */}
                <div className="relative">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${getProjectTypeColor(project.type)} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000`}
                  ></div>
                  <div className="relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden">
                    {/* Project Header */}
                    <div className="p-6 md:p-8 pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 mb-2 inline-block">
                            {project.subtitle}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                          >
                            <Github className="h-5 w-5" />
                            <span className="hidden sm:inline">GitHub</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                      {/* Image Gallery */}
                      <div className="relative aspect-video bg-black/30 rounded-lg overflow-hidden">
                        {project.images.map((image, imgIndex) => (
                          <motion.div
                            key={image}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity:
                                activeImageIndex[project.title] === imgIndex ||
                                (activeImageIndex[project.title] === undefined && imgIndex === 0)
                                  ? 1
                                  : 0,
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Screenshot of ${project.title}`}
                              fill
                              className="object-cover object-top"
                            />
                          </motion.div>
                        ))}

                        {/* Image Navigation */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => handleImageChange(project.title, imgIndex)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  activeImageIndex[project.title] === imgIndex ||
                                  (activeImageIndex[project.title] === undefined && imgIndex === 0)
                                    ? "bg-white"
                                    : "bg-white/30"
                                }`}
                                aria-label={`View image ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="flex flex-col">
                        <p className="text-white/80 mb-6">{project.description}</p>

                        <div className="mt-auto">
                          <h3 className="text-white/70 text-sm mb-2">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

