import { navLinks } from '../constants'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <img src={headerLogo} alt="logo" height={30} width={130} />
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* <div className="lg:hidden"> */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="drawer" height={25} width={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
