const NavBar = () => {
  return (
    <div className="navbar fixed top-0 z-[100] justify-between bg-gray-200 px-2 text-black sm:w-full md:top-12 md:w-[80%] md:rounded-full">
      <a className="btn btn-ghost text-xl">Wintory</a>
      <div>
        {/* <ThemeSwitch /> */}
        <button className="btn btn-warning ml-3 rounded-full">
          Download Resume
        </button>
      </div>
    </div>
  )
}

export default NavBar
