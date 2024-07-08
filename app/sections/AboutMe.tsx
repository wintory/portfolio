'use client'

import Image from 'next/image'
import { FC } from 'react'

const AboutMe: FC = () => {
  const expYear = new Date().getFullYear() - 2018

  return (
    <div className="relative flex h-auto justify-center bg-white">
      <div className="relative grid h-auto w-screen items-center justify-center text-xl text-black sm:grid-cols-1 sm:p-2 lg:max-w-[1200px] lg:grid-cols-2 lg:p-8">
        <div className="justify-center p-6 md:hidden lg:flex lg:justify-center">
          <Image
            src="/images/image.jpg"
            className="w-[400px]"
            width={400}
            height={400}
            priority
            alt={'about me image'}
          />
        </div>
        <div className="sm:p-8 lg:p-4">
          <p className="underline lg:text-3xl">About Me</p>
          <br />
          <span className="lg:text-xl">
            I am a passionate and experienced Front-End Developer with over{' '}
            {expYear} years of experience in creating dynamic and user-friendly
            web applications.
          </span>
          <br />
          <br />
          <span className="lg:text-xl">
            Currently, I am working at Start-up Tech Company, where I specialize
            in developing responsive, high-performance websites using the latest
            technologies and frameworks. My proficiency includes HTML, CSS,
            JavaScript, and modern frameworks such as React.
          </span>
          <br />
          <br />
          <span>
            In addition to my technical skills, I am a strong collaborator and
            communicator. I enjoy working closely with designers, back-end
            developers, and stakeholders to bring ideas to life. I am constantly
            learning and staying up-to-date with industry trends and best
            practices to ensure that I can deliver the best possible solutions.
          </span>
          <br />
          <br />
          <span className="lg:text-xl">
            Outside of work, I enjoy exploring new technologies, participating
            in coding challenges. In my free time, you can find me traveling,
            reading, watching movies, or playing video games.
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
