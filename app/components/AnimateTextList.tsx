import { FC } from 'react'
import Typewriter from 'typewriter-effect'

interface AnimateTextProps {
  textList: string[]
  className?: string
}

const AnimateTextList: FC<AnimateTextProps> = ({
  textList = [],
  className,
}) => {
  return (
    <span className={`inline-block duration-1000 ${className} `}>
      <Typewriter
        options={{
          strings: textList,
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  )
}

export default AnimateTextList
