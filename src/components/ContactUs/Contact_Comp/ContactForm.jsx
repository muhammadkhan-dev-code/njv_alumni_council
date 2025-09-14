import React from 'react'
import {  Send } from "lucide-react";
const ContactForm = () => {
  return (
    <div>
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
                Mobile No 
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
                Email ID 
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
    </div>
  )
}

export default ContactForm
