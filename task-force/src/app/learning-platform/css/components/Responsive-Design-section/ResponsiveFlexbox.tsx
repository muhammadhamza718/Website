"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Animation library

export default function FlexboxSection() {
  const [view, setView] = useState("default");

  // Toggle between mobile, tablet, and desktop views
  const handleViewToggle = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Responsive Flexbox</h1>

      {/* Buttons to Toggle View */}
      <div className="text-center mb-6">
        <button
          onClick={() => handleViewToggle("mobile")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800 mr-4"
        >
          Mobile View
        </button>
        <button
          onClick={() => handleViewToggle("tablet")}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 active:bg-green-800 mr-4"
        >
          Tablet View
        </button>
        <button
          onClick={() => handleViewToggle("desktop")}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 active:bg-red-800"
        >
          Desktop View
        </button>
      </div>

      {/* Flexbox Example with Animation */}
      <motion.div
        className={`flex flex-wrap gap-4 ${view === "mobile" ? "justify-center" : view === "tablet" ? "justify-between" : "justify-around"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-blue-300 p-4 text-center w-full sm:w-1/2 lg:w-1/4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Mobile
        </motion.div>
        <motion.div
          className="bg-blue-400 p-4 text-center w-full sm:w-1/2 lg:w-1/4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Tablet
        </motion.div>
        <motion.div
          className="bg-blue-500 p-4 text-center w-full sm:w-1/2 lg:w-1/4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Desktop
        </motion.div>
        <motion.div
          className="bg-blue-600 p-4 text-center w-full sm:w-1/2 lg:w-1/4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Large Screen
        </motion.div>
      </motion.div>

      {/* Code Explanation */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">How This Works</h3>
        <p className="text-gray-600 mb-4">
          The layout changes dynamically based on the selected view (Mobile, Tablet, Desktop) using CSS Flexbox and the{" "}
          <strong>Framer Motion</strong> animation library.
        </p>

        <h4 className="text-md font-semibold">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>justify-center</strong>: Centers the items for mobile view.</li>
          <li><strong>justify-between</strong>: Distributes items with space between them for tablet view.</li>
          <li><strong>justify-around</strong>: Distributes items with space around them for desktop view.</li>
        </ul>

        <pre className="bg-gray-800 text-white p-4 rounded">
          {`
.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}
          `}
        </pre>
      </div>
    </div>
  );
}
