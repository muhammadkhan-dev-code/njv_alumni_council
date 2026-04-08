import { alumniEvents } from '../../data/contentData'
import EventCard from './Event_Comp/EventCard.jsx'

export default function Events () {
  return (
    <div className='w-full min-h-screen bg-gray-50 py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12 sm:mb-16 space-y-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 font-serif tracking-tight'>
            Upcoming Events
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Stay engaged with the NJV Alumni community. Participate in reunions,
            workshops, and charity events to give back and grow together.
          </p>
          <p className='text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold'>
            Campus Inspired • Alumni Driven
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {alumniEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
