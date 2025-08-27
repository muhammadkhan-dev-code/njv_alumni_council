import { Link } from "react-router-dom"
import { HomeIcon, InformationCircleIcon, CalendarIcon, UserGroupIcon, PhoneIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-950 to-blue-900 shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <img
            src="/icon_logo.jpeg"
            alt="logo"
            className="h-10 w-10 rounded-full border-2 border-white shadow-sm group-hover:shadow-lg group-hover:shadow-red-500 transition duration-300"
          />
          <span className="text-xl font-bold text-white tracking-wide font-serif group-hover:text-cyan-400 transition duration-300">
            NJV Alumni Council
          </span>
        </div>

        {/* Center Menu */}
        <ul className="flex space-x-6 text-white font-medium text-base">
          <li>
            <Link
              to="/home"
              className="nav-link"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="nav-link"
            >
              <InformationCircleIcon className="w-5 h-5" />
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              className="nav-link"
            >
              <CalendarIcon className="w-5 h-5" />
              <span>Events</span>
            </Link>
          </li>

          <li>
            <Link
              to="/alumni-directory"
              className="nav-link"
            >
              <UserGroupIcon className="w-5 h-5" />
              <span>Alumni Directory</span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="nav-link"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>

        {/* Donate Button (Right Side) */}
        <div>
          <Link
            to="/donate"
            className="bg-yellow-500 hover:bg-orange-500  text-black font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Donate
          </Link>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
