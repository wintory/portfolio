'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FC, useRef } from 'react'
import FlipCard from '../components/FlipCard'
import { START_WORK_YEAR } from '../constants/common'

const AboutMe: FC = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const textScrollY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const imageScrollY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const expYear = new Date().getFullYear() - START_WORK_YEAR

  return (
    <div
      ref={ref}
      className="relative inset-0 z-0 flex h-auto justify-center sm:p-8"
      style={{
        backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%);',
      }}
    >
      <div className="relative grid h-auto w-screen items-center justify-center text-xl text-black sm:grid-cols-1 sm:p-2 lg:max-w-[1200px] lg:grid-cols-2 lg:p-8">
        <motion.div
          style={{ y: imageScrollY }}
          className="items-center justify-center p-6 sm:hidden lg:flex"
        >
          <FlipCard
            frontChildren={
              <Image
                src="/images/image.jpg"
                className="w-[400px]"
                width={400}
                height={400}
                priority
                alt={'about me image'}
              />
            }
            backChildren={null}
          />
        </motion.div>
        <motion.div style={{ y: textScrollY }} className="sm:p-8 lg:p-4">
          <p className="underline sm:text-lg lg:text-3xl">About Me</p>
          <br />
          <span className="sm:text-sm md:text-lg lg:text-xl">
            I am a passionate and experienced Front-End Developer with over{' '}
            {expYear} years of experience in creating dynamic and user-friendly
            web applications.
          </span>
          <br />
          <br />
          <span className="sm:text-sm md:text-lg lg:text-xl">
            Currently, I am working at Start-up Tech Company, where I specialize
            in developing responsive, high-performance websites using the latest
            technologies and frameworks. My proficiency includes HTML, CSS,
            JavaScript, and modern frameworks such as React.
          </span>
          <br />
          <br />
          <span className="sm:text-sm md:text-lg lg:text-xl">
            In addition to my technical skills, I am a strong collaborator and
            communicator. I enjoy working closely with designers, back-end
            developers, and stakeholders to bring ideas to life. I am constantly
            learning and staying up-to-date with industry trends and best
            practices to ensure that I can deliver the best possible solutions.
          </span>
          <br />
          <br />
          <span className="sm:text-sm md:text-lg lg:text-xl">
            Outside of work, I enjoy exploring new technologies, participating
            in coding challenges. In my free time, you can find me traveling,
            reading, watching movies, or playing video games.
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
