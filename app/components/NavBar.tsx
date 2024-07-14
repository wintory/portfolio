import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="navbar absolute left-0 top-0 z-[100] max-w-[1200px] translate-x-[-50%] p-3 sm:hidden md:left-[50%] md:w-[100%] lg:top-5 lg:flex">
      <div className="flex-1">
        <Image
          src="/images/signature.png"
          alt={'signature'}
          className="max-h-[120px]"
          width={150}
          height={80}
        />
      </div>
      <div className="flex-none">
        <ul className="text-bold menu menu-horizontal text-xl">
          <li>
            <a
              className="hover:rounded-none focus:rounded-none"
              href="#about-me"
            >
              About me
            </a>
          </li>
          <li>
            <a className="hover:rounded-none focus:rounded-none" href="#skill">
              Skill
            </a>
          </li>
          <li>
            <a
              className="hover:rounded-none focus:rounded-none"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a className="hover:rounded-none focus:rounded-none" href="#work">
              Work
            </a>
          </li>
          <li>
            <a
              className="hover:rounded-none focus:rounded-none"
              href="#gallery"
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
