"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    document.documentElement.style.scrollBehavior = "smooth"
    document.body.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
      document.body.style.scrollBehavior = ""
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-green-950">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Misty forest background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 md:px-16 py-10 max-w-6xl mx-auto">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-between items-center mb-20"
        >
          <div className="text-2xl font-bold text-white/90 tracking-wider">Ivan Dizon</div>
          <div className="flex space-x-6">
            <Link
              href="/aboutme"
              className="text-white/80 hover:text-white text-base tracking-wide transition-all hover:scale-105 transform duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-white/80 hover:text-white text-base tracking-wide transition-all hover:scale-105 transform duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white text-base tracking-wide transition-all hover:scale-105 transform duration-300"
            >
              Contact
            </Link>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between flex-grow">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="md:w-1/2 mb-10 md:mb-0 space-y-4"
          >
            <h2 className="text-xl md:text-2xl text-white/70 tracking-wide">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white to-green-300">
              Ivan Dizon
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed tracking-wide">
              Computer Engineer Graduate
              <br />
              Full Stack Developer
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 pt-6">
              <Link
                href="https://github.com/jivndzn"
                target="_blank"
                className="text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <Github size={28} />
              </Link>
              <Link
                href="https://linkedin.com/in/jivndzn"
                target="_blank"
                className="text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={28} />
              </Link>
              <Link
                href="https://twitter.com/jivndzn"
                target="_blank"
                className="text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <Twitter size={28} />
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Image with Circular Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative md:w-1/2 flex justify-center md:justify-end"
          >
            {/* Larger Circular Background with Gradient and Animation */}
            <div
              className="absolute right-0 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full 
              bg-gradient-to-br from-gray-500/30 to-green-500/20 backdrop-blur-sm
              animate-pulse-slow"
            ></div>

            {/* Secondary Glow Effect */}
            <div
              className="absolute right-4 top-4 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full 
              bg-blue-400/10 blur-xl"
            ></div>

            {/* Profile Image - Larger and with Enhanced Styling */}
            <div className="relative z-10 overflow-hidden">
              <Image
                src="/main.png"
                alt="Ivan Dizon"
                width={450}
                height={500}
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500 
                  drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-auto text-center text-white/40 text-sm py-6 tracking-wide"
        >
          <p>© {new Date().getFullYear()} Ivan Dizon. All Rights Reserved.</p>
        </motion.div>
      </div>
    </main>
  )
}

