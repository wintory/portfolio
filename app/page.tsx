'use client'

import ThemeProvider from '@/providers/ThemeProvider'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { IBM_Plex_Sans } from 'next/font/google'
import { Suspense } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import FullScreenLoader from './components/FullScreenLoader'

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  const NavBar = dynamic(() => import('./components/NavBar'))
  const MainContent = dynamic(() => import('./sections/MainContent'))
  const AboutMe = dynamic(() => import('./sections/AboutMe'))
  const MySkill = dynamic(() => import('./sections/MySkill'))
  const Experience = dynamic(() => import('./sections/Experience'))
  const Internship = dynamic(() => import('./sections/InternShip'))
  const Education = dynamic(() => import('./sections/Education'))
  const Footer = dynamic(() => import('./sections/Footer'))
  const Hobby = dynamic(() => import('./sections/Hobby'))

  const contents = [
    {
      key: 'NavBar',
      component: <NavBar />,
    },
    {
      key: 'MainContent',
      component: <MainContent />,
    },
    {
      key: 'AboutMe',
      component: <AboutMe />,
    },
    {
      key: 'MySkill',
      component: <MySkill />,
    },
    {
      key: 'Experience',
      component: <Experience />,
    },
    {
      key: 'Internship',
      component: <Internship />,
    },
    {
      key: 'Education',
      component: <Education />,
    },
    {
      key: 'Hobby',
      component: <Hobby />,
    },
    {
      key: 'Footer',
      component: <Footer />,
    },
  ]

  return (
    <ThemeProvider>
      <Suspense fallback={<FullScreenLoader />}>
        <ParallaxProvider scrollAxis="vertical">
          <main className="relative block h-[100vh] w-[100vw] items-center justify-center">
            <style jsx global>{`
              :root {
                --font-google-ibm-plex-sans: ${sans.style.fontFamily};
                font-family: var(--font-google-ibm-plex-sans);
              }
            `}</style>
            {contents.map(({ component, key }) => (
              <motion.div
                key={key}
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
                viewport={{ once: false }}
              >
                {component}
              </motion.div>
            ))}
          </main>
        </ParallaxProvider>
      </Suspense>
    </ThemeProvider>
  )
}
