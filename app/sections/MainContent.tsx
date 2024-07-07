import AnimatedTextCharacter from '../components/AnimateTextCharacter'
import AnimateTextList from '../components/AnimateTextList'
import ImageProfile from '../components/ImageProfile'

const MainContent = () => {
  const textList = ['Problem Solving']

  return (
    <div className="relative flex h-screen w-full items-center justify-center text-xl sm:p-2 md:p-8">
      {/* <Lottie
        animationData={animationData}
        style={{ zIndex: -1 }}
        className="absolute flex h-auto w-[80%] items-center justify-center md:bottom-[-150px] md:right-[-300px]"
        loop={true}
      /> */}
      <div className="w-full sm:p-4 sm:text-center md:px-8 md:text-left">
        <AnimatedTextCharacter
          className="text-bold pb-2 sm:text-sm md:pr-1 md:text-lg"
          text="Hello there 👋 I'm"
        />
        <AnimatedTextCharacter
          className="text-bold pb-2 sm:text-lg md:pr-1 md:text-5xl"
          text="Thanapol Sakullertphasuk"
        />
        <div className="relative w-[100%] md:inline-flex">
          <AnimatedTextCharacter
            className="contents sm:text-sm md:text-xl"
            text="Senior front-end developer with a passion in"
          />
          <AnimateTextList
            className="flex w-[100%] items-end text-warning sm:justify-center sm:pt-2 sm:text-sm md:justify-start md:pl-2 md:pt-0 md:text-xl"
            textList={textList}
          />
        </div>
      </div>
      <ImageProfile
        imagePath="/profile.png"
        className="absolute bottom-[60px] sm:w-[300px] md:right-0 md:w-[600px]"
        width={600}
        height={600}
      />
    </div>
  )
}

export default MainContent
