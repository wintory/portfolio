import { motion } from 'framer-motion'
import { FC, useState } from 'react'

interface FlipCardProps {
  frontChildren: React.ReactNode
  backChildren: React.ReactNode
}

const FlipCard: FC<FlipCardProps> = ({ frontChildren, backChildren }) => {
  const [flip, setFlip] = useState(true)

  return (
    <div
      className="flex cursor-pointer items-center justify-center"
      onMouseEnter={() => setFlip((prevState) => !prevState)}
    >
      <motion.div
        style={{ width: '100%', height: 'auto' }}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className="Card h-full w-full rounded-md bg-gray-100 bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter"
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="front"
          >
            {frontChildren}
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flip ? 180 : 0 }}
            transition={{ duration: 0.7 }}
            className="back"
          >
            {backChildren}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FlipCard
