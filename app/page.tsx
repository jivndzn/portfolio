"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  // Blur and brightness transformation based on scroll
  const blurValue = useTransform(scrollYProgress, [0, 0.1], [0, 8])
  const brightnessValue = useTransform(scrollYProgress, [0, 0.1], [0.7, 0.5])

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
    <main className="relative min-h-screen scroll-smooth">
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

      {/* Rest of the page content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="absolute top-1/3 left-0 right-0 flex justify-center space-x-4 sm:space-x-8 mb-12"
        >
          <Link
            href="/projects"
            className="text-white/90 hover:text-white text-lg sm:text-xl transition-all hover:scale-110 transform duration-300 drop-shadow-lg"
          >
            Projects
          </Link>
          <Link
            href="/aboutme"
            className="text-white/90 hover:text-white text-lg sm:text-xl transition-all hover:scale-110 transform duration-300 drop-shadow-lg"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="text-white/90 hover:text-white text-lg sm:text-xl transition-all hover:scale-110 transform duration-300 drop-shadow-lg"
          >
            Contact
          </Link>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white text-center mt-12 drop-shadow-lg"
        >
          jivndzn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-center max-w-md text-white/90 mt-8 drop-shadow-lg"
        >
          I am a computer engineering graduate from the Holy Angel University, and welcome to my portfolio!
        </motion.p>
      </div>
    </main>
  )
}