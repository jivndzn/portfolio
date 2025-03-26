"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Twitter, Mail, Github, Facebook, Linkedin, Phone } from "lucide-react"

interface Colleague {
  name: string
  image: string
  linkedin: string
  github: string
}

export default function Contact() {
  const contacts = [
    {
      platform: "Twitter",
      value: "@jivndzn",
      icon: <Twitter className="h-6 w-6" />,
      href: "https://twitter.com/jivndzn",
    },
    {
      platform: "Email",
      value: "jivandizon@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:jivandizon@gmail.com",
    },
    {
      platform: "Github",
      value: "jivndzn",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/jivndzn",
    },
    {
      platform: "Facebook",
      value: "jid4th",
      icon: <Facebook className="h-6 w-6" />,
      href: "https://www.facebook.com/jid4th/",
    },
    {
      platform: "LinkedIn",
      value: "john-ivan-dizon",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/john-ivan-dizon-735aaa258/",
    },
    {
      platform: "Phone",
      value: "+63905-199-3081",
      icon: <Phone className="h-6 w-6" />,
      href: "tel:+639051993081",
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
      github: "https://ph.linkedin.com/in/marc-joshua-beltran-787179338",
    },
    {
      name: "Marc Beltran",
      image: "/marc.jpeg",
      linkedin: "https://github.com/Rejhinald",
      github: "https://github.com/Sh10o",
    },
    {
      name: "Brienne David",
      image: "/yen.jpeg",
      linkedin: "https://www.linkedin.com/in/brienne-khayla-david-92b80033a/",
      github: "https://github.com/briedvd",
    },
    {
      name: "Jerald Bagsic",
      image: "/rald.jpeg",
      linkedin: "https://www.linkedin.com/in/jeraldfrancisbagsic/",
      github: "https://github.com/Jerald011003",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image src="/background.jpg" alt="Misty forest background" fill className="object-cover object-center" priority />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-8"
        >
          <Link href="/" className="text-white/90 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Connect With Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-20">
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
                    <div className="p-3 rounded-full bg-white/10">{contact.icon}</div>
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

        {/* Friends and Colleagues Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-6xl"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Friends and Colleagues</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleagues.map((colleague, index) => (
              <motion.div
                key={colleague.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative group mb-2">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src={colleague.image || "/placeholder.svg"}
                      alt={`Photo of ${colleague.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-md rounded-xl p-10 text-center w-full">
                  <h3 className="text-xl font-semibold text-white mb-3">{colleague.name}</h3>

                  <div className="flex justify-center space-x-4">
                    <Link
                      href={colleague.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href={colleague.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

