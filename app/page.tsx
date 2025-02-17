'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Misty forest background"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-1/3 left-0 right-0 flex justify-center space-x-8 mb-12"
        >
          <Link 
            href="/projects" 
            className="text-white/90 hover:text-white text-xl transition-colors hover:scale-110 transform duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="text-white/90 hover:text-white text-xl transition-colors hover:scale-110 transform duration-200"
          >
            Contact
          </Link>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-white text-center mt-12"
        >
          jivndzn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center max-w-md text-white/90 mt-8"
        >
          I&apos;m a software developer for{' '}
          <Link 
            href="https://scrubbed.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:underline"
          >
            scrubbed.net
          </Link>{' '}
          and currently learning game developing &apos;cause I love games.
        </motion.p>
      </div>
    </main>
  )
}
