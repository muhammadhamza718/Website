"use client";
import { useState } from "react";

export default function GridGapExercises() {
  const [gapSize, setGapSize] = useState<string>("2"); // Default gap size

  // Handle gap change
  const handleGapChange = (size: string) => {
    setGapSize(size);
  };

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Set Grid Gap</h3>
      <p className="text-md mb-4">Adjust the space between grid items using the slider below.</p>

      {/* Gap Size Buttons */}
      <div className="mb-8">
        {['1', '2', '4', '8', '16'].map(size => (
          <button
            key={size}
            onClick={() => handleGapChange(size)}
            className={`px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-600 text-white rounded mr-4 ${gapSize === size ? "bg-blue-600" : ""}`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Grid Layout with Gap */}
      <div
        className="grid grid-cols-3 bg-gray-100"
        style={{ gridGap: `${gapSize}px`, gridTemplateRows: "auto auto auto" }} // Use inline style for gap
      >
        <div className="bg-gray-300 p-4">Item 1</div>
        <div className="bg-gray-400 p-4">Item 2</div>
        <div className="bg-gray-500 p-4">Item 3</div>
        <div className="bg-gray-600 p-4">Item 4</div>
        <div className="bg-gray-700 p-4">Item 5</div>
        <div className="bg-gray-800 p-4">Item 6</div>
      </div>
    </section>
  );
}
