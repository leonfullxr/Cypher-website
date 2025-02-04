// app/docs/end-to-end-encryption/page.tsx

export default function EndToEndEncryption() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">End-to-End Encryption (E2EE)</h1>

      <p className="text-lg text-gray-500 mb-6">
        In Cypher, messages are encrypted on your device using the recipient’s public key, and can only 
        be decrypted by the recipient’s corresponding private key. This ensures that only you and your 
        conversation partners can view the contents of your messages.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Key Points</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
        <li>Public and private key pairs are generated securely on your device.</li>
        <li>Your private key never leaves your device, ensuring confidentiality.</li>
        <li>Even Cypher’s own servers can’t read your messages.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Basic RSA Encryption Example</h2>
      <p className="text-gray-600 mb-4">
        Below is a simple Node.js snippet illustrating RSA key generation, encryption, and decryption.
        You can adapt this logic for various programming languages and environments.
      </p>

      <div className="bg-gray-800 rounded-md p-4 mb-8 overflow-auto">
        <pre className="text-gray-100 text-sm leading-5">
{`import crypto from 'crypto';

// Generate RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  },
});

// Sample message
const message = 'Hello from Cypher!';

// Encrypt with public key
const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(message));

// Decrypt with private key
const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);

console.log('Encrypted:', encryptedData.toString('base64'));
console.log('Decrypted:', decryptedData.toString());
`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">How Cypher Uses It</h2>
      <p className="text-gray-600">
        In a real Cypher conversation, the app automatically handles key generation, exchange, and 
        message encryption under the hood. You simply chat normally, and the encryption ensures privacy 
        at all times.
      </p>
    </div>
  )
}
