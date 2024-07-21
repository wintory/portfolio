'use client'

import Lottie from 'lottie-react'
import { FC } from 'react'
import PageNotFoundAnimation from '../public/images/lotties/page-not-found.json'

const ErrorBoundary: FC = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div>
        <div className="grid w-full justify-center p-4 text-center lg:max-w-[1200px]">
          <div className="flex w-full justify-center">
            <Lottie
              animationData={PageNotFoundAnimation}
              loop
              className="sm:w-[50%] lg:w-[30%]"
            />
          </div>
          <div className="sm:pb-4 md:pb-6">
            <p className="font-bold text-white sm:text-xl lg:text-3xl">
              Something went wrong!
            </p>
          </div>

          <h3 className="mb-1 flex items-center pb-4 font-semibold text-gray-900 sm:text-sm md:text-xl dark:text-white">
            I apologize, but there appears to have been an unforeseen problem or
            maintenance on this portfolio. Please try refreshing the page or
            returning shortly.
          </h3>
          <div className="w-full justify-center sm:contents md:flex">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-outline btn-warning rounded-[0px] outline-yellow-50 sm:px-2 sm:text-sm md:text-lg lg:mt-8 lg:px-4"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary
