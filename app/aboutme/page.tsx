"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Code, Database, Globe, Layers, Server, GraduationCap, Building, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

export default function AboutMe() {
  const { scrollYProgress } = useScroll()
  const blurValue = useTransform(scrollYProgress, [0, 0.1], [0, 8])
  const brightnessValue = useTransform(scrollYProgress, [0, 0.1], [0.7, 0.5])

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
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Background Image with Scroll Effects */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-0 h-screen"
        style={{
          filter: `blur(${blurValue.get()}px) brightness(${brightnessValue.get()})`,
        }}
      >
        <Image 
          src="/background.jpg" 
          alt="Misty forest background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
      </motion.div>

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

          {/* About Me Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">About Me</h2>
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 text-white drop-shadow-lg">
                <p className="mb-4">
                  Hello! I'm a passionate computer engineering graduate with a keen interest in building innovative
                  solutions. My journey in tech began during my university years where I developed a strong foundation
                  in both hardware and software engineering principles.
                </p>
                <p className="mb-4">
                  I specialize in full-stack development with a focus on creating responsive, user-friendly
                  applications. My approach combines technical expertise with creative problem-solving to deliver
                  solutions that not only work flawlessly but also provide exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or playing video games to recharge my creative batteries.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">Education</h2>

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-white drop-shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full shrink-0 mt-1">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                        <div className="flex items-center text-white/80 mb-1">
                          <Building className="w-4 h-4 mr-2" />
                          <span>
                            {item.institution}, {item.location}
                          </span>
                        </div>
                        <div className="flex items-center text-white/80 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <p className="text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">Work Experience</h2>

              <div className="space-y-8">
                {workExperiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-white drop-shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full shrink-0 mt-1">
                        <Building className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{experience.position}</h3>
                        <div className="flex items-center text-white/80 mb-1">
                          <Building className="w-4 h-4 mr-2" />
                          <span>
                            {experience.company}, {experience.location}
                          </span>
                        </div>
                        <div className="flex items-center text-white/80 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{experience.period}</span>
                        </div>
                        <p className="text-white/90">{experience.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">Tech Stack</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                    className={`bg-black/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 drop-shadow-lg h-full
                      ${index === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-xs sm:mx-auto" : ""}`}
                  >
                    <div className="text-white mb-3">{tech.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-white/80 text-sm">{tech.skills}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  )
}

