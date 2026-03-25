import {
  AcademicCapIcon,
  CalendarDaysIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { alumniPosts } from '../../data/contentData'

const schoolImages = {
  hero: 'https://schoolvisor.org/wp-content/uploads/2021/09/NJV-School-3.jpg',
  legacy: 'https://schoolvisor.org/wp-content/uploads/2021/09/NJV-School-3.jpg'
}

const statsConfig = [
  {
    key: 'alumni',
    icon: UserGroupIcon,
    label: 'Registered Alumni',
    target: 5000,
    suffix: '+'
  },
  {
    key: 'legacy',
    icon: CalendarDaysIcon,
    label: 'Years of Legacy',
    target: 160,
    suffix: '+'
  },
  {
    key: 'programs',
    icon: AcademicCapIcon,
    label: 'Mentorship Programs',
    target: 50,
    suffix: '+'
  },
  {
    key: 'spirit',
    icon: HeartIcon,
    label: 'NJV Spirit',
    target: 100,
    suffix: '%'
  }
]

const initialStats = statsConfig.reduce((accumulator, stat) => {
  accumulator[stat.key] = 0
  return accumulator
}, {})

export default function Home () {
  const [animatedStats, setAnimatedStats] = useState(initialStats)
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsSectionRef = useRef(null)

  useEffect(() => {
    const node = statsSectionRef.current
    if (!node || hasAnimated) return

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (!entry?.isIntersecting) return

        setHasAnimated(true)
        observer.disconnect()
      },
      {
        threshold: 0.35
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    const duration = 1700
    const startTime = performance.now()

    const step = currentTime => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      const nextStats = statsConfig.reduce((accumulator, stat) => {
        accumulator[stat.key] = Math.floor(stat.target * easedProgress)
        return accumulator
      }, {})

      setAnimatedStats(nextStats)

      if (progress < 1) {
        globalThis.requestAnimationFrame(step)
      }
    }

    const animationId = globalThis.requestAnimationFrame(step)

    return () => globalThis.cancelAnimationFrame(animationId)
  }, [hasAnimated])

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

      {/* Latest Posts Section */}
      <section className='w-full max-w-7xl mx-auto py-20 px-6'>
        <div className='flex items-end justify-between gap-4 mb-10 flex-wrap'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-blue-900 font-semibold mb-2'>
              Latest from NJV Alumni
            </p>
            <h2 className='text-4xl font-bold text-gray-800 font-serif'>
              Stories, Milestones and Opportunities
            </h2>
          </div>
          <Link
            to='/events'
            className='text-blue-900 hover:text-blue-700 font-semibold transition'
          >
            Explore all updates
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {alumniPosts.map(post => (
            <article
              key={post.id}
              className='bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col group'
            >
              <div className='h-52 overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                />
              </div>
              <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>
                  {post.title}
                </h3>
                <p className='text-gray-600 mb-6 flex-1'>{post.excerpt}</p>
                <Link
                  to={`/posts/${post.slug}`}
                  className='inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition'
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsSectionRef} className='w-full bg-blue-900 py-16'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {statsConfig.map(stat => {
            const StatIcon = stat.icon
            return (
              <div key={stat.key} className='flex flex-col items-center'>
                <StatIcon className='w-12 h-12 text-yellow-400 mb-4' />
                <span className='text-4xl font-bold text-white mb-2'>
                  {animatedStats[stat.key]}
                  {stat.suffix}
                </span>
                <span className='text-blue-200'>{stat.label}</span>
              </div>
            )
          })}
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
        <div className='flex gap-4 flex-wrap items-center justify-center'>
          <Link
            to='/contact-us'
            className='bg-blue-950 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition duration-300 text-lg'
          >
            Get In Touch
          </Link>
          <Link
            to='/donate'
            className='bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg transition duration-300 text-lg'
          >
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  )
}
