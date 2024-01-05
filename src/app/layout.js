import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Providers>

        {/* header */}
        <Header/>
        {/* navbar */}
        <Navbar/>
        {/* search box */}


        {children}
        </Providers>
        </body>

    </html>
  )
}
