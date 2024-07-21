import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

const Internship: FC = () => {
  return (
    <div id="internship">
      <div className="relative -z-20 grid h-full justify-center bg-[rgb(90,36,30)] sm:p-8 md:p-[100px]">
        <Image
          alt="/images/true-bg.png"
          width={1000}
          height={1000}
          loading="lazy"
          className="absolute left-0 top-0 -z-10 h-full w-full bg-slate-200 object-cover opacity-10"
          src={'/images/true-bg.png'}
        />
        <div className="relflex grid w-full justify-center sm:py-2 md:py-4 lg:max-w-[1200px]">
          <div className="sm:pb-4 md:pb-6">
            <p className="font-bold text-white underline sm:text-xl lg:text-3xl">
              Internship
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
            <h3 className="mb-1 flex items-center font-semibold text-white sm:text-lg md:text-xl">
              True Academy Project
            </h3>
            <time className="mb-2 block font-normal leading-none text-white opacity-60 sm:text-sm">
              May - July 2017
            </time>
            <p className="list-disc text-white sm:text-sm md:text-lg">
              This internship was a life-changing opportunity that helped me
              greatly advance my technical and professional abilities while also
              allowed me to use my knowledge in a practical situation. My close
              collaboration with experienced professionals prepared me for the
              opportunities and challenges that are ahead in the technology
              industry.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-6">
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
              <Image
                src="/images/true-academy.jpg"
                alt="/images/true-academy.jpg"
                width={600}
                height={600}
                loading="lazy"
              />
            </motion.div>
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
              <Image
                src="/images/true-cert.jpg"
                alt="/images/true-cert.jpg"
                width={600}
                height={600}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Internship
