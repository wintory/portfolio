'use Client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

interface ParallaxProps {
  images: string[]
}

const ImageScrollHorizontal: FC<ParallaxProps> = ({ images }) => {
  const duplicatedImages = [...images, ...images, ...images]

  return (
    <div className="relative box-border w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <div className="box-border flex h-full flex-col items-center justify-center">
              <Image
                loading="lazy"
                src={image}
                width={100}
                height={60}
                alt={`Image ${index + 1}`}
                className="image w-auto sm:h-[20px] sm:px-4 md:h-[40px] md:px-8 xl:h-[60px]"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ImageScrollHorizontal
