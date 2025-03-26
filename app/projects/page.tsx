"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { useState, useRef } from "react"

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
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])

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
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <motion.div style={{ opacity }} className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Misty forest background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </motion.div>

      {/* Content */}
      <div ref={containerRef} className="relative z-10 pt-20 pb-32">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-8 left-8 z-50"
        >
          <Link
            href="/"
            className="text-white/90 hover:text-white flex items-center gap-2 transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">My Projects</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A showcase of my work, from academic projects to personal explorations.
          </p>
        </motion.div>

        {/* Projects Section */}
        <section className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              Project Portfolio
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                {/* Project Card */}
                <div className="relative">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${getProjectTypeColor(project.type)} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000`}
                  ></div>
                  <div className="relative bg-black/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/5">
                    {/* Project Header */}
                    <div className="p-8 pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 mb-2 inline-block">
                            {project.subtitle}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                        </div>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                        >
                          <Github className="h-5 w-5" />
                          <span>GitHub</span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Image Gallery */}
                      <div className="relative aspect-video bg-black/30 rounded-lg overflow-hidden border border-white/10">
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
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => handleImageChange(project.title, imgIndex)}
                                className={`w-3 h-3 rounded-full transition-colors ${
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
                          <h3 className="text-white/70 text-sm mb-3 inline-block relative">
                            Technologies Used
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech} 
                                className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors"
                              >
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
        </section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-32 text-center text-white/50 text-sm"
        >
          <p>© {new Date().getFullYear()} John Ivan Dizon. All rights reserved.</p>
        </motion.div>
      </div>
    </main>
  )
}