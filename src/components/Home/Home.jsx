import {
  AcademicCapIcon,
  CalendarDaysIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const schoolImages = {
  hero: 'https://schoolvisor.org/wp-content/uploads/2021/09/NJV-School-3.jpg',
  legacy: 'https://schoolvisor.org/wp-content/uploads/2021/09/NJV-School-3.jpg'
}

export default function Home () {
  return (
    <div className='w-full flex flex-col items-center bg-gray-50'>
      {/* Hero Section */}
      <section className='relative w-full h-[600px] flex items-center justify-center bg-blue-950 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={schoolImages.hero}
            alt='NJV School Campus'
            className='w-full h-full object-cover opacity-30'
          />
        </div>
        <div className='relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-6 font-serif tracking-tight drop-shadow-lg'>
            Welcome to the NJV Alumni Council
          </h1>
          <p className='text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light'>
            Uniting former students on a single platform where memories,
            experiences, and aspirations converge.
          </p>
          <div className='flex gap-4 flex-wrap justify-center'>
            <Link
              to='/alumni-directory'
              className='bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 text-lg'
            >
              Find Alumni
            </Link>
            <Link
              to='/about'
              className='bg-transparent border-2 border-white hover:bg-white hover:text-blue-950 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 text-lg'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='w-full max-w-7xl mx-auto py-20 px-6'>
        <div className='flex flex-col md:flex-row gap-12 items-center'>
          <div className='flex-1'>
            <h2 className='text-4xl font-bold text-gray-800 mb-6 font-serif'>
              Preserving Our Legacy
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed mb-6'>
              The NJV Alumni Council serves as a bridge between alumni and their
              alma mater, fostering a sense of belonging while opening avenues
              for mentorship, professional networking, and community service.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              By connecting generations of graduates, we strive to preserve
              NJV’s spirit, celebrate its legacy, and contribute meaningfully to
              the growth and success of its current and future students.
            </p>
          </div>
          <div className='flex-1 relative'>
            <div className='absolute inset-0 bg-blue-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10'></div>
            <img
              src={schoolImages.legacy}
              alt='Students'
              className='w-full h-auto rounded-2xl shadow-xl object-cover hover:scale-105 transition duration-500'
            />
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className='w-full bg-blue-900 py-16'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          <div className='flex flex-col items-center'>
            <UserGroupIcon className='w-12 h-12 text-yellow-400 mb-4' />
            <span className='text-4xl font-bold text-white mb-2'>5000+</span>
            <span className='text-blue-200'>Registered Alumni</span>
          </div>
          <div className='flex flex-col items-center'>
            <CalendarDaysIcon className='w-12 h-12 text-yellow-400 mb-4' />
            <span className='text-4xl font-bold text-white mb-2'>160+</span>
            <span className='text-blue-200'>Years of Legacy</span>
          </div>
          <div className='flex flex-col items-center'>
            <AcademicCapIcon className='w-12 h-12 text-yellow-400 mb-4' />
            <span className='text-4xl font-bold text-white mb-2'>50+</span>
            <span className='text-blue-200'>Mentorship Programs</span>
          </div>
          <div className='flex flex-col items-center'>
            <HeartIcon className='w-12 h-12 text-yellow-400 mb-4' />
            <span className='text-4xl font-bold text-white mb-2'>100%</span>
            <span className='text-blue-200'>NJV Spirit</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='w-full py-20 bg-white text-center px-6'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6 font-serif'>
          Stay Connected
        </h2>
        <p className='text-lg text-gray-600 mb-10 max-w-2xl mx-auto'>
          Don't miss out on upcoming reunions, networking events, and the latest
          news from the NJV Alumni community.
        </p>
        <Link
          to='/contact-us'
          className='bg-blue-950 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition duration-300 text-lg'
        >
          Get In Touch
        </Link>
      </section>
    </div>
  )
}
