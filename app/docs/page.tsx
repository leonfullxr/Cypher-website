// app/docs/page.tsx

import Link from "next/link"

export default function Docs() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Documentation</h2>
            <p className="mt-4 text-lg text-gray-500">
              Learn how to use Cypher effectively and securely. Our documentation covers everything
              from getting started to advanced features.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {/* Getting Started */}
              <div>
                <Link href="/docs/getting-started">
                  <dt className="text-lg leading-6 font-medium text-gray-900 cursor-pointer hover:text-blue-500">
                    Getting Started
                  </dt>
                </Link>
                <dd className="mt-2 text-base text-gray-500">
                  Learn how to create an account, set up your first secure chat, and invite friends to join
                  you on Cypher.
                </dd>
              </div>

              {/* End-to-End Encryption */}
              <div>
                <Link href="/docs/end-to-end-encryption">
                  <dt className="text-lg leading-6 font-medium text-gray-900 cursor-pointer hover:text-blue-500">
                    End-to-End Encryption
                  </dt>
                </Link>
                <dd className="mt-2 text-base text-gray-500">
                  Understand how our end-to-end encryption works to keep your messages secure and private.
                </dd>
              </div>

              {/* Anonymous Chats */}
              <div>
                <Link href="/docs/anonymous-chats">
                  <dt className="text-lg leading-6 font-medium text-gray-900 cursor-pointer hover:text-blue-500">
                    Anonymous Chats
                  </dt>
                </Link>
                <dd className="mt-2 text-base text-gray-500">
                  Discover how to create and participate in anonymous chat rooms without compromising your
                  identity.
                </dd>
              </div>

              {/* Setting up MFA */}
              <div>
                <Link href="/docs/setting-up-mfa">
                  <dt className="text-lg leading-6 font-medium text-gray-900 cursor-pointer hover:text-blue-500">
                    Setting up MFA
                  </dt>
                </Link>
                <dd className="mt-2 text-base text-gray-500">
                  Learn how to set up MFA on your account for enhanced security.
                </dd>
              </div>

              {/* Mobile Responsiveness */}
              <div>
                <Link href="/docs/mobile-responsiveness">
                  <dt className="text-lg leading-6 font-medium text-gray-900 cursor-pointer hover:text-blue-500">
                    Mobile Responsiveness
                  </dt>
                </Link>
                <dd className="mt-2 text-base text-gray-500">
                  See how Cypher adapts seamlessly to any screen size, from mobile phones to desktops.
                </dd>
              </div>

                {/* Whitepaper / Architecture & Workflows */}
                <div>
                    <Link href="/docs/architecture-and-workflows">
                        <dt className="text-lg leading-6 font-medium text-gray-900 cursor-pointer hover:text-blue-500">
                        Whitepaper / Architecture &amp; Workflows
                        </dt>
                    </Link>
                    <dd className="mt-2 text-base text-gray-500">
                        Dive into Cypher's system architecture, data workflows, and security considerations.
                    </dd>
                </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
