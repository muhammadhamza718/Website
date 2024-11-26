// File: src/app/page.tsx
import "../styles/components/page.modules.css";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center pt-32 pl-5 pr-5">
      <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">
        Welcome to My Portfolio
      </h1>

      <p className="text-lg mb-8 animate-fadeInUp">
        I&apos;m a web developer passionate about building tools and solving problems. Here&lsquo;s a look at my work!
      </p>

      <div className="flex space-x-6 mb-8 animate-fadeInUp">
        <Link href="/about" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300">
          About Me
        </Link>
        <Link href="/contact" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300">
          Contact Me
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4 animate-fadeInUp">
        My Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Link 
          href="/task-management" 
          className="bg-gray-800 p-6 rounded-lg animate-fadeInUp hover:bg-gray-700 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">Task Management</h3>
          <p>A tool to help you manage tasks efficiently.</p>
        </Link>
        <Link 
          href="/weather-app" 
          className="bg-gray-800 p-6 rounded-lg animate-fadeInUp hover:bg-gray-700 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p>Get real-time weather updates for any location.</p>
        </Link>
        <Link 
          href="/quiz-app" 
          className="bg-gray-800 p-6 rounded-lg animate-fadeInUp hover:bg-gray-700 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">Quiz App</h3>
          <p>Take quizzes to test your knowledge.</p>
        </Link>
        <Link 
          href="/learning-platform" 
          className="bg-gray-800 p-6 rounded-lg animate-fadeInUp hover:bg-gray-700 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">Learning Platform</h3>
          <p>Learn new skills through interactive lessons.</p>
        </Link>
        <Link 
          href="/dashboard" 
          className="bg-gray-800 p-6 rounded-lg animate-fadeInUp hover:bg-gray-700 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">Dashboard</h3>
          <p>Track your progress and manage your projects.</p>
        </Link>
      </div>
    </div>
  );
}
