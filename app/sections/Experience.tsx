import { FC } from 'react'

const Experience: FC = () => {
  const content: {
    title: string
    date: string
    isPresent?: boolean
    description: string[]
  }[] = [
    {
      title: 'Zilo Asia Co., Ltd (Front-End Chapter Lead)',
      date: 'May 2023 - Present',
      isPresent: true,
      description: [
        'Managed front-end teams in Thailand and the UK.',
        'Using the SDLC methodology, design and enhance the development process to make it closer to alignment with agile teams.',
        'Collaborated with product owners and UX/UI designers to deliver projects meeting client requirements.',
        'Designed and maintained a web application providing technical assistance and fund management features.',
        'Created internal tools and UI Core library to support the main product.',
      ],
    },
    {
      title:
        'Zipmex Technology Co., Ltd (Senior Software Engineer, Front-End Squad Lead)',
      date: 'Mar 2022 - Apr 2023',
      isPresent: false,
      description: [
        'Developed and maintained cryptocurrency exchange platforms (ZipLock, ZipUp+, User Wallets).',
        'Created Zipmex Landing and Marketplace pages.',
        'Lead the front-end squad team, collaborating closely with product owners and UX/UI designers.',
        'Enhanced application performance and user experience.',
      ],
    },
    {
      title: 'Deeple Co., Ltd (Software Engineer)',
      date: 'Jun 2021 - Feb 2022',
      isPresent: false,
      description: [
        'Developed and maintained an e-commerce platform and chatbot.',
        'Improved application performance by reducing unused code and optimizing re-renders.',
        'Implemented features for chat systems, product inventory, shipping, invoices, and web-shopping platforms.',
      ],
    },
    {
      title: 'AppMan Co., Ltd (Front-End Developer)',
      date: 'Jun 2018 - May 2021',
      isPresent: false,
      description: [
        'Created and maintained Insurance online services and applications using JavaScript and TypeScript.',
        'Worked with software architects to develop and implement web apps.',
        'Enhanced application performance to improve user experience.',
        'Developed chatbot applications for platforms like LINE and Facebook.',
        'Maintained digital face-to-face applications.',
      ],
    },
    {
      title: 'True Academy Project (Internship)',
      date: 'May - July 2017',
      isPresent: false,
      description: [],
    },
  ]
  return (
    <div
      id="experience"
      className="relative grid w-screen justify-center bg-gradient-to-r from-[#dfe9f3] to-white sm:py-[32px] sm:pl-[48px] sm:pr-[32px] lg:px-[32px] lg:py-[100px]"
    >
      <p className="relative my-4 text-black underline sm:text-lg sm:underline md:text-3xl">
        Experience
      </p>
      <div className="relative z-20 flex h-full max-w-[1200px] justify-center">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {content.map(({ title, date, description, isPresent }) => (
            <li className="mb-10 ms-8 md:p-4">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <svg
                  className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 flex items-center font-semibold text-gray-900 sm:text-lg md:text-xl dark:text-black">
                {title}
                {isPresent && (
                  <span className="me-2 ms-3 rounded-none bg-[#6934b3] px-2.5 py-0.5 text-sm font-medium sm:hidden md:block dark:text-white">
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
                    <li className="list-disc text-black sm:text-sm md:text-lg">
                      {val}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="z-1 absolute bottom-[100px] right-[-300px] h-[800px] w-[800px] rounded-full bg-warning opacity-20" />
      <div className="z-2 absolute bottom-[200px] right-[-300px] h-[600px] w-[600px] rounded-full bg-white" />
    </div>
  )
}

export default Experience
