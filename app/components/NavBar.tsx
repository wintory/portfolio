import ThemeSwitch from './ThemeSwitch'

const NavBar = () => {
  return (
    <div className="navbar fixed top-0 z-[100] justify-between md:top-5 md:w-[80%]">
      <a className="px-3 text-xl">Thanapol</a>
      <div>
        <ThemeSwitch />
        <button className="btn btn-warning ml-3 rounded-full">Resume</button>
      </div>
    </div>
  )
}

export default NavBar
