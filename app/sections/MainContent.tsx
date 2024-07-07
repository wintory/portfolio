import Lottie from 'lottie-react'
import animationData from '../../public/lotties/profile-background.json'
import AnimatedTextCharacter from '../components/AnimateTextCharacter'
import AnimateTextList from '../components/AnimateTextList'

const MainContent = () => {
  const textList = ['Coding', 'Managing', 'Problem Solving']

  return (
    <div className="relative flex h-full max-h-[600px] w-full items-center justify-center text-xl sm:p-2 md:p-8">
      <Lottie
        animationData={animationData}
        style={{ zIndex: -1 }}
        className="absolute flex h-auto w-[80%] items-center justify-center md:bottom-[-150px] md:right-[-300px]"
        loop={true}
      />
      <div className="w-full p-4 sm:text-center md:text-left">
        <AnimatedTextCharacter
          className="text-bold pb-2 sm:text-lg md:pr-1 md:text-3xl"
          text="Hello there 👋 My name is Willy,"
        />
        <div className="w-[100%] md:inline-flex">
          <AnimatedTextCharacter
            className="pr-2 sm:text-sm md:text-lg"
            text="I am a front-end developer with a passion in"
          />
          <AnimateTextList
            className="text-warning sm:pt-2 sm:text-sm md:pt-0 md:text-lg"
            textList={textList}
          />
        </div>
        {/* <ImageProfile className="absolute bottom-0 right-0 w-[800px]" /> */}
      </div>
    </div>
  )
}

export default MainContent
