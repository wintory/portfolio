import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import AnimatedTextCharacter from '../components/AnimateTextCharacter'
import AnimateTextList from '../components/AnimateTextList'
import ImageProfile from '../components/ImageProfile'
import SocialMedia from '../components/SocialMedia'

const MainContent: FC = () => {
  const [isShowTextList, setIsShowTextList] = useState<boolean>(false)
  const textList = [
    'JavaScript',
    'React',
    'Web Development',
    'Problem Solving',
    'People Management',
  ]

  useEffect(() => {
    setTimeout(() => {
      setIsShowTextList(true)
    }, 3000)
  }, [])

  return (
    <div className="relative flex h-screen w-screen items-center justify-center text-xl sm:p-2 lg:max-h-[650px] lg:p-8">
      <div className="sm:p-4 sm:text-center lg:min-w-[650px] lg:text-left">
        <AnimatedTextCharacter
          className="text-bold mb-2 text-white sm:text-sm md:text-lg lg:pr-1"
          text="Hello there 👋 I'm"
        />
        <AnimatedTextCharacter
          className="text-bold mb-2 text-white sm:text-lg md:text-5xl lg:pr-1"
          text="Thanapol Sakullertphasuk"
        />
        <div className="relative w-[100%] items-baseline md:inline-flex md:min-w-[600px]">
          <AnimatedTextCharacter
            className="contents text-white sm:text-sm md:text-xl"
            text="Senior front-end developer with a passion in"
          />
          <AnimateTextList
            className="flex items-end text-warning sm:justify-center sm:pt-2 sm:text-sm md:justify-start md:pl-2 md:pt-0 md:text-lg"
            textList={isShowTextList ? textList : []}
          />
        </div>
        <div className="pt-4">
          <div className="relative mb-4 w-[100%] sm:hidden lg:inline-flex">
            <SocialMedia />
          </div>
          <Link
            href="https://drive.google.com/file/d/1Rs0rOflwU0lSTMz2IG4o99R66xr6U-z6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline btn-warning rounded-[0px] outline-yellow-50 sm:px-2 sm:text-sm md:text-lg lg:mt-8 lg:px-4">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute z-[-1] sm:absolute sm:bottom-[-130px] sm:w-auto lg:relative lg:bottom-0 lg:h-auto">
        <ImageProfile
          imagePath="/images/profile-pic.png"
          className="sm:w-[350px] md:w-[400px] lg:rounded-full"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default MainContent
