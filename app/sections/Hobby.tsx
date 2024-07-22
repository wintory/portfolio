import Image from 'next/image'
import { FC } from 'react'

const Gallery: FC = () => {
  return (
    <div
      id="hobby"
      className="relative grid h-full justify-center sm:p-8 md:p-[100px]"
    >
      <div className="flex justify-center">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full bg-slate-200 bg-cover object-cover opacity-90 blur-[5px]"
          src={'/images/gallery-img.jpg'}
          width={1000}
          height={1000}
          loading="lazy"
          alt="gallery"
        />
        <div className="max-w-[1200px]">
          <div className="sm:pb-4 md:pb-6">
            <p className="font-bold text-black underline sm:text-xl lg:text-3xl">
              Hobby
            </p>
          </div>
          <p className="list-disc text-black sm:pb-4 sm:text-sm md:text-lg lg:pb-8">
            Beyond coding and creating seamless user experiences, I have a deep
            passion for travel and photography. Exploring new destinations not
            only broadens my horizons but also fuels my creativity and
            inspiration. Whether it’s capturing the serene landscapes of nature
            or the vibrant energy of urban life, photography allows me to tell
            stories through my lens. These adventures and the moments I capture
            help me bring a unique perspective and a fresh, dynamic approach to
            my work as a front-end developer.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* 1 */}
            <div className="grid auto-rows-max gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-4.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-4"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-6.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-6"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-8.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-8"
                />
              </div>
            </div>
            {/* 2 */}
            <div className="grid auto-rows-max gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-1.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-1"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-5.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-5"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-14.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-14"
                />
              </div>
            </div>
            {/* 3 */}
            <div className="grid auto-rows-max gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-3.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-3"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-7.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-7"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-15.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-15"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-19.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-19"
                />
              </div>
            </div>
            {/* 4 */}
            <div className="grid auto-rows-max gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-16.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-16"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-18.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-18"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-md hover:opacity-90 hover:grayscale"
                  src="/images/gallery/gallery-17.jpg"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="gallery-17"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
