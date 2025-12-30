import './globals.css'
import { Outfit } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700']
})

export const viewport = {
  width: 'device-width',
  initialScale: 1.0
}

export const metadata = {
  title: 'The Insurance Practice',
  description: 'From consultation to claims, we are your complete, one-stop insurance solution under a single trusted roof.',
  appleWebApp: {
    title: 'TIP'
  }
}

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={outfit.className}>
      <div id="root">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout