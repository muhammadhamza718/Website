import React, { useState } from "react";

const tips = [
  "Break your study sessions into focused intervals.",
  "Review your notes after every lesson.",
  "Teach someone else to reinforce your knowledge.",
  "Take regular breaks to improve focus.",
  "Set specific goals for each study session.",
];

const StudyTips = () => {
  const [currentTip, setCurrentTip] = useState(
    tips[Math.floor(Math.random() * tips.length)]
  );

  const getNewTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(randomTip);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Study Tips</h2>
      <p className="text-gray-300 mb-4">{currentTip}</p>
      <button
        onClick={getNewTip}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show Another Tip
      </button>
    </div>
  );
};

export default StudyTips;
