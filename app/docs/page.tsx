export default function Docs() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Documentation</h2>
              <p className="mt-4 text-lg text-gray-500">
                Learn how to use Cypher effectively and securely. Our documentation covers everything from getting started
                to advanced features.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Getting Started</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Learn how to create an account, set up your first secure chat, and invite friends to join you on
                    Cypher.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">End-to-End Encryption</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Understand how our end-to-end encryption works to keep your messages secure and private.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Anonymous Chats</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Discover how to create and participate in anonymous chat rooms without compromising your identity.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Setting up MFA</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Learn how to set up MFA on your account for enhanced security.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  