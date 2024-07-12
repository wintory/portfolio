import { FC, useRef } from 'react'
import FlipCard from '../components/FlipCard'

const MySkill: FC = () => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className="relative flex h-[1200px] justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1524439188326-e47322d1cef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative block h-[1000px] h-auto w-screen items-center justify-center text-xl text-white sm:grid-cols-1 sm:p-2 lg:max-w-[1200px] lg:grid-cols-3 lg:p-8">
        <p className="underline lg:text-3xl">Skill</p>
        <div className="grid items-center justify-center gap-3 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <FlipCard />
          <FlipCard />
        </div>
      </div>
    </div>
  )
}

export default MySkill
