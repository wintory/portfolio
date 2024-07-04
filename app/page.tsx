'use client'
import NavBar from '@/components/NavBar'
import ThemeProvider from '@/providers/ThemeProvider'
import { useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  const target = useRef(null)
  // const train = useParallax({
  //   speed: 500,
  //   targetElement: target.current,
  // })

  // const cloud = useParallax({
  //   speed: 200,
  //   targetElement: target.current,
  // })

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <ThemeProvider>
        <ParallaxProvider scrollAxis="horizontal">
          <NavBar />
          {/* <BoyComponent /> */}
        </ParallaxProvider>
      </ThemeProvider>
    </main>
  )
}
