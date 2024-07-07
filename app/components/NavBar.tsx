const NavBar = () => {
  return (
    <div className="translate-[calc(-50%, -50%)] navbar fixed left-0 top-0 z-[100] justify-end md:top-5 md:w-[80%]">
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
