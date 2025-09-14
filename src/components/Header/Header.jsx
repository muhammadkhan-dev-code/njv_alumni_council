import { NavLink, Link } from "react-router-dom";
import { HomeIcon, InformationCircleIcon, CalendarIcon, UserGroupIcon, PhoneIcon } from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-gradient-to-r from-blue-950 to-blue-900 shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
      
          <div className="flex items-center space-x-2 cursor-pointer group ">
            <img
              src="/icon_logo.jpeg"
              alt="logo"
              className="h-10 w-10 rounded-full border-2 border-white shadow-sm group-hover:shadow-lg group-hover:shadow-red-500 transition duration-300"
            />
            <span className="text-xl font-bold text-white tracking-wide font-serif group-hover:text-orange-500 transition duration-300">
              NJV Alumni Council
            </span>
          </div>

          
          <ul className="flex space-x-6 font-medium text-base">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-2 py-1 rounded-md transition duration-200 
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-2 py-1 rounded-md transition duration-200 
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                <InformationCircleIcon className="w-5 h-5" />
                <span>About</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-2 py-1 rounded-md transition duration-200 
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                <CalendarIcon className="w-5 h-5" />
                <span>Events</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alumni-directory"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-2 py-1 rounded-md transition duration-200 
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                <UserGroupIcon className="w-5 h-5" />
                <span>Alumni Directory</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-2 py-1 rounded-md transition duration-200 
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Contact Us</span>
              </NavLink>
            </li>
          </ul>

          {/* Donate Button (Right Side) */}
          <div>
            <Link
              to="/donate"
              className="bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer"
            >
              Donate
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
