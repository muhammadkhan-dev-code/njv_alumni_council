import { Link, useParams } from 'react-router-dom'
import { alumniEvents } from '../../data/contentData'

export default function EventDetails () {
  const { slug } = useParams()
  const event = alumniEvents.find(item => item.slug === slug)

  if (!event) {
    return (
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <h1 className='text-3xl font-bold text-slate-900 mb-4 font-serif'>
          Event not found
        </h1>
        <p className='text-slate-600 mb-6'>
          The event details are unavailable right now.
        </p>
        <Link
          to='/events'
          className='inline-flex bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition'
        >
          Back to Events
        </Link>
      </section>
    )
  }

  return (
    <article className='w-full bg-slate-50'>
      <section className='max-w-6xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 items-start'>
          <div className='lg:col-span-3'>
            <p className='text-xs uppercase tracking-[0.22em] text-blue-700 font-semibold mb-4'>
              {event.type} Event
            </p>
            <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif leading-tight'>
              {event.title}
            </h1>
            <p className='text-slate-600 mb-8'>
              {event.date} • {event.time} • {event.location}
            </p>

            <img
              src={event.image}
              alt={event.title}
              className='w-full h-[420px] object-cover rounded-3xl shadow-md mb-8'
            />

            <div className='bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5 text-slate-700 text-lg leading-relaxed'>
              {event.fullDetails.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className='lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm'>
            <h2 className='text-2xl font-bold text-slate-900 mb-4 font-serif'>
              Event Quick Info
            </h2>
            <div className='space-y-2 text-slate-700'>
              <p>
                <strong>Organizer:</strong> {event.organizer}
              </p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>

            <h3 className='text-lg font-semibold text-slate-900 mt-6 mb-3'>
              Key Agenda
            </h3>
            <ul className='space-y-2 text-slate-700 list-disc pl-5'>
              {event.agenda.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className='mt-8 space-y-3'>
              <Link
                to='/contact-us'
                className='block text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-lg transition'
              >
                Register Interest
              </Link>
              <Link
                to='/donate'
                className='block text-center bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-5 py-3 rounded-lg transition'
              >
                Sponsor This Event
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </article>
  )
}
