import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next Blog App',
  description: 'next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <div className="flex-col">
          <Navbar />
          <div>{children}</div>
          <Footer />
      </div>
      </body>
      </html>
  )
}