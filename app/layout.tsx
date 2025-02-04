import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Cypher - E2E Encrypted Chat",
    description: "Secure, anonymous, and encrypted chat application",
    icons: {
      icon: "https://res.cloudinary.com/du0ukbkvu/image/upload/v1738328798/Cypher-file/pmh6mtflhjnthpjmr70d.png",
    },
}  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
