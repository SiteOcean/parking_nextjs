import Navbar from '@/components/navbarComponent';
import React from 'react';

export default function Contact() {
  return (
   <div>
    <Navbar/>
    <div className="min-h-screen capitalize bg-gradient-to-r from-blue-100 to-purple-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">Contact Me</h1>
      <div className="max-w-2xl relative  bg-gradient-to-r from-blue-300 via-purple-400 to-blue-400 shadow-lg rounded-tr-3xl rounded-bl-3xl p-6 text-white">
        <div className='w-[96%] h-[5px] bg-[#268ebe] absolute top-0 left-0 right-0 rounded-full'></div>
        <p className="text-lg mb-4">
          reach out to me using the contact details below:
        </p>
        <div className="flex flex-col gap-y-4">
          <p>
            <span className="font-bold">Name:</span> Sathish Dev
          </p>
          <p>
            <span className="font-bold">Mobile:</span> 
            <a href="tel:9856535653" className="text-blue-800"> 9856535653</a>
          </p>
          <p>
          <span className="font-bold">Mobile:</span> 
          <a href="mailto:sathish5888@gmail.com" className="text-blue-800 underline"> sathish5888@gmail.com</a>
          </p>
          <p>
            <span className="font-bold">Address:</span> Sulur, Coimbatore, Tamil Nadu
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}
