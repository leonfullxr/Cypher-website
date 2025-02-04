import Image from "next/image"
import { Shield, Lock, UserPlus } from "lucide-react"
import React from "react"
import { Ghost, UserX } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Secure chats with</span>{" "}
                  <span className="block text-blue-400 xl:inline">Cypher</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the power of end-to-end encryption. Cypher provides a secure, anonymous, 
                  and encrypted chat platform for all your communication needs.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://github.com/leonfullxr/Cypher"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                                 text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 
                                 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/docs"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                                 text-base font-medium rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 
                                 md:py-4 md:text-lg md:px-10"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-8 lg:w-[45%] flex items-center justify-center">
          <Image
            className="h-auto w-full object-contain"
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738325348/Cypher-file/bjs4s8nirrpv5kuaogsi.png"
            alt="Encrypted chat illustration"
            width={900}
            height={600}
          />
        </div>
      </div>

      {/* Feature section */}
      {/* Documentation Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Secure communication made simple
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Cypher provides top-notch security features to ensure your conversations remain private and protected.
            </p>
            </div>

            <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                
                {/* End-to-End Encryption */}
                <div className="relative">
                <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    {/* import { Lock } from 'lucide-react' */}
                    <Lock className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">End-to-End Encryption</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                    Your messages are encrypted on your device and can only be decrypted by the intended recipient.
                </dd>
                </div>

                {/* Anonymous Chats */}
                <div className="relative">
                <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    {/* import { Ghost } from 'lucide-react' for a “ghost-like” anonymity icon */}
                    <Ghost className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Anonymous Chats</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                    Create anonymous chat rooms without revealing your identity—ideal for sensitive discussions.
                </dd>
                </div>

                {/* Anonymous Registration */}
                <div className="relative">
                <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    {/* import { UserX } or another user-related icon */}
                    <UserX className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Anonymous Registration</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                    Sign up without providing personal details. We do not store personal info on our servers.
                </dd>
                </div>

                {/* No Metadata Storage */}
                <div className="relative">
                <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    {/* import { Shield } from 'lucide-react' */}
                    <Shield className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No Metadata Storage</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                    We strictly avoid storing user metadata, ensuring maximum privacy for all communications.
                </dd>
                </div>
            </dl>
            </div>
        </div>
        </div>

      {/* CTA section */}
      <div className="bg-blue-400">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start using Cypher today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join users who trust Cypher for their secure communication needs. It's free, it's secure, 
            and it's easy to use.
          </p>
          <a
            href="https://github.com/leonfullxr/Cypher"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent 
                       text-base font-medium rounded-md text-blue-400 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>

      {/* Meet the Team section */}
    <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            Meet the Team
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We’re two passionate developers
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dedicated to building secure, user-friendly experiences in Cypher.
        </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Developer 1 */}
        <div className="flex flex-col items-center text-center">
            {/* Use next/image if you like, or a regular <img> tag */}
            <img
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738327135/Cypher-file/qzcjzknuwsuj1nef9kvy.jpg" 
            alt="Developer One"
            className="w-40 h-40 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Leon Elliott Fuller</h3>
            <a
                href="https://github.com/leonfullxr"
                className="mt-2 text-blue-400 hover:underline"
            >
                GitHub Profile
            </a>
            <p className="mt-2 text-base text-gray-500">CEO, CTO</p>
        </div>

        {/* Developer 2 */}
        <div className="flex flex-col items-center text-center">
            <img
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1735816885/samples/upscale-face-1.jpg"
            alt="Developer Two"
            className="w-40 h-40 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Mariano Olmo Aguilar</h3>
            <a
                href="https://github.com/marianoaguilar"
                className="mt-2 text-blue-400 hover:underline"
            >
                GitHub Profile
            </a>
            <p className="mt-2 text-base text-gray-500">Backend Engineer</p>
        </div>

        {/* Developer 3 */}
        <div className="flex flex-col items-center text-center">
            <img
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738329463/Cypher-file/cf9kfntgnv1imwsk8vo3.jpg"
            alt="Developer Three"
            className="w-40 h-40 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Jose Lito</h3>
            <p className="mt-2 text-base text-gray-500">Reviewer</p>
        </div>

        {/* Developer 4 */}
        <div className="flex flex-col items-center text-center mt-8">
        <img
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738330768/Cypher-file/gzye6rrsnncz648auxzt.jpg"
            alt="Developer Four"
            className="w-40 h-40 rounded-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Mariano Tartaria Lopez</h3>
        <p className="mt-2 text-base text-gray-500">Reviewer</p>
        </div>
    </div>
    </div>
    </div>

    {/* Contact Section */}
    <div className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">
        Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-500">
        Have questions or feedback? Send us a message at{" "}
        <a 
            href="mailto:admin@leonfuller.space" 
            className="text-blue-400 hover:text-blue-500 underline"
        >
            admin@leonfuller.space
        </a>.
        </p>
    </div>
    </div>

    </div>
  )
}
