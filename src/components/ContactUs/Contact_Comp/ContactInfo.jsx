import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'

const ContactInfo = () => {
  const contact_info = [
    {
      icon: <PhoneCall className='w-8 h-8' />,
      title: 'Phone',
      details: ['+92302-2345567']
    },
    {
      icon: <Mail className='w-8 h-8' />,
      title: 'Email',
      details: ['rajputzubair@gmail.in']
    },
    {
      icon: <MapPin className='w-8 h-8' />,
      title: 'Location',
      details: ['NJV Saddar Karachi Near Radio Pakistan ']
    },
    {
      icon: <Clock className='w-8 h-8' />,
      title: 'Hours',
      details: ['Mon - Sat', '09:00 AM – 05:00 PM']
    }
  ]

  return (
    <>
      <h3 className='text-2xl sm:text-3xl font-bold text-white mb-5 mt-12 sm:mt-14 text-center font-serif'>
        We are Available
      </h3>
      <div className='shadow-xl mt-6 sm:mt-8 p-2 sm:p-3 w-full mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {contact_info.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center p-4 sm:px-6 rounded-md bg-white hover:bg-blue-50 transition'
            >
              <div className='text-blue-900 mb-2 transition-transform duration-300 hover:scale-110 hover:text-red-600'>
                {item.icon}
              </div>

              <h4 className='font-semibold text-blue-900 text-base'>
                {item.title}
              </h4>
              {item.details.map((line, idx) => (
                <p key={idx} className='text-gray-700 text-sm mt-1 break-words'>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContactInfo
