"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Code, Database, Globe, Layers, Server, GraduationCap, Building, Calendar, ExternalLink } from "lucide-react"
import { useRef } from "react"

export default function AboutMe() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])

  const techStack = [
    { icon: <Globe className="w-8 h-8" />, name: "Frontend", skills: "Vue, Next.js, Tailwind CSS" },
    { icon: <Server className="w-8 h-8" />, name: "Backend", skills: "Node.js, Python" },
    { icon: <Database className="w-8 h-8" />, name: "Database", skills: "MySQL, PostgreSQL, Supabase" },
    { icon: <Layers className="w-8 h-8" />, name: "UI/UX", skills: "Figma, Framer Motion" },
    { icon: <Code className="w-8 h-8" />, name: "Languages", skills: "JavaScript, TypeScript, Python" },
  ]

  const workExperiences = [
    {
      position: "Software Engineer Intern",
      company: "SCRUBBED.NET GLOBAL INC.",
      location: "City, Country",
      period: "November 2024 - January 2025",
      description: "Developed frontend interfaces using Vue.js and integrated RESTful APIs with backend systems. Responsibilities included working on a document management GUI and an API documentation database. Tasks involved conducting usability testing, resolving frontend issues, and collaborating with teams to ensure system integration.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Holy Angel University",
      location: "Angeles City, Pampanga, Philippines",
      period: "2021 - 2025",
      description: "Bachelor's degree in Computer Engineering with a focus software engineering principles.",
    },
    {
      degree: "Senior High School: Humanities and Social Sciences",
      institution: "University of the Assumption",
      location: "San Fernando, Pampanga, Philippines",
      period: "2017 - 2019",
      description: "Graduated with High Honors in the Humanities and Social Sciences strand.",
    },
    {
      degree: "Grade School until Junior High School",
      institution: "University of the Assumption",
      location: "San Fernando, Pampanga, Philippines",
      period: "2007 - 2017",
      description: "",
    },
  ]

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">About Me</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Get to know my journey, skills, and professional background
          </p>
        </motion.div>

        {/* About Me Section */}
        <section className="max-w-7xl mx-auto px-4 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              My Story
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-8 border border-white/5">
              <p className="text-white/80 mb-4">
                Hello! I'm a passionate computer engineering graduate with a keen interest in building innovative
                solutions. My journey in tech began during my university years where I developed a strong foundation
                in both hardware and software engineering principles.
              </p>
              <p className="text-white/80 mb-4">
                I specialize in full-stack development with a focus on creating responsive, user-friendly
                applications. My approach combines technical expertise with creative problem-solving to deliver
                solutions that not only work flawlessly but also provide exceptional user experiences.
              </p>
              <p className="text-white/80">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or playing video games to recharge my creative batteries.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="max-w-7xl mx-auto px-4 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              Education
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full shrink-0 mt-1">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.degree}</h3>
                      <div className="flex items-center text-white/70 mb-1">
                        <Building className="w-4 h-4 mr-2" />
                        <span>
                          {item.institution}, {item.location}
                        </span>
                      </div>
                      <div className="flex items-center text-white/70 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                      {item.description && <p className="text-white/80">{item.description}</p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="max-w-7xl mx-auto px-4 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              Work Experience
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full shrink-0 mt-1">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{experience.position}</h3>
                      <div className="flex items-center text-white/70 mb-1">
                        <Building className="w-4 h-4 mr-2" />
                        <span>
                          {experience.company}, {experience.location}
                        </span>
                      </div>
                      <div className="flex items-center text-white/70 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                      <p className="text-white/80">{experience.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              Tech Stack
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/5 h-full flex flex-col items-center text-center">
                  <div className="text-white mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-white/70 text-sm">{tech.skills}</p>
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