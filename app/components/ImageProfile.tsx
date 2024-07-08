'use client'

import Image from 'next/image'
import { FC } from 'react'

interface ImageProfileProps {
  imagePath: string
  className?: string
  alt?: string
  width?: number
  height?: number
}

const ImageProfile: FC<ImageProfileProps> = ({
  alt,
  imagePath,
  className,
  width,
  height,
}) => {
  return (
    <Image
      className={className}
      src={imagePath}
      alt={alt || ''}
      width={width}
      priority
      height={height}
    />
  )
}

export default ImageProfile
