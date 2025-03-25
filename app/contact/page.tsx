'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Twitter, Mail, Github, Facebook, Linkedin, Phone } from 'lucide-react'

export default function Contact() {
  const contacts = [
    {
      platform: 'Twitter',
      value: '@jivndzn',
      icon: <Twitter className="h-6 w-6" />,
      href: 'https://twitter.com/jivndzn'
    },
    {
      platform: 'Email',
      value: 'jivandizon@gmail.com',
      icon: <Mail className="h-6 w-6" />,
      href: 'mailto:jivandizon@gmail.com'
    },
    {
      platform: 'Github',
      value: 'jivndzn',
      icon: <Github className="h-6 w-6" />,
      href: 'https://github.com/jivndzn'
    },
    {
      platform: 'Facebook',
      value: 'jid4th',
      icon: <Facebook className="h-6 w-6" />,
      href: 'https://www.facebook.com/jid4th/'
    },
    {
      platform: 'LinkedIn',
      value: 'john-ivan-dizon',
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://www.linkedin.com/in/john-ivan-dizon-735aaa258/'
    },
    {
      platform: 'Phone',
      value: '+63905-199-3081',
      icon: <Phone className="h-6 w-6" />,
      href: 'tel:+639051993081'
    }
  ]

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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-8"
        >
          <Link 
            href="/" 
            className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={contact.href}>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative flex flex-col items-center gap-4 p-8 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="p-3 rounded-full bg-white/10">
                      {contact.icon}
                    </div>
                    <div className="text-center">
                      <div className="text-white/60 text-sm">{contact.platform}</div>
                      <div className="text-white font-medium mt-1">{contact.value}</div>
                    </div>
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

