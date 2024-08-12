import { motion, useScroll, useTransform } from 'framer-motion'
import { FC, useRef } from 'react'

const MySkill: FC = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const textScrollY = useTransform(scrollYProgress, [0, 4], ['0%', '100%'])

  return (
    <div ref={ref} id="skill">
      <motion.div
        style={{
          y: textScrollY,
          backgroundImage:
            'linear-gradient(90deg,rgba(5, 5, 5, 1) 0%,rgba(67, 67, 67, 1) 73%)',
        }}
        className="relative h-full justify-center p-[100px] sm:hidden lg:grid"
      >
        <div className="absolute bottom-[100px] left-[100px] z-0 h-[300px] w-[300px] rotate-45 bg-warning opacity-20" />
        <div className="absolute right-[100px] top-[100px] z-0 h-[300px] w-[300px] rotate-45 bg-[#6934b3] opacity-20" />
        <div className="relflex flex w-full justify-center sm:py-2 md:py-4 lg:max-w-[1200px]">
          <p className="font-bold underline sm:text-xl sm:text-white sm:underline lg:text-3xl lg:text-warning">
            Skillset
          </p>
        </div>
        <div className="relative flex h-auto w-screen items-center justify-center text-xl text-white sm:grid-cols-1 sm:p-2 lg:max-w-[1200px] lg:grid-cols-3 lg:p-8">
          <div className="grid grid-cols-2 gap-x-2 gap-y-6">
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Programming Languages
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              HTML5, CSS3, JavaScript, TypeScript
            </p>
            <p className="grid text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Front-End Frameworks, Tools & Libraries
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              React, Next.js, Vite.js
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              State Management & Testing
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Redux, Jest, Testing Library, Cypress, Playwright
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Styling & UI Frameworks
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Styled-components, Tailwind CSS, Bootstrap, MUI, etc.
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Cloud & Deployment
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              AWS Services, Github Actions, ArgoCD
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Development Practices & Tools
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Git, CI/CD, Agile, Jira, etc.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{
          backgroundImage:
            'linear-gradient(90deg,rgba(5, 5, 5, 1) 0%,rgba(67, 67, 67, 1) 73%);',
        }}
        className="relative sm:grid sm:p-8 lg:hidden lg:p-4"
      >
        <div className="relative sm:p-0 md:p-8">
          <div className="absolute bottom-[100px] left-[-100px] z-0 h-[150px] w-[150px] rotate-45 bg-warning opacity-20" />
          <div className="absolute right-[100px] top-[300px] z-0 h-[150px] w-[150px] rotate-45 bg-[#6934b3] opacity-20 sm:hidden lg:flex" />
          <div className="w-[150px] rounded-full text-white lg:absolute lg:left-[-140px] lg:flex lg:h-[150px] lg:items-center lg:justify-center lg:bg-black">
            <p className="text-warning sm:text-lg sm:underline md:text-3xl lg:no-underline">
              Skillset
            </p>
          </div>
          <br />
          <div className="grid grid-cols-2 gap-x-2 gap-y-6">
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Programming Languages
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              HTML5, CSS3, JavaScript, TypeScript
            </p>
            <p className="grid text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Front-End Frameworks, Tools & Libraries
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              React, Next.js, Vite.js
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              State Management & Testing
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Redux, Jest, Testing Library, Cypress, Playwright
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Styling & UI Frameworks
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Styled-components, Tailwind CSS, Bootstrap, MUI, etc.
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Cloud & Deployment
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              AWS Services, Github Actions, ArgoCD
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Development Practices & Tools
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Git, CI/CD, Agile, Jira, etc.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MySkill
