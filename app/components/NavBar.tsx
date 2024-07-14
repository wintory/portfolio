import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="drawer absolute left-0 top-0 z-[100] flex max-w-[1200px] p-3 lg:left-[50%] lg:top-2 lg:w-[100%] lg:translate-x-[-50%]">
      <input id="menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex w-[100%] flex-col justify-between">
        <div className="navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="menu"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost hover:rounded-none focus:rounded-none"
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
            />
          </div>
          <div className="hidden flex-none lg:block">
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
                <a
                  className="hover:rounded-none focus:rounded-none"
                  href="#skill"
                >
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
                <a
                  className="hover:rounded-none focus:rounded-none"
                  href="#work"
                >
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
      </div>
      <div className="drawer-side">
        <label
          htmlFor="menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-lg">
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
