"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Twitter, Mail, Github, Facebook, Linkedin, Phone, ExternalLink } from "lucide-react"
import { useRef } from "react"

interface Colleague {
  name: string
  image: string
  linkedin: string
  github: string
}

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])

  const contacts = [
    {
      platform: "Twitter",
      value: "@jivndzn",
      icon: <Twitter className="h-6 w-6" />,
      href: "https://twitter.com/jivndzn",
      color: "from-blue-400 to-blue-600",
    },
    {
      platform: "Email",
      value: "jivandizon@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:jivandizon@gmail.com",
      color: "from-red-400 to-red-600",
    },
    {
      platform: "Github",
      value: "jivndzn",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/jivndzn",
      color: "from-purple-400 to-purple-600",
    },
    {
      platform: "Facebook",
      value: "jid4th",
      icon: <Facebook className="h-6 w-6" />,
      href: "https://www.facebook.com/jid4th/",
      color: "from-blue-500 to-blue-700",
    },
    {
      platform: "LinkedIn",
      value: "john-ivan-dizon",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/john-ivan-dizon-735aaa258/",
      color: "from-blue-600 to-blue-800",
    },
    {
      platform: "Phone",
      value: "+63905-199-3081",
      icon: <Phone className="h-6 w-6" />,
      href: "tel:+639051993081",
      color: "from-green-400 to-green-600",
    },
  ]

  const colleagues: Colleague[] = [
    {
      name: "Gian Cabigiting",
      image: "/gian.jpg",
      linkedin: "https://www.linkedin.com/in/gian-cabigting-3547bb267/?originalSubdomain=ph",
      github: "https://github.com/naigggs",
    },
    {
      name: "Justin Miguel Reyes",
      image: "/jeiem.png",
      linkedin: "https://www.linkedin.com/in/justin-miguel-reyes-175323327/",
      github: "https://github.com/jei3m",
    },
    {
      name: "Arwin Miclat",
      image: "/arwin.jpg",
      linkedin: "https://www.linkedin.com/in/arwin-miclat/",
      github: "https://github.com/Rejhinald",
    },
    {
      name: "Marc Beltran",
      image: "/marc.jpeg",
      linkedin: "https://ph.linkedin.com/in/marc-joshua-beltran-787179338",
      github: "https://github.com/Sh10o",
    },
    {
      name: "Brienne David",
      image: "/yen.jpeg",
      linkedin: "https://www.linkedin.com/in/brienne-khayla-david-92b80033a/",
      github: "https://github.com/briedvd",
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Get in Touch</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Methods Section */}
        <section className="max-w-7xl mx-auto px-4 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              Connect With Me
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.platform}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href={contact.href} target="_blank" rel="noopener noreferrer">
                  <div className="relative group h-full">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300`}
                    ></div>
                    <div className="relative h-full flex items-center gap-6 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/5">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${contact.color} bg-opacity-20 text-white`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">{contact.platform}</div>
                        <div className="text-white font-medium flex items-center gap-2 group-hover:text-white/90">
                          {contact.value}
                          <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Friends and Colleagues Section */}
        <section className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white inline-block relative">
              Friends and Colleagues
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              Talented professionals I've had the pleasure to work with throughout my journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {colleagues.map((colleague, index) => (
              <motion.div
                key={colleague.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div className="relative group mb-4">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={colleague.image || "/placeholder.svg"}
                      alt={`Photo of ${colleague.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 text-center w-full border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">{colleague.name}</h3>

                  <div className="flex justify-center space-x-4">
                    <Link
                      href={colleague.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-blue-400 transition-colors"
                      aria-label={`${colleague.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href={colleague.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-purple-400 transition-colors"
                      aria-label={`${colleague.name}'s GitHub profile`}
                    >
                      <Github className="h-5 w-5" />
                    </Link>
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

