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
          <div className="grid w-max text-neutral-content md:grid-flow-row lg:grid-flow-col">
            <ul className="gap-2 sm:flex sm:text-sm lg:block lg:text-xl">
              <li className="pb-6 text-center text-xl font-bold text-white opacity-60">
                Programming Languages
              </li>
              <li className="text-center text-lg text-white">HTML</li>
              <li className="text-center text-lg text-white">CSS</li>
              <li className="text-center text-lg text-white">JavaScript</li>
              <li className="text-center text-lg text-white">TypeScript</li>
            </ul>
            <div className="divider divider-horizontal invisible" />
            <ul className="gap-2 sm:flex sm:text-sm lg:block lg:text-xl">
              <li className="pb-6 text-center text-xl font-bold text-white opacity-60">
                Frameworks/Libraries
              </li>
              <li className="text-center text-lg text-white">React</li>
              <li className="text-center text-lg text-white">Redux</li>
              <li className="text-center text-lg text-white">Lodash</li>
              <li className="text-center text-lg text-white">
                Styled-components
              </li>
              <li className="text-center text-lg text-white">Jest</li>
              <li className="text-center text-lg text-white">Vitest</li>
              <li className="text-center text-lg text-white">
                Testing-library
              </li>
              <li className="text-center text-lg text-white">I18next</li>
              <li className="text-center text-lg text-white">Bootstrap</li>
              <li className="text-center text-lg text-white">Material UI</li>
              <li className="text-center text-lg text-white">Line LIFF</li>
              <li className="text-center text-lg text-white">
                Facebook Messenger SDK
              </li>
            </ul>
            <div className="divider divider-horizontal invisible" />
            <ul>
              <li className="pb-6 text-center text-xl font-bold text-white opacity-60">
                Tools and Technologies
              </li>
              <li className="text-center text-lg text-white">Git</li>
              <li className="text-center text-lg text-white">AWS Service</li>
              <li className="text-center text-lg text-white">CI/CD</li>
              <li className="text-center text-lg text-white">
                Agile / Scrum Process
              </li>
              <li className="text-center text-lg text-white">RESTful APIs</li>
              <li className="text-center text-lg text-white">GraphQL</li>
              <li className="text-center text-lg text-white">Jira</li>
              <li className="text-center text-lg text-white">
                Chatbot Development
              </li>
            </ul>
            <div className="divider divider-horizontal invisible" />
            <ul>
              <li className="pb-6 text-center text-xl font-bold text-white opacity-60">
                Personal Qualities
              </li>
              <li className="text-center text-lg text-white">Team Player</li>
              <li className="text-center text-lg text-white">Flexible</li>
              <li className="text-center text-lg text-white">Empathetic</li>
              <li className="text-center text-lg text-white">
                Good Communicator
              </li>
            </ul>
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
            <p className="sm:text-sm md:text-lg xl:text-xl">
              HTML, CSS, JavaScript, TypeScript
            </p>
            <p className="grid text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Frameworks/Libraries
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              React, Redux, Lodash, Styled-components, Jest, Vitest,
              Testing-library, I18next, Bootstrap, Material UI, Line LIFF,
              Facebook Messenger SDK
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Tools and Technologies
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Git, AWS Service, CI/CD, Agile / Scrum Process, RESTful APIs,
              GraphQL, Jira, Chatbot Development
            </p>
            <p className="text-white opacity-80 sm:text-sm md:text-lg xl:text-xl">
              Personal Qualities
            </p>
            <p className="text-white sm:text-sm md:text-lg xl:text-xl">
              Team Player, Flexible, Empathetic, Good Communicator
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MySkill
