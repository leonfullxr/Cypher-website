// app/docs/mobile-responsiveness/page.tsx

export default function MobileResponsiveness() {
    return (
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Mobile Responsiveness</h1>
          <p className="text-lg text-gray-500 mb-6">
            Learn how Cypher adapts to any screen size, ensuring a smooth user experience whether you're on
            mobile, tablet, or desktop.
          </p>
  
          {/* Embedded YouTube video with a responsive 16:9 aspect ratio */}
          <div className="relative pb-[56.25%] h-0 mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_2MsXbxJsCE"
              title="Cypher Mobile Responsiveness Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
  
          <p className="text-gray-600">
            In this video, we showcase how the Cypher interface adapts to smaller screens, preserving
            essential functionality and secure communications. Even on mobile, your conversations remain
            end-to-end encrypted and easy to access on the go.
          </p>
        </div>
      </div>
    )
  }
  