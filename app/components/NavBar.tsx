import Image from 'next/image'

const NavBar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="drawer absolute left-0 top-0 z-[100] flex max-w-[1200px] sm:hidden md:px-[24px] lg:left-[50%] lg:top-2 lg:block lg:w-[100%] lg:translate-x-[-50%] lg:px-[32px]">
      <input id="menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex w-[100%] flex-col justify-between">
        <div className="navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="menu"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost hover:rounded-md focus:rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <Image
              src="/images/signature.png"
              alt={'signature'}
              className="max-h-[120px]"
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="text-bold menu menu-horizontal text-xl">
              <li>
                <div
                  className="text-white hover:rounded-md hover:bg-transparent focus:rounded-md focus:bg-transparent active:bg-transparent"
                  onClick={() => scrollToSection('about-me')}
                >
                  About me
                </div>
              </li>
              <li>
                <div
                  className="text-white hover:rounded-md hover:bg-transparent focus:rounded-md focus:bg-transparent active:bg-transparent"
                  onClick={() => scrollToSection('skill')}
                >
                  Skill
                </div>
              </li>
              <li>
                <div
                  className="text-white hover:rounded-md hover:bg-transparent focus:rounded-md focus:bg-transparent active:bg-transparent"
                  onClick={() => scrollToSection('experience')}
                >
                  Experience
                </div>
              </li>
              <li>
                <div
                  className="text-white hover:rounded-md hover:bg-transparent focus:rounded-md focus:bg-transparent active:bg-transparent"
                  onClick={() => scrollToSection('internship')}
                >
                  Internship
                </div>
              </li>
              <li>
                <div
                  className="text-white hover:rounded-md hover:bg-transparent focus:rounded-md focus:bg-transparent active:bg-transparent"
                  onClick={() => scrollToSection('education')}
                >
                  Education
                </div>
              </li>
              <li>
                <div
                  className="text-white hover:rounded-md hover:bg-transparent focus:rounded-md focus:bg-transparent active:bg-transparent"
                  onClick={() => scrollToSection('hobby')}
                >
                  Hobby
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
