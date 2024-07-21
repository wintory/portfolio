import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="drawer absolute left-0 top-0 z-[100] flex max-w-[1200px] sm:hidden md:px-[24px] lg:left-[50%] lg:top-2 lg:block lg:w-[100%] lg:translate-x-[-50%] lg:px-[32px]">
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
                <Link
                  className="hover:rounded-none hover:bg-transparent focus:rounded-none focus:bg-transparent active:bg-transparent"
                  href="#about-me"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  className="hover:rounded-none hover:bg-transparent focus:rounded-none focus:bg-transparent active:bg-transparent"
                  href="#skill"
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  className="hover:rounded-none hover:bg-transparent focus:rounded-none focus:bg-transparent active:bg-transparent"
                  href="#experience"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  className="hover:rounded-none hover:bg-transparent focus:rounded-none focus:bg-transparent active:bg-transparent"
                  href="#internships"
                >
                  Internships
                </Link>
              </li>
              {/* <li>
                <Link
                  className="hover:rounded-none hover:bg-transparent focus:rounded-none focus:bg-transparent active:bg-transparent"
                  href="#gallery"
                >
                  Gallery
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
