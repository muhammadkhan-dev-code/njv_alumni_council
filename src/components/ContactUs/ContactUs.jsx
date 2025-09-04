import ContactForm from './Contact_Comp/ContactForm'
import ContactInfo from './Contact_Comp/ContactInfo'

export default function ContactUs() {
  return (
    <div className="w-full bg-blue-950 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center ">
        <h2 className="text-4xl font-semibold text-white  font-serif mb-8">We’re Just a Message Away.</h2>
        <p className="text-white my-3 font-serif text-xl ">
          This is your gateway to connect with us directly. Whether you have inquiries, feedback, or simply want to say hello.</p>
         <ContactForm/>
          <ContactInfo/>
     
      </div>
      <div className='bg-white w-full h-1 mt-4'> </div>
    </div>
  );
}
