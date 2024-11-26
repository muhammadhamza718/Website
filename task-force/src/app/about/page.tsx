// File: src/app/about/page.tsx
import "@/styles/components/page.modules.css";
import React from 'react';

export default function About() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-4 animate-fadeInUp">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-gray-100 mb-8">About Me</h1>
        <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed">
          I&apos;m a dedicated web developer with a focus on crafting modern, dynamic, and responsive web applications. With expertise in frontend technologies such as React, Next.js, and Tailwind CSS, I am constantly learning and growing to build high-performance, scalable solutions.
        </p>

        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg">
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">Next.js</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">HTML</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">CSS</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">React</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">Tailwind CSS</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">Node.js</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">Git</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h3 className="font-semibold text-gray-200">GitHub</h3>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4">Contact Info</h2>
          <p className="text-lg text-gray-300">Feel free to reach out to me through any of the following platforms:</p>
          <ul className="list-none space-y-2 mt-4 text-lg text-gray-300">
            <li>Email: <a href="mailto:mhamza77188@gmail.com" className="text-blue-400 hover:underline">mhamza77188@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-hamza-816290320/" target='_blank' className="text-blue-400 hover:underline">Muhammad Hamza</a></li>
            <li>Facebook: <a href="https://www.facebook.com/profile.php?id=100089787627729" target='_blank' className="text-blue-400 hover:underline">Muhammad Hamza</a></li>
            <li>Instagram: <a href="https://www.instagram.com/mhamza7718/" target='_blank' className="text-blue-400 hover:underline">mhamza7718</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
