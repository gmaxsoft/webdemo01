import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import BootstrapClient from '@/components/BootstrapClient'

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
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
        <BootstrapClient />
      </body>
    </html>
  )
}