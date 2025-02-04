export default function GettingStarted() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Getting Started with Cypher</h1>
        <p className="text-lg text-gray-500 mb-6">
          Welcome to Cypher! In this video, we'll walk you through creating your account, setting up your
          very first secure chat, and inviting friends to join your conversation. 
          Below the video, you'll find a written step-by-step guide if you prefer text-based instructions.
        </p>

        {/* YouTube Embed */}
        <div className="relative pb-[56.25%] h-0 mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/iBy1EfT4Mdk"
            title="Getting Started with Cypher"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Text-based instructions */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">Step-by-Step Guide</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-2">
          <li>Create an account by visiting our sign-up page.</li>
          <li>Verify your email address to secure your account.</li>
          <li>Set up your first secure chat by clicking “Explore users” and select a user.</li>
          <li>Start chatting securely with end-to-end encryption enabled by default!</li>
        </ol>
      </div>
    </div>
  )
}
