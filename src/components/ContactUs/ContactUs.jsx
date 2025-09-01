import React from "react";
import { Mail, PhoneCall, MapPin, Clock, Send } from "lucide-react";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: "Phone",
      details: ["+92302-2345567"],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: ["rajputzubair@gmail.in"],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      details: ["NJV Saddar Karachi Near Radio Pakistan "],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Hours",
      details: ["Mon - Sat", "09:00 AM – 05:00 PM"],
    },
  ];
  return (
    <div className="w-full bg-blue-950 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white  font-serif mb-8">
          We’re Just a Message Away{" "}
        </h2>
        <p className="text-white my-3 font-serif text-xl ">
          This is your gateway to connect with us directly. Whether you have
          inquiries, feedback, or simply want to say hello.
        </p>

        <div className="bg-white shadow-xl rounded-md mt-10 p-10 w-full max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <input
                type="text"
                id="firstName"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-900 focus:outline-none text-lg"
                placeholder="First Name"
              />
              <label
                htmlFor="firstName"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-900"
              >
                First Name *
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-900 focus:outline-none text-lg"
                placeholder="Last Name"
              />
              <label
                htmlFor="lastName"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-900"
              >
                Last Name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="mobile"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-900 focus:outline-none text-lg"
                placeholder="Mobile No"
              />
              <label
                htmlFor="mobile"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-900"
              >
                Mobile No *
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-900 focus:outline-none text-lg"
                placeholder="Email ID"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-900"
              >
                Email ID *
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="5"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-900 focus:outline-none text-lg"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-900"
              >
                Message
              </label>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg w-full font-medium hover:bg-blue-800 hover:gap-3 transition-all text-lg"
            >
              <Send className="w-6 h-6" /> Submit
            </button>
          </div>
        </div>

        <div className="shadow-xl mt-12 p-3 w-ful mx-auto">
          <h3 className="text-3xl font-bold text-white mb-5 text-center font-serif">
            We are Available
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 px-6 rounded-md bg-white hover:bg-blue-50 transition"
              >
                <div className="text-blue-900 mb-2 transition-transform duration-300 hover:scale-110 hover:text-red-600">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-blue-900 text-base">
                  {item.title}
                </h4>
                {item.details.map((line, i) => (
                  <p key={i} className="text-gray-700 text-sm mt-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
