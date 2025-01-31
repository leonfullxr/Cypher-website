import Link from "next/link"
import { Lock } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Cypher</span>
              <Lock className="h-8 w-auto text-blue-400" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="/docs" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Documentation
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="https://github.com/leonfullxr/Cypher"
              className="inline-block bg-blue-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
