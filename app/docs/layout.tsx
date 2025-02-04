// app/docs/layout.tsx
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import type { ReactNode } from "react"

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [showButton, setShowButton] = useState(false)

  // Show "Back to top" button once user scrolls beyond 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smoothly scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation - sticky or fixed at top */}
      <nav className="sticky top-0 bg-white border-b z-10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo or Title */}
          <Link href="/docs">
            <h1 className="text-lg font-semibold text-gray-900 hover:text-blue-500 cursor-pointer">
              Documentation
            </h1>
          </Link>

          {/* Simple nav links to popular docs pages */}
          <div className="space-x-4 text-gray-600">
            <Link href="/docs/getting-started" className="hover:text-blue-500">
              Getting Started
            </Link>
            <Link href="/docs/end-to-end-encryption" className="hover:text-blue-500">
              Encryption
            </Link>
            <Link href="/docs/anonymous-chats" className="hover:text-blue-500">
              Anonymous
            </Link>
            <Link href="/docs/setting-up-mfa" className="hover:text-blue-500">
              MFA
            </Link>
            <Link href="/docs/mobile-responsiveness" className="hover:text-blue-500">
              Mobile
            </Link>
            <Link href="/docs/architecture-and-workflows" className="hover:text-blue-500">
                Whitepaper
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <main className="flex-grow">{children}</main>

      {/* Back to Top Button (fixed at bottom-right) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-400 text-white 
                     rounded-full shadow-md hover:bg-blue-500 transition-colors"
        >
          ↑ Top
        </button>
      )}
    </div>
  )
}
