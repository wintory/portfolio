import AnimatedTextCharacter from '../components/AnimateTextCharacter'
import AnimateTextList from '../components/AnimateTextList'

const MainContent = () => {
  const textList = ['Coding', 'Designing', 'Learning', 'Problem Solving']

  return (
    <div className="flex w-full items-center justify-center p-8">
      <div className="w-full p-4 text-left">
        <AnimatedTextCharacter
          className="pr-1"
          text="Hi there 👋 My name is Willy,"
        />
        <div className="inline-flex">
          <AnimatedTextCharacter
            className="pr-1"
            text="and I currently work as a front-end developer and passionate about"
          />
          <AnimateTextList className="text-warning" textList={textList} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
