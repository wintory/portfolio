import { FC } from 'react'
import SocialMedia from '../components/SocialMedia'

const Footer: FC = () => {
  return (
    <footer className="footer footer-center rounded bg-transparent text-white sm:py-[16px] md:p-10">
      <nav className="grid-flow-col text-lg sm:hidden sm:gap-1 md:grid md:gap-4">
        <a className="hover:rounded-none focus:rounded-none" href="#">
          Home
        </a>
        <a className="hover:rounded-none focus:rounded-none" href="#about-me">
          About me
        </a>
        <a className="hover:rounded-none focus:rounded-none" href="#skill">
          Skill
        </a>
        <a className="hover:rounded-none focus:rounded-none" href="#experience">
          Experience
        </a>
        <a className="hover:rounded-none focus:rounded-none" href="#internship">
          Internship
        </a>
        <a className="hover:rounded-none focus:rounded-none" href="#education">
          Education
        </a>
        <a className="hover:rounded-none focus:rounded-none" href="#hobby">
          Hobby
        </a>
      </nav>
      <SocialMedia />
      <aside>
        <p className="font-thin sm:text-xs md:text-sm">
          {new Date().getFullYear()} Thanapol Sakullertphasuk&apos;s Portfolio.
          Thailand © All right reserved.
        </p>
      </aside>
    </footer>
  )
}

export default Footer
