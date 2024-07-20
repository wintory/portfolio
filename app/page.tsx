'use client'

import ThemeProvider from '@/providers/ThemeProvider'
import { motion } from 'framer-motion'
import { IBM_Plex_Sans } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import NavBar from './components/NavBar'
import AboutMe from './sections/AboutMe'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Internship from './sections/InternShip'
import MainContent from './sections/MainContent'
import MySkill from './sections/MySkill'

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  const contents = [
    <NavBar />,
    <MainContent />,
    <AboutMe />,
    <MySkill />,
    <Experience />,
    <Internship />,
    <Footer />,
  ]

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
          {contents.map((content) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
            >
              {content}
            </motion.div>
          ))}
        </main>
      </ParallaxProvider>
    </ThemeProvider>
  )
}
