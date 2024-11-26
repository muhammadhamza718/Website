"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ResponsiveUtilitiesSection() {
  const [view, setView] = useState("desktop");

  const handleViewToggle = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Responsive Utilities with Tailwind CSS
      </h1>

      {/* Buttons to Toggle View */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => handleViewToggle("mobile")}
          className={`px-6 py-2 rounded ${
            view === "mobile"
              ? "bg-blue-700 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Mobile View
        </button>
        <button
          onClick={() => handleViewToggle("tablet")}
          className={`px-6 py-2 rounded ${
            view === "tablet"
              ? "bg-green-700 text-white"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Tablet View
        </button>
        <button
          onClick={() => handleViewToggle("desktop")}
          className={`px-6 py-2 rounded ${
            view === "desktop"
              ? "bg-red-700 text-white"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          Desktop View
        </button>
      </div>

      {/* Responsive Utilities Example */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`${
              view === "mobile"
                ? "p-4 bg-blue-500 text-white rounded-lg w-[80%] mx-auto"
                : view === "tablet"
                ? "p-6 bg-green-500 text-white rounded-lg w-[70%] mx-auto"
                : "p-8 bg-red-500 text-white rounded-lg w-[60%] mx-auto"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">Responsive Utility Box</h3>
            <p>
              This box is adjusted using Tailwind CSS utilities like padding, width, and margin, which change based on
              the screen size.
            </p>
          </div>
        </motion.div>
        <p className="mt-4 text-white">
          The layout inside this box adjusts its padding and width according to the selected view, demonstrating
          responsive utilities in Tailwind CSS.
        </p>
      </motion.div>

      {/* Code Explanation */}
      <div className="bg-gray-900 p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-white">
          How Responsive Utilities Work
        </h3>
        <p className="text-white mb-4 flex flex-col gap-4">
          Tailwind CSS provides a set of responsive utility classes that help you build layouts that change based on the
          viewport size. These utilities allow you to control padding, margin, text alignment, flex direction, and other
          layout properties.
        </p>

        <h4 className="text-md font-semibold mb-2 text-gray-800">
          Example Techniques:
        </h4>
        <ul className="list-disc list-inside text-white mb-4">
          <li>Use responsive padding classes like `p-4 md:p-6 lg:p-8` to adjust padding based on screen size.</li>
          <li>Apply width utilities like `w-full sm:w-1/2 lg:w-1/4` to control the width of elements across devices.</li>
          <li>Use flexbox utilities such as `flex-col` for mobile, `flex-row` for tablet, and `flex-wrap` for desktop views.</li>
        </ul>

        <pre className="bg-gray-800 text-gray-200 p-4 rounded overflow-x-auto">
          {`
<!-- Example: Using Tailwind CSS utilities for responsiveness -->
<div class="w-full sm:w-1/2 lg:w-1/4 p-4 bg-blue-500 text-white rounded-lg">
  <h3 class="text-lg font-semibold">Responsive Box</h3>
  <p>This box's width changes based on the screen size.</p>
</div>

<!-- Example: Responsive padding and margin -->
<div class="p-4 sm:p-6 lg:p-8 bg-green-500 text-white rounded-lg">
  <h3 class="text-lg font-semibold">Responsive Padding</h3>
  <p>The padding of this box adjusts based on the screen size.</p>
</div>

<!-- Example: Flexbox utilities for responsiveness -->
<div class="flex flex-col sm:flex-row lg:flex-wrap p-4 bg-red-500 text-white rounded-lg">
  <div class="flex-1 p-2 bg-yellow-500">Item 1</div>
  <div class="flex-1 p-2 bg-yellow-600">Item 2</div>
  <div class="flex-1 p-2 bg-yellow-700">Item 3</div>
</div>
          `}
        </pre>
      </div>
    </div>
  );
}
