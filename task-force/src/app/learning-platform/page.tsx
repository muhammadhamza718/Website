// src/app/learning-platform/page.tsx
import { LearningCard } from "@/components/LearningCard";
import "@/styles/components/page.modules.css";

export default function LearningPlatform() {
    const courses = [
        { id: 1, title: "Introduction to JavaScript", description: "Learn the basics of JavaScript programming.", link: "/learning-platform/javascript" },
        { id: 2, title: "React for Beginners", description: "A beginner's guide to React, including components and hooks.", link: "/learning-platform/react" },
        { id: 3, title: "Advanced CSS", description: "Take your CSS skills to the next level with advanced techniques.", link: "/learning-platform/css" },
        //this is for comming soon!
        { id: 4, title: "More will be Come Soon", description: "Coming Soon", link: "/learning-platform" },
      ];      

  return (
    <div className="min-h-screebg-gray-100 p-8 pt-24 text-white animate-fadeInUp">
      <h1 className="text-3xl font-bold text-center mb-8">Learning Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <LearningCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
