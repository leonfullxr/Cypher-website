// app/docs/architecture-and-workflows/page.tsx

export default function ArchitectureAndWorkflows() {
    return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Encrypted Chat Application Design and Workflow
        </h1>
  
        {/* System Architecture */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          System Architecture
        </h2>
  
        <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
          <li>
            <strong>Client</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Generates and manages <strong>RSA key pairs</strong> for encryption and decryption.</li>
              <li>Handles user authentication and session tokens.</li>
              <li>Encrypts messages using the recipient’s public key before sending them.</li>
            </ul>
          </li>
          <li>
            <strong>Server</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Acts as a <strong>relay</strong> for encrypted messages.</li>
              <li>Stores and retrieves <strong>public/private keys</strong> and <strong>encrypted messages</strong> from the database.</li>
              <li>Facilitates secure key exchange between users.</li>
            </ul>
          </li>
          <li>
            <strong>Database</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Stores <strong>encrypted private keys</strong> for retrieval, allowing multi-device access.</li>
              <li>Stores <strong>encrypted messages</strong> to ensure privacy.</li>
              <li>Uses encryption at rest and access control mechanisms.</li>
            </ul>
          </li>
        </ol>
        <div className="mb-8">
            <img 
                src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738322559/Cypher-file/pqxj8yl4kxkecbpnsm9r.png"
                alt="System Architecture Diagram"
                className="w-full h-auto rounded-md border"
            />
        </div>

        <div className="mb-8">
            <img 
                src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738322559/Cypher-file/zukhwergsxms6jpcjxjq.png"
                alt="System Architecture Design"
                className="w-full h-auto rounded-md border"
            />
        </div>
  
        {/* Workflows */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Workflows
        </h2>
  
        {/* User Registration */}
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">User Registration</h3>
        <ol className="list-decimal list-inside text-gray-700 ml-5 mb-4 space-y-2">
          <li>The user generates an RSA key pair locally.</li>
          <li>The public key is sent to the server.</li>
          <li>The private key is encrypted with the master password and uploaded to the server for recovery.</li>
        </ol>
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738322557/Cypher-file/qgqy1oupf1jxcmloywas.png" 
            alt="User Registration Workflow (placeholder)" 
            className="w-full h-auto rounded-md border"
          />
        </div>
  
        {/* Sending a Message */}
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Sending a Message</h3>
        <ol className="list-decimal list-inside text-gray-700 ml-5 mb-4 space-y-2">
          <li>The sender requests the recipient’s public key from the server.</li>
          <li>The server retrieves the recipient's public key from MongoDB.</li>
          <li>The server returns the recipient's public key to the sender.</li>
          <li>The sender encrypts the message using the recipient’s public key.</li>
          <li>The encrypted message is sent to the server via a Socket connection.</li>
          <li>The server stores the encrypted message in MongoDB.</li>
        </ol>
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738322558/Cypher-file/n0yhf49dhpix2vgvxaif.png" 
            alt="Sending a Message Workflow (placeholder)" 
            className="w-full h-auto rounded-md border"
          />
        </div>
  
        {/* Receiving a Message */}
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Receiving a Message</h3>
        <ol className="list-decimal list-inside text-gray-700 ml-5 mb-4 space-y-2">
          <li>The recipient requests the encrypted message from the server.</li>
          <li>The server fetches the encrypted message from MongoDB.</li>
          <li>The server sends the encrypted message to the recipient.</li>
          <li>The recipient decrypts the message locally using their private key.</li>
        </ol>
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738322557/Cypher-file/syodg6dyrngvmihwwwpt.png" 
            alt="Receiving a Message Workflow (placeholder)" 
            className="w-full h-auto rounded-md border"
          />
        </div>
  
        {/* Multi-Device Support */}
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Multi-Device Support</h3>
        <ol className="list-decimal list-inside text-gray-700 ml-5 mb-4 space-y-2">
          <li>The user logs in with their master password.</li>
          <li>The client forwards the payload to the server for verification.</li>
          <li>The server verifies the user’s login.</li>
          <li>The server retrieves the encrypted private key from MongoDB.</li>
          <li>The user decrypts their private key locally using the derived key.</li>
        </ol>
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/du0ukbkvu/image/upload/v1738322557/Cypher-file/yosjxa8pgj44vhs0dbwx.png" 
            alt="Multi-Device Support Workflow (placeholder)" 
            className="w-full h-auto rounded-md border"
          />
        </div>
  
        {/* Vulnerabilities & Security Considerations */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Vulnerabilities &amp; Security Considerations
        </h2>
  
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Potential Vulnerabilities</h3>
        <ul className="list-disc list-inside text-gray-700 ml-5 space-y-1">
          <li>Replay Attacks without session expiration.</li>
          <li>Password Recovery risk if the master password is compromised.</li>
        </ul>
  
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Potential Improvements</h3>
        <ol className="list-decimal list-inside text-gray-700 ml-5 mb-6 space-y-2">
          <li>
            <strong>Perfect Forward Secrecy (PFS)</strong> via the Signal Protocol to protect past messages even if keys are compromised.
          </li>
          <li>
            <strong>Zero-Knowledge Proof Authentication</strong> to ensure passwords are never revealed to the server.
          </li>
        </ol>
  
        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conclusion</h2>
        <p className="text-gray-700">
          This project provides a <strong>secure and privacy-focused</strong> messaging solution 
          with <strong>end-to-end encryption</strong>. Future improvements will focus on enhancing 
          security, usability, adding a TOR relay for IP anonymity, and robust password recovery.
        </p>
      </div>
    )
  }
  