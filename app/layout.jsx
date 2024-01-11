import { Inter } from 'next/font/google'
import Script from 'next/script'

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import BootstrapClient from '@/components/BootstrapClient'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import BootstrapCarousel from '@/components/BootstrapCarousel'
import AboutUs from '@/components/AboutUs'
import Parallax from '@/components/Parallax'
import Brands from '@/components/Brands'
import GooglerMap from '@/components/GooglerMap'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naprawa pralek, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów ,Lubrza, części zamienne',
  description: 'Chodkiewicz - Naprawa pralek, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów,Lubrza,części zamienne',
  keywords: 'Świebodzin, Międzyrzecz, Sulechów ,Lubrza,Naprawa, pralek,pralki, zmywarki, naprawa zmywarek, naprawa pralek, serwis, agd, części zamienne, Krosno Odrzańskie',
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <main>
          <Header />
          <Navigation />
          <BootstrapCarousel />
          {children}
          <AboutUs />
          <Parallax />
          <Brands />
          <GooglerMap />
        </main>
        <Footer />
        <ScrollToTopButton />
        <BootstrapClient />
      </body>
    </html>
  )
}