import EventCard from './Event_Comp/EventCard.jsx'

const dummyEvents = [
  {
    id: 1,
    title: 'Annual Alumni Meetup 2026',
    date: 'November 15, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'NJV School Main Campus',
    description:
      'Join us for our biggest event of the year! Reconnect with old friends, meet the current faculty, and celebrate our shared legacy.',
    image:
      'https://schoolvisor.org/wp-content/uploads/2021/09/NJV-School-4.jpg',
    type: 'Reunion'
  },
  {
    id: 2,
    title: 'Tech Career Mentorship Session',
    date: 'July 22, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Auditorium, NJV School',
    description:
      'Experienced alumni from top tech companies will share insights, review resumes, and offer career guidance to fresh graduates.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    type: 'Workshop'
  },
  {
    id: 3,
    title: 'Charity Fundraising Dinner',
    date: 'December 05, 2026',
    time: '7:30 PM - 11:00 PM',
    location: 'Grand Pearl Hotel, City Center',
    description:
      "A formal dinner aiming to raise funds for the NJV Scholarship Program. Let's contribute to shaping the future leaders.",
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    type: 'Charity'
  },
  {
    id: 4,
    title: 'Sports Gala: Alumni vs Students',
    date: 'February 10, 2027',
    time: '9:00 AM - 4:00 PM',
    location: 'NJV Sports Complex',
    description:
      'Dust off your running shoes! The annual sports gala features cricket, football, and athletics competitions between alumni and current students.',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    type: 'Sports'
  }
]

export default function Events () {
  return (
    <div className='w-full min-h-screen bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16 space-y-4'>
          <h1 className='text-5xl font-extrabold text-blue-950 font-serif tracking-tight'>
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
          {dummyEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
