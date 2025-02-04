export default function SettingUpMFA() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Setting Up Multi-Factor Authentication</h1>
        <p className="text-lg text-gray-500 mb-6">
          Multi-Factor Authentication (MFA) adds an extra layer of protection by requiring multiple
          forms of verification. Watch this video to see how it works, or read the summary below.
        </p>

        <div className="relative pb-[56.25%] h-0 mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/geXBO4Sf9sE"
            title="Cypher MFA Setup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-4">Steps to Enable MFA</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-2">
          <li>Go to your account settings.</li>
          <li>Locate the “Security” or “MFA” section.</li>
          <li>Enable MFA and link your preferred authenticator app (e.g., Google Authenticator).</li>
          <li>Scan the QR code with your authenticator app.</li>
          <li>Enter the generated code to confirm setup.</li>
        </ol>
      </div>
    </div>
  )
}
