import Navbar from '@/components/navbarComponent';
import React from 'react';

export default function About() {
  return (
  <div>
    <Navbar/>
      <div className="min-h-[80vh] bg-gradient-to-r from-blue-100 to-purple-100 p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-500 mb-6">About Me</h1>
      <div className="max-w-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg rounded-tr-3xl rounded-bl-3xl p-6 text-white">
        <p className="text-lg mb-4">
          Hi, I'm <span className="font-bold text-gray-800">Sathish Dev</span>. 
        </p>
        <p className="text-lg mb-4">
          I'm a passionate and experienced software developer with expertise in building scalable, efficient, and user-friendly web and mobile applications. I specialize in full-stack development, with a focus on modern frameworks and technologies.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills & Expertise</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Proficient in JavaScript, React.js, Node.js, and MongoDB.</li>
          <li>Skilled in designing responsive and visually appealing frontends using Tailwind CSS and Next.js.</li>
          <li>Experience in developing RESTful APIs and integrating them with frontend frameworks.</li>
          <li>Knowledge of database management with MongoDB and Mongoose.</li>
          <li>Experience in building scalable backend systems with Node.js and Express.</li>
          <li>understanding of version control systems like Git.</li>
        </ul>
        <p className="text-lg mt-4">
          My goal is to deliver high-quality software solutions that meet the needs of clients and users while continuously upgrading my skills to stay on top of industry trends.
        </p>
      </div>
    </div>
  </div>
  );
}
