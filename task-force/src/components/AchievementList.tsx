import React from "react";

interface AchievementListProps {
  achievements: { id: number; message: string }[];
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
    <ul className="space-y-2">
      {achievements.map((achievement) => (
        <li
          key={achievement.id}
          className="bg-gray-700 p-3 rounded-lg shadow-md hover:bg-gray-600"
        >
          {achievement.message}
        </li>
      ))}
    </ul>
  </div>
);

export default AchievementList;
