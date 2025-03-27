"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// Centralized configuration for better maintainability
const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/john-ivan-dizon-735aaa258",
  github: "https://github.com/jivndzn",
  email: "mailto:jivandizon@gmail.com"
}

// Animation configurations extracted for reusability
const ANIMATION_CONFIGS = {
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
  }
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleExternalLink = (url: string) => {
    if (isMounted) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Professional background"
          fill
          quality={90}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <motion.nav 
          {...ANIMATION_CONFIGS.fadeInDown}
          className="flex justify-center items-center py-10"
        >
          <div className="flex space-x-16">
            {[
              { href: "/aboutme", label: "About Me" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" }
            ].map(({ href, label }) => (
              <Link key={href} href={href}>
                <span className="text-white/90 hover:text-white text-lg transition-colors">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-16 py-10">
          {/* Profile Image */}
          <motion.div
            {...ANIMATION_CONFIGS.fadeInLeft}
            className="md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10"
          >
            <div className="relative">
              <Image 
                src="/main.png" 
                alt="Ivan Dizon Professional Headshot" 
                width={1000} 
                height={1000} 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto rounded-lg shadow-lg" 
                priority 
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            {...ANIMATION_CONFIGS.fadeInRight}
            className="md:w-1/2 mt-10 md:mt-0 space-y-4 text-left"
          >
            {[
              { 
                component: "h2", 
                text: "Hello!", 
                className: "text-xl text-white/80",
                delay: 0.4 
              },
              { 
                component: "h1", 
                text: "I am John Ivan Dizon", 
                className: "text-5xl font-bold text-white",
                delay: 0.5 
              },
              { 
                component: "p", 
                text: "A Computer Engineer Graduate\nand Full Stack Developer", 
                className: "text-xl text-white/90",
                delay: 0.6 
              },
              { 
                component: "p", 
                text: "Welcome to my Portfolio!", 
                className: "text-xl text-white/90 pt-6",
                delay: 0.7 
              }
            ].map(({ component: Component, text, className, delay }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay }}
              >
                {React.createElement(Component, { className }, text)}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pb-8"
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-6">
            {[
              { 
                icon: Linkedin, 
                url: SOCIAL_LINKS.linkedin, 
                label: "LinkedIn Profile" 
              },
              { 
                icon: Github, 
                url: SOCIAL_LINKS.github, 
                label: "GitHub Profile" 
              },
              { 
                icon: Mail, 
                url: SOCIAL_LINKS.email, 
                label: "Email Contact" 
              }
            ].map(({ icon: Icon, url, label }) => (
              <button
                key={label}
                onClick={() => handleExternalLink(url)}
                aria-label={label}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Icon className="h-6 w-6" />
              </button>
            ))}
          </div>

          {/* Separator Line */}
          <div className="w-full max-w-md mx-auto h-px bg-white/20 mb-6"></div>

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} Ivan Dizon. All Rights Reserved.</p>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}