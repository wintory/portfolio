import Image from 'next/image'
import { FC } from 'react'

const Gallery: FC = () => {
  return (
    <div className="flex justify-center py-[100px]">
      <div className="max-w-[1200px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded"
                src="/images/image.jpg"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded"
                alt=""
                src="/images/image.jpg"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
