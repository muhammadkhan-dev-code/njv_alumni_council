import ContactForm from './Contact_Comp/ContactForm';
import ContactInfo from './Contact_Comp/ContactInfo';

const contactHighlights = [
  'General queries and alumni registration support',
  'Event collaboration and partnership opportunities',
  'Mentorship, volunteering, and contribution requests'
]

export default function ContactUs() {
  return (
    <div className="w-full bg-blue-950 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center ">
        <h2 className="text-4xl font-semibold text-white  font-serif mb-8">We’re Just a Message Away.</h2>
        <p className="text-white my-3 font-serif text-xl ">
          This is your direct gateway to the NJV Alumni Council. Whether you have an inquiry, feedback, or an idea to contribute, we’re here to help you connect with the right team.</p>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mt-8 mb-10 text-left">
          <h3 className="text-white text-2xl font-bold font-serif mb-4 text-center">How We Can Help</h3>
          <ul className="space-y-3">
            {contactHighlights.map(item => (
              <li key={item} className="text-blue-100 flex items-start gap-3 text-lg">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-blue-100 mt-5 text-center">Our team typically responds within 24–48 hours on working days.</p>
        </div>

         <ContactForm/>
          <ContactInfo/>
     
      </div>
      <div className='bg-white w-full h-1 mt-4'> </div>
    </div>
  );
}
