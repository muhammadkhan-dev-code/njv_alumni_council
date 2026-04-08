import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: HomeIcon, end: true },
    { to: '/about', label: 'About', icon: InformationCircleIcon },
    { to: '/events', label: 'Events', icon: CalendarIcon },
    {
      to: '/alumni-directory',
      label: 'Alumni Directory',
      icon: UserGroupIcon
    },
    { to: '/contact-us', label: 'Contact Us', icon: PhoneIcon }
  ]

  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-gradient-to-r from-blue-950 to-blue-900 shadow-md sticky top-0 z-30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 h-14 flex justify-between items-center'>
          <Link
            to='/'
            className='flex items-center space-x-2 cursor-pointer group min-w-0'
          >
            <img
              src='/icon_logo.jpeg'
              alt='logo'
              className='h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-white shadow-sm group-hover:shadow-lg group-hover:shadow-red-500 transition duration-300 shrink-0'
            />
            <span className='text-sm sm:text-base lg:text-xl font-bold text-white tracking-wide font-serif group-hover:text-orange-500 transition duration-300 truncate'>
              NJV Alumni Council
            </span>
          </Link>

          <ul className='hidden lg:flex space-x-6 font-medium text-base'>
            {navItems.map(item => {
              const Icon = item.icon
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex items-center space-x-1 px-2 py-1 rounded-md transition duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`
                    }
                  >
                    <Icon className='w-5 h-5' />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>

          {/* Donate Button (Right Side) */}
          <div className='hidden sm:block'>
            <Link
              to='/donate'
              className='bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer'
            >
              Donate
            </Link>
          </div>

          <button
            type='button'
            aria-label='Toggle navigation menu'
            className='lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 transition'
            onClick={() => setIsMobileMenuOpen(open => !open)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3Icon className='w-6 h-6' />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className='lg:hidden border-t border-blue-800/70 px-4 pb-4'>
            <ul className='flex flex-col gap-1 pt-3'>
              {navItems.map(item => {
                const Icon = item.icon
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                          isActive
                            ? 'bg-blue-800 text-white'
                            : 'text-gray-200 hover:bg-blue-800/70 hover:text-white'
                        }`
                      }
                    >
                      <Icon className='w-5 h-5' />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
            <Link
              to='/donate'
              onClick={() => setIsMobileMenuOpen(false)}
              className='mt-3 block w-full text-center bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300'
            >
              Donate
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
