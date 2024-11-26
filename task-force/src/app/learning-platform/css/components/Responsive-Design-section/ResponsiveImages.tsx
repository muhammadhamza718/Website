"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ResponsiveExamplesSection() {
  const [view, setView] = useState("desktop");

  const handleViewToggle = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Responsive Images with Media Queries
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

      {/* Responsive Images Example */}
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
          <Image
            src={`/image.png`}
            alt={`${view} responsive image`}
            className={`rounded-lg ${
              view === "mobile"
                ? "w-[100px] h-auto"
                : view === "tablet"
                ? "w-[200px] h-auto"
                : "w-[400px] h-auto"
            }`}
          />
        </motion.div>
        <p className="mt-4 text-white">
          This image adjusts its size and resolution based on the selected view
          ({view}). It demonstrates how responsive images work across devices.
        </p>
      </motion.div>

      {/* Code Explanation */}
      <div className="bg-gray-900 p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-white">
          How Responsive Images Work
        </h3>
        <p className="text-white mb-4 flex flex-col gap-4">
          Responsive images dynamically adjust to different screen sizes and
          resolutions using techniques like media queries, the `<Image src="/image.png" alt="Example image" style={{ width: "20%" }}/>` tag,
          and the `srcset` attribute.
        </p>

        <h4 className="text-md font-semibold mb-2 text-gray-800">
          Example Techniques:
        </h4>
        <ul className="list-disc list-inside text-white mb-4">
          <li className="flex flex-col gap-4">
            Use the `<Image src="/image.png" alt="Example image" style={{ width: "20%" }}/>` element for different image sources based on
            screen size.
          </li>
          <li>Use `srcset` for responsive resolutions of the same image.</li>
          <li>Combine with CSS for flexible layouts.</li>
        </ul>

        <pre className="bg-gray-800 text-gray-200 p-4 rounded overflow-x-auto">
          {`
<!-- Example: Using the <picture> element -->
<picture>
  <source srcset="image-mobile.jpg" media="(max-width: 480px)">
  <source srcset="image-tablet.jpg" media="(max-width: 768px)">
  <img src="image-desktop.jpg" alt="Responsive image">
</picture>

<!-- Example: Using srcset for resolution switching -->
<img
  src="image-1x.jpg"
  srcset="image-1x.jpg 1x, image-2x.jpg 2x"
  alt="High-resolution image"
/>
          `}
        </pre>
      </div>
    </div>
  );
}
