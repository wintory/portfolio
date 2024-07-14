'use client'

import ThemeProvider from '@/providers/ThemeProvider'
import { IBM_Plex_Sans } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import NavBar from './components/NavBar'
import AboutMe from './sections/AboutMe'
import Footer from './sections/Footer'
import MainContent from './sections/MainContent'
import MySkill from './sections/MySkill'

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <ThemeProvider>
      <ParallaxProvider scrollAxis="vertical">
        <main className="relative block h-[100vh] w-[100vw] items-center justify-center">
          <style jsx global>{`
            :root {
              --font-google-ibm-plex-sans: ${sans.style.fontFamily};
              font-family: var(--font-google-ibm-plex-sans);
            }
          `}</style>
          <div className="flex items-center justify-center">
            <NavBar />
            <MainContent />
          </div>
          <AboutMe />
          <MySkill />
          <Footer />
        </main>
      </ParallaxProvider>
    </ThemeProvider>
  )
}
