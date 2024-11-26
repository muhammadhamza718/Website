"use client";
import { useState } from "react";

export default function GridItemPlacementExercises() {
  const [gapSize, setGapSize] = useState<string>("2"); // Default gap size
  const [placement, setPlacement] = useState<{ [key: string]: string }>({
    "1": "auto",
    "2": "auto",
    "3": "auto",
    "4": "auto",
    "5": "auto",
    "6": "auto",
  });

  // Handle gap change
  const handleGapChange = (size: string) => {
    setGapSize(size);
  };

  // Handle placement change
  const handlePlacementChange = (item: string, position: string) => {
    setPlacement((prev) => ({
      ...prev,
      [item]: position,
    }));
  };

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Set Grid Gap and Item Placement</h3>
      <p className="text-md mb-4">Adjust the space between grid items and place them in specific positions within the grid.</p>

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

      {/* Item Placement Buttons */}
      <div className="mb-8">
        {['1', '2', '3', '4', '5', '6'].map(item => (
          <div key={item} className="mb-4">
            <span className="mr-2">Item {item} Placement:</span>
            {['auto', '1', '2', '3'].map(position => (
              <button
                key={position}
                onClick={() => handlePlacementChange(item, position)}
                className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-2 ${placement[item] === position ? "bg-green-600" : ""}`}
              >
                {position}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Grid Layout with Gap and Item Placement */}
      <div
        className="grid grid-cols-3 bg-gray-100"
        style={{
          gridTemplateRows: "auto auto auto", // Ensure 3 rows are shown
          gap: `${gapSize}px`, // Apply gap size dynamically via inline style
        }}
      >
        <div className={`bg-gray-300 p-4`} style={{ gridColumn: placement["1"], gridRow: placement["1"] }}>Item 1</div>
        <div className={`bg-gray-400 p-4`} style={{ gridColumn: placement["2"], gridRow: placement["2"] }}>Item 2</div>
        <div className={`bg-gray-500 p-4`} style={{ gridColumn: placement["3"], gridRow: placement["3"] }}>Item 3</div>
        <div className={`bg-gray-600 p-4`} style={{ gridColumn: placement["4"], gridRow: placement["4"] }}>Item 4</div>
        <div className={`bg-gray-700 p-4`} style={{ gridColumn: placement["5"], gridRow: placement["5"] }}>Item 5</div>
        <div className={`bg-gray-800 p-4`} style={{ gridColumn: placement["6"], gridRow: placement["6"] }}>Item 6</div>
      </div>
    </section>
  );
}
