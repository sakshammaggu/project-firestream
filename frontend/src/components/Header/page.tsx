'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/90 shadow-lg border-b border-gray-200 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-sm">
          FireStream
        </Link>

        <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                    {link.label}
                </Link>
            ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 border-t border-gray-200 px-4 py-4 space-y-2 shadow-md"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-gray-800 hover:text-orange-600 font-medium">
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  )
}