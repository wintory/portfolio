import AnimatedTextCharacter from '../components/AnimateTextCharacter'
import AnimateTextList from '../components/AnimateTextList'
import ImageProfile from '../components/ImageProfile'
import SocialMedia from '../components/SocialMedia'

const MainContent = () => {
  const textList = [
    'JavaScript',
    'React',
    'Web Development',
    'Problem Solving',
    'People Management',
  ]

  return (
    <div className="relative flex h-screen w-screen items-center justify-center text-xl sm:p-2 lg:max-h-[800px] lg:p-8">
      <div className="z-30 sm:p-4 sm:text-center lg:min-w-[650px] lg:text-left">
        <AnimatedTextCharacter
          className="text-bold mb-2 sm:text-sm md:text-lg lg:pr-1"
          text="Hello there 👋 I'm"
        />
        <AnimatedTextCharacter
          className="text-bold mb-2 sm:text-lg md:text-5xl lg:pr-1"
          text="Thanapol Sakullertphasuk"
        />
        <div className="relative w-[100%] items-center md:inline-flex">
          <AnimatedTextCharacter
            className="contents sm:text-sm md:text-xl"
            text="Senior front-end developer with a passion in"
          />
          <AnimateTextList
            className="flex w-[100%] items-end text-warning sm:justify-center sm:pt-2 sm:text-sm md:text-xl lg:justify-start lg:pl-2 lg:pt-0"
            textList={textList}
          />
        </div>
        <div className="pt-4">
          <div className="relative mb-4 w-[100%] sm:hidden lg:inline-flex">
            <SocialMedia />
          </div>
          <button className="btn btn-outline btn-warning rounded-[0px] outline-yellow-50 sm:px-2 sm:text-sm md:text-lg lg:mt-8 lg:px-4">
            Download Resume
          </button>
        </div>
      </div>
      <ImageProfile
        imagePath="/images/profile-pic.png"
        className="absolute sm:absolute sm:bottom-[-80px] sm:h-[40%] sm:w-auto lg:relative lg:bottom-0 lg:right-0 lg:h-auto lg:w-[400px] lg:rounded-full"
        width={600}
        height={600}
      />
    </div>
  )
}

export default MainContent
