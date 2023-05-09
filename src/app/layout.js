import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crowd Funding',
  description: 'Crowd Funding is platform for your loss funding',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className} >
        <Navbar />

        {children}
      </body>
    </html>
  )
}
