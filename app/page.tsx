'use client'

import ThemeProvider from '@/providers/ThemeProvider'
import { IBM_Plex_Sans } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import NavBar from './components/NavBar'
import MainContent from './sections/MainContent'

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="relative block h-[100vh] w-[100vw] items-center justify-center">
      <style jsx global>{`
        :root {
          --font-google-ibm-plex-sans: ${sans.style.fontFamily};
          font-family: var(--font-google-ibm-plex-sans);
        }
      `}</style>
      <ThemeProvider>
        <ParallaxProvider scrollAxis="horizontal">
          <div className="flex items-center justify-center">
            <NavBar />
            <MainContent />
          </div>
          {/* <BoyComponent /> */}
        </ParallaxProvider>
      </ThemeProvider>
    </main>
  )
}
