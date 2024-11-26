// src/components/LearningCard.tsx

import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface LearningCardProps {
  course: Course;
}

export const LearningCard: React.FC<LearningCardProps> = ({ course }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p className="text-white mb-4">{course.description}</p>
      <Link
        href={course.link}
        className="inline-block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-600 transition-colors duration-200"
      >
        Start Learning
      </Link>
    </div>
  );
};
