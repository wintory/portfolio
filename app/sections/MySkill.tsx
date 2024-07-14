import { motion, useScroll, useTransform } from 'framer-motion'
import { FC, useRef } from 'react'

const MySkill: FC = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const textScrollY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      ref={ref}
      className="inset-0 z-10 bg-slate-100"
      style={
        {
          // backgroundImage: 'linear-gradient(90deg, #dfe9f3 0%, white 100%);',
        }
      }
    >
      <motion.div className="relative flex h-full justify-center p-[5rem]">
        <div className="flex w-full justify-center sm:py-2 md:py-4 lg:max-w-[1200px]">
          <p className="sm:text-lg sm:underline lg:text-2xl lg:no-underline">
            Skillset
          </p>
        </div>
        <div className="relative flex h-auto w-screen items-center justify-center text-xl text-black sm:grid-cols-1 sm:p-2 lg:max-w-[1200px] lg:grid-cols-3 lg:p-8">
          <div className="grid w-max text-neutral-content md:grid-flow-row lg:grid-flow-col">
            <ul>
              <li className="pb-6 text-2xl font-bold text-black">
                Programming Languages
              </li>
              <li className="text-center text-black">HTML</li>
              <li className="text-center text-black">CSS</li>
              <li className="text-center text-black">JavaScript</li>
              <li className="text-center text-black">TypeScript</li>
            </ul>
            <div className="divider divider-horizontal" />
            <ul>
              <li className="pb-6 text-2xl font-bold text-black">
                Frameworks/Libraries
              </li>
              <li className="text-center text-black">React</li>
              <li className="text-center text-black">Redux</li>
              <li className="text-center text-black">Lodash</li>
              <li className="text-center text-black">Styled-components</li>
              <li className="text-center text-black">Jest</li>
              <li className="text-center text-black">Vitest</li>
              <li className="text-center text-black">Testing-library</li>
              <li className="text-center text-black">I18next</li>
              <li className="text-center text-black">Bootstrap</li>
              <li className="text-center text-black">Material UI</li>
              <li className="text-center text-black">Line LIFF</li>
              <li className="text-center text-black">Facebook Messenger SDK</li>
            </ul>
            <div className="divider divider-horizontal" />
            <ul>
              <li className="pb-6 text-2xl font-bold text-black">
                Tools and Technologies
              </li>
              <li className="text-center text-black">Git</li>
              <li className="text-center text-black">AWS Service</li>
              <li className="text-center text-black">CI/CD</li>
              <li className="text-center text-black">Agile / Scrum Process</li>
              <li className="text-center text-black">RESTful APIs</li>
              <li className="text-center text-black">GraphQL</li>
              <li className="text-center text-black">Jira</li>
              <li className="text-center text-black">Chatbot Development</li>
            </ul>
            <div className="divider divider-horizontal" />
            <ul>
              <li className="pb-6 text-2xl font-bold text-black">
                Personal Qualities
              </li>
              <li className="text-center text-black">Team Player</li>
              <li className="text-center text-black">Flexible</li>
              <li className="text-center text-black">Empathetic</li>
              <li className="text-center text-black">Good Communicator</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MySkill
