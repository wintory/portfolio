'use Client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import ImageScrollHorizontal from '../components/ImageScrollHorizontal'

const Experience: FC = () => {
  const scrollImages = [
    '/images/logos/appman-logo.png',
    '/images/logos/deeple-logo.png',
    '/images/logos/zipmex-logo.png',
    '/images/logos/zilo-logo.png',
    '/images/logos/true-academy-logo.png',
  ]
  const content: {
    title: string
    date: string
    isPresent?: boolean
    description: string[]
  }[] = [
    {
      title: 'Zilo Asia Co., Ltd (Front-End Lead)',
      date: 'May 2023 - Present',
      isPresent: true,
      description: [
        'Lead a cross-functional team of 8 developers across Thailand and the UK, mentored junior developers, improving overall team competency and reducing code review times, enhancing sprint efficiency and accelerating project delivery.',
        'Designed and maintained a web application providing technical assistance and fund management features',
        'Developed a UI Core library and automation pipeline that streamlined development processes and ensured consistent design and functionality across the product.',
      ],
    },
    {
      title: 'Zipmex Technology Co., Ltd (Front-End Squad Lead)',
      date: 'Mar 2022 - Apr 2023',
      isPresent: false,
      description: [
        'Lead the front-end squad team, collaborating closely with product owners and UX/UI designers.',
        'Developed and maintained cryptocurrency exchange platforms (ZipLock, ZipUp+, User Wallets).',
        'Created Zipmex Landing and Marketplace pages using Next.js and Material UI, overcoming SEO and performance bottlenecks.',
        'Enhanced application performance, leading to quicker load times.',
      ],
    },
    {
      title: 'Deeple Co., Ltd (Software Engineer)',
      date: 'Jun 2021 - Feb 2022',
      isPresent: false,
      description: [
        'Led the development and maintenance of an e-commerce platform and an interactive chatbot.',
        'Boosted application performance by optimizing re-renders, resulting in quicker load times.',
        'Delivered key features for chat systems, product inventory management, shipping processes, invoicing, and web-shopping functionalities.',
      ],
    },
    {
      title: 'AppMan Co., Ltd (Software Engineer)',
      date: 'Jun 2018 - May 2021',
      isPresent: false,
      description: [
        'Developed and sustained online insurance services and applications using JavaScript and TypeScript.',
        'Improved user experience and application performance by eliminating redundant code and enhancing re-render efficiency.',
        'Collaborated with software architects to design and implement web applications.',
        'Led the development and maintenance of a chatbot applications, handling both Front-End and Back-End tasks for platforms like LINE and Facebook.',
      ],
    },
  ]
  return (
    <>
      <div
        id="experience"
        className="relative grid w-screen justify-center bg-gradient-to-r from-[#dfe9f3] to-white sm:pl-[48px] sm:pr-[32px] sm:pt-[32px] lg:px-[40px] lg:pt-[100px]"
      >
        <p className="relative my-4 text-black underline sm:text-lg sm:underline md:text-3xl">
          Experience
        </p>
        <div className="relative z-20 flex h-full max-w-[1200px] justify-center">
          <ol className="relative border-s border-gray-700">
            {content.map(({ title, date, description, isPresent }) => (
              <li key={title} className="mb-10 ms-8 md:p-4">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 ring-8 ring-gray-900">
                  <svg
                    className="h-2.5 w-2.5 text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
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
                  <h3 className="mb-1 flex items-center font-semibold text-black sm:text-lg md:text-xl">
                    {title}
                    {isPresent && (
                      <span className="me-2 ms-3 rounded-md bg-[#6934b3] px-2.5 py-0.5 text-sm font-medium text-white sm:hidden md:block">
                        Present
                      </span>
                    )}
                  </h3>
                  <time className="mb-2 block font-normal leading-none text-black opacity-60 sm:text-sm">
                    {date}
                  </time>
                  <br />
                  {description.length > 0 && (
                    <ul>
                      {description.map((val) => (
                        <li
                          key={val}
                          className="list-disc text-black sm:text-sm md:text-lg"
                        >
                          {val}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
        <div className="z-1 absolute bottom-[200px] right-0 h-[50px] bg-[#6934b3] opacity-20 sm:hidden md:block md:w-[200px] lg:w-[400px]" />
        <div className="z-1 absolute bottom-[100px] right-0 h-[50px] bg-warning opacity-20 sm:hidden md:block md:w-[300px] lg:w-[800px]" />
        <div className="z-1 absolute left-0 top-[100px] h-[50px] w-[300px] bg-warning opacity-20 sm:hidden lg:block" />
        <div className="z-1 absolute left-[-100px] top-[200px] h-[50px] w-[150px] bg-[#6934b3] opacity-20 sm:hidden lg:block" />
      </div>
      <div className="relative w-full justify-center bg-gradient-to-r from-[#dfe9f3] to-white sm:inline-flex sm:py-[32px]">
        <ImageScrollHorizontal images={scrollImages} />
      </div>
    </>
  )
}

export default Experience
