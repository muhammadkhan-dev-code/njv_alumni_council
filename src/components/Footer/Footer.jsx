import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-gray-300 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8'>
          <div className='flex items-center gap-2 text-center lg:text-left'>
            <div className='text-purple-500 text-3xl sm:text-4xl font-bold'>
              NJV
            </div>
            <span className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
              Alumni Council
            </span>
          </div>
          <nav className='flex flex-col items-center gap-3 text-sm'>
            <h3 className='text-lg sm:text-xl font-bold'>Quick Links</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-x-6 gap-y-2 text-center'>
              <NavLink
                to='/'
                end
                className={({ isActive }) =>
                  isActive
                    ? 'text-white underline font-bold text-base sm:text-lg'
                    : 'hover:text-white'
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive
                    ? 'text-white underline font-bold text-base sm:text-lg'
                    : 'hover:text-white'
                }
              >
                About
              </NavLink>
              <NavLink
                to='/events'
                className={({ isActive }) =>
                  isActive
                    ? 'text-white underline font-bold text-base sm:text-lg'
                    : 'hover:text-white'
                }
              >
                Events
              </NavLink>
              <NavLink
                to='/alumni-directory'
                className={({ isActive }) =>
                  isActive
                    ? 'text-white underline font-bold text-base sm:text-lg'
                    : 'hover:text-white'
                }
              >
                Alumni Directory
              </NavLink>
              <NavLink
                to='/contact-us'
                className={({ isActive }) =>
                  isActive
                    ? 'text-white underline font-bold text-base sm:text-lg'
                    : 'hover:text-white'
                }
              >
                Contact Us
              </NavLink>
            </div>
          </nav>
          <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400 transition'
            >
              <FaFacebook size={28} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400 transition'
            >
              <FaTwitter size={28} />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400 transition'
            >
              <FaInstagram size={28} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400 transition'
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400 transition'
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        <hr className='my-6 border-gray-700' />
        <div className='mx-auto text-center text-sm sm:text-base text-gray-400'>
          © njvalumni 2025, All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
