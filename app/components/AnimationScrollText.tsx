import { FC } from 'react'
import './AnimationScrollText.css'

interface ParallaxProps {
  children?: React.ReactNode
  baseVelocity?: number
}

const AnumationScrollText: FC<ParallaxProps> = ({
  baseVelocity = 50,
  children,
}) => {
  return (
    <div className="scroll-container m-0 flex w-full flex-nowrap items-center overflow-hidden whitespace-nowrap text-black">
      <div className="scroll-text inline-flex">
        <>{children}</>
        <>{children}</>
      </div>
    </div>
  )
}

export default AnumationScrollText
