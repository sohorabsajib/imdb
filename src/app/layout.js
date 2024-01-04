import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {/* header */}
        <Header/>
        {/* navbar */}
        {/* search box */}


        {children}
        </body>

    </html>
  )
}
