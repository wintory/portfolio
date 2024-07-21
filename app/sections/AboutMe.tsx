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
  const textScrollY = useTransform(scrollYProgress, [0, 3], ['0%', '75%'])
  const imageScrollY = useTransform(scrollYProgress, [0, 3], ['0%', '75%'])
  const expYear = new Date().getFullYear() - START_WORK_YEAR

  return (
    <div ref={ref}>
      <div
        id="about-me"
        className="relative flex h-full justify-center sm:bg-gradient-to-r sm:from-[#dfe9f3] sm:to-white sm:p-8 lg:bg-none"
      >
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full bg-slate-200 bg-cover object-cover opacity-100 blur-[2px] sm:hidden lg:block"
          src={'/images/about-me-bg.jpg'}
          alt={''}
          width={60}
          height={60}
        />
        <div className="relative grid h-full w-screen items-center justify-center text-xl text-black sm:max-h-[1000px] sm:grid-cols-1 sm:p-2 lg:max-w-[1200px] lg:grid-cols-2 lg:p-8">
          <motion.div
            style={{ y: imageScrollY }}
            className="mask mask-parallelogram-4 items-center justify-center p-6 sm:hidden lg:flex"
          >
            <FlipCard
              frontChildren={
                <Image
                  src="/images/image.jpg"
                  className="h-full w-full"
                  width={400}
                  height={400}
                  priority
                  alt={'about me image'}
                />
              }
              backChildren={null}
            />
          </motion.div>
          <motion.div
            style={{ y: textScrollY }}
            className="relative sm:p-2 md:p-8 lg:p-4"
          >
            <div className="w-[150px] rounded-full lg:absolute lg:left-[-140px] lg:flex lg:h-[150px] lg:items-center lg:justify-center lg:bg-black lg:text-white">
              <p className="sm:text-lg sm:underline lg:text-2xl lg:no-underline">
                About Me
              </p>
            </div>
            <br />
            <span className="md:text-md sm:text-sm lg:text-lg xl:text-xl">
              I am a passionate and experienced Front-End Developer with over{' '}
              {expYear} years of experience in creating dynamic and
              user-friendly web applications.
            </span>
            <br />
            <br />
            <span className="md:text-md sm:text-sm lg:text-lg xl:text-xl">
              Currently, I am working at Start-up Tech Company, where I
              specialize in developing responsive, high-performance websites
              using the latest technologies and frameworks. My proficiency
              includes HTML, CSS, JavaScript, and modern frameworks such as
              React.
            </span>
            <br />
            <br />
            <span className="md:text-md sm:text-sm lg:text-lg xl:text-xl">
              In addition to my technical skills, I am a strong collaborator and
              communicator. I enjoy working closely with designers, back-end
              developers, and stakeholders to bring ideas to life. I am
              constantly learning and staying up-to-date with industry trends
              and best practices to ensure that I can deliver the best possible
              solutions.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
