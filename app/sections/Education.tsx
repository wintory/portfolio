import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

const Education: FC = () => {
  return (
    <div id="education">
      <div className="relative grid h-full justify-center sm:p-8 md:p-[100px]">
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full bg-slate-200 bg-cover object-cover opacity-10"
          src={'/images/sit-kmutt.png'}
        />
        <div className="relflex grid w-full justify-center sm:py-2 md:py-4 lg:max-w-[1200px]">
          <div className="underline sm:pb-4 md:pb-6">
            <p className="font-bold text-white sm:text-xl lg:text-3xl">
              Education
            </p>
          </div>
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
            className="sm:pb-4 md:pb-6"
          >
            <h3 className="mb-1 flex items-center font-semibold text-gray-900 sm:text-lg md:text-xl dark:text-white">
              Bachelor of Science in Information Technology
            </h3>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              King Mongkut's University of Technology Thonburi
            </time>
            <p className="list-disc text-white sm:text-sm md:text-lg">
              My professional path was significantly shaped by my time at KMUTT.
              I was able to establish a solid foundation in Software Engineer
              through the demanding coursework and practical projects, and my
              leadership and teamwork skills were refined through
              extracurricular activities. My education has given me the
              information and abilities I need to succeed in my career
              aspirations.
            </p>
            <br />
            <h3 className="mb-1 flex items-center font-semibold text-gray-900 sm:text-lg md:text-xl dark:text-white">
              Senior Project: Miletrav Passionate Activity Platform
            </h3>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              Programming Languages: HTML, CSS, JAVASCRIPT, PYTHON
            </time>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              Database: Mysql, MongoDB, Firebase
            </time>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              Framework & Library: React.js, Next.js, Node.js, Feathers.js,
              Restify, Numpy, Pandas, Scikit-learn, Graph-lab
            </time>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              Technique: Collaborative filtering via Jaccard similarity
            </time>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              Web server: NGINX
            </time>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              Other Tools: Github, VSCode, Pycharm
            </time>
            <Link
              href="https://seniorproject.sit.kmutt.ac.th/showproject/IT57-BU14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-warning z-[100] cursor-pointer rounded-none outline-yellow-50 sm:mt-6 sm:px-2 sm:text-sm md:mt-0 md:text-lg lg:mt-8 lg:px-4">
                Senior Project Details
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Education
