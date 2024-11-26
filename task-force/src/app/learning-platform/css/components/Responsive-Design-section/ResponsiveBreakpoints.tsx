"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Animation library

export default function ResponsiveBreakpoints() {
  const [view, setView] = useState("default");

  // Toggle between mobile, tablet, and desktop views
  const handleViewToggle = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Responsive Breakpoints</h1>

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

      {/* Grid Example with Animation */}
      <motion.div
        className={`grid gap-4 ${
          view === "mobile"
            ? "grid-cols-1"
            : view === "tablet"
            ? "grid-cols-2"
            : "grid-cols-4"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-blue-300 p-4 text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Mobile
        </motion.div>
        <motion.div
          className="bg-blue-400 p-4 text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Tablet
        </motion.div>
        <motion.div
          className="bg-blue-500 p-4 text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Desktop
        </motion.div>
        <motion.div
          className="bg-blue-600 p-4 text-center"
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
          The layout changes dynamically based on the selected view (Mobile, Tablet, Desktop) using CSS grid and the{" "}
          <strong>Framer Motion</strong> animation library.
        </p>

        <h4 className="text-md font-semibold">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>grid-cols-1</strong>: Forces all items into one column for mobile view.</li>
          <li><strong>grid-cols-2</strong>: Changes to two columns for tablet view.</li>
          <li><strong>grid-cols-4</strong>: Expands to four columns for desktop view.</li>
        </ul>

        <pre className="bg-gray-800 text-white p-4 rounded">
          {`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Grid Layout</title>
  <style>
    /* Basic reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Body styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    /* Grid container */
    .grid-container {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Auto-fill columns with a minimum width of 200px */
    }

    /* Grid item styling */
    .grid-item {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      transition: transform 0.3s ease-in-out;
    }

    .grid-item:hover {
      transform: scale(1.05);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .grid-container {
        grid-template-columns: repeat(2, 1fr); /* Two columns for tablet-sized screens */
      }
    }

    @media (max-width: 480px) {
      .grid-container {
        grid-template-columns: 1fr; /* Single column for mobile screens */
      }
    }
  </style>
</head>
<body>

  <h1>Responsive Grid Layout</h1>

  <div class="grid-container">
    <div class="grid-item">Mobile</div>
    <div class="grid-item">Tablet</div>
    <div class="grid-item">Desktop</div>
    <div class="grid-item">Large Screen</div>
  </div>

</body>
</html>

          `}
        </pre>
      </div>
    </div>
  );
}
