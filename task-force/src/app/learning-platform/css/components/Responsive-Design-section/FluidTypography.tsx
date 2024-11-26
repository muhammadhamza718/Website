"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FluidTypographySection() {
  const [view, setView] = useState("desktop");

  const handleViewToggle = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Fluid Typography with Tailwind CSS
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

      {/* Fluid Typography Example */}
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
            <h3 className="text-lg font-semibold mb-4">Responsive Fluid Typography</h3>
            <p className="text-xl">
              This text size changes fluidly with the viewport width using CSS clamp function and Tailwind CSS.
            </p>
          </div>
        </motion.div>
        <p className="mt-4 text-white">
          As you resize the screen, the font size adjusts fluidly between a minimum and maximum value using the `clamp()` function.
        </p>
      </motion.div>

      {/* Code Explanation */}
      <div className="bg-gray-900 p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-white">
          How Fluid Typography Works
        </h3>
        <p className="text-white mb-4 flex flex-col gap-4">
          Fluid typography is achieved by using the CSS `clamp()` function, which allows font sizes to scale responsively
          between a defined minimum and maximum value based on the viewport width.
        </p>

        <h4 className="text-md font-semibold mb-2 text-gray-800">
          Example Techniques:
        </h4>
        <ul className="list-disc list-inside text-white mb-4">
          <li>
            Use the `clamp()` function in CSS to control the font size fluidly between a minimum, preferred, and
            maximum size.
          </li>
          <li>Tailwind CSS supports custom values for `font-size` and responsive classes.</li>
          <li>Combine `clamp()` with Tailwind&lsquo;s utilities to scale typography based on screen size.</li>
        </ul>

        <pre className="bg-gray-800 text-gray-200 p-4 rounded overflow-x-auto">
          {`
<!-- Example: Fluid Typography using CSS clamp function -->
<h1 class="text-[clamp(1.5rem, 5vw, 3rem)]">Fluid Typography with Tailwind CSS</h1>

<!-- Example: Using Tailwind's responsive font sizes and clamp -->
<p class="text-[clamp(1rem, 2vw + 1rem, 1.5rem)]">
  The text size in this paragraph changes based on the viewport width using the clamp function in Tailwind CSS.
</p>
          `}
        </pre>
      </div>
    </div>
  );
}
