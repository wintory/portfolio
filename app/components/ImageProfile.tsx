'use client'

import { StaticImageData } from 'next/image'
import { FC } from 'react'

interface ImageProfileProps {
  pic: StaticImageData
  className?: string
  alt?: string
}

const ImageProfile: FC<ImageProfileProps> = ({ alt, pic, className }) => {
  return (
    <div className={className}>{/* <Image src={pic} alt={alt || ''} /> */}</div>
  )
}

export default ImageProfile
