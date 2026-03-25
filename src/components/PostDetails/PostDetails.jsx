import { Link, useParams } from 'react-router-dom'
import { alumniPosts } from '../../data/contentData'

export default function PostDetails () {
  const { slug } = useParams()
  const post = alumniPosts.find(item => item.slug === slug)

  if (!post) {
    return (
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <h1 className='text-3xl font-bold text-slate-900 mb-4 font-serif'>
          Post not found
        </h1>
        <p className='text-slate-600 mb-6'>
          The post you are looking for does not exist or may have been moved.
        </p>
        <Link
          to='/'
          className='inline-flex bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition'
        >
          Back to Home
        </Link>
      </section>
    )
  }

  return (
    <article className='w-full bg-slate-50'>
      <section className='max-w-5xl mx-auto px-6 py-12'>
        <p className='text-xs uppercase tracking-[0.22em] text-blue-700 font-semibold mb-4'>
          {post.category}
        </p>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif leading-tight'>
          {post.title}
        </h1>
        <p className='text-slate-500 mb-8'>
          By {post.author} • {post.date} • {post.readTime}
        </p>

        <img
          src={post.coverImage || post.image}
          alt={post.title}
          className='w-full h-[420px] object-cover rounded-3xl shadow-md mb-10'
        />

        <div className='bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5 text-slate-700 text-lg leading-relaxed'>
          {post.body.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className='mt-10 flex flex-wrap gap-4'>
          <Link
            to='/donate'
            className='bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-6 py-3 rounded-lg transition'
          >
            Support This Cause
          </Link>
          <Link
            to='/events'
            className='bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition'
          >
            See Upcoming Events
          </Link>
        </div>
      </section>
    </article>
  )
}
