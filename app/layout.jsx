import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sann Opticals Limited',
  description: "Your premier destination for top-quality eyewear in Mombasa. Experience unparalleled service, an extensive range of eyeglasses, and expert vision care. Discover why we're acclaimed as the best optical shop in Mombasa today!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}