import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

interface AnimateTextProps {
  textList: string[]
  className?: string
}

const AnimateTextList: FC<AnimateTextProps> = ({
  textList = [],
  className,
}) => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(0)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delay: 2.5,
        delayChildren: 0.04 * i,
      },
    }),
  }

  useEffect(() => {
    const shuffleText = setInterval(() => {
      setSelectedTextIndex(
        Math.floor(Math.random() * (textList.length - 0) + 0)
      )
    }, 7000)

    return () => {
      clearInterval(shuffleText)
    }
  }, [])

  return (
    <motion.div
      className={`text-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <span className="inline-block animate-bounce duration-1000">
        {textList[selectedTextIndex]}
      </span>
    </motion.div>
  )
}

export default AnimateTextList
