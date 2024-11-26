"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContainerQueriesSection() {
  const [view, setView] = useState("desktop");

  const handleViewToggle = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Responsive Layouts with Container Queries
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

      {/* Container Queries Example */}
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
                ? "container max-w-[300px] p-4 bg-blue-500"
                : view === "tablet"
                ? "container max-w-[600px] p-6 bg-green-500"
                : "container max-w-[900px] p-8 bg-red-500"
            }`}
            style={{
              resize: "both",
              overflow: "auto",
              borderRadius: "8px",
            }}
          >
            <h3 className="text-white text-lg">Container Query Box</h3>
            <p className="text-white">
              This box will resize its content based on its container size, showcasing the use of container queries.
            </p>
          </div>
        </motion.div>
        <p className="mt-4 text-white">
          This box adjusts its size and appearance based on its container&lsquo;s size, demonstrating the power of container
          queries.
        </p>
      </motion.div>

      {/* Code Explanation */}
      <div className="bg-gray-900 p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-white">
          How Container Queries Work
        </h3>
        <p className="text-white mb-4 flex flex-col gap-4">
          Container queries allow elements to adapt based on the size of their container, rather than the viewport. This
          enables more modular, flexible designs.
        </p>

        <h4 className="text-md font-semibold mb-2 text-gray-800">
          Example Techniques:
        </h4>
        <ul className="list-disc list-inside text-white mb-4">
          <li>Use container queries to adjust element styles based on the container&lsquo;s size.</li>
          <li>Combine with `resize` property to allow dynamic resizing of containers.</li>
          <li>Utilize `@container` media queries to target specific container sizes.</li>
        </ul>

        <pre className="bg-gray-800 text-gray-200 p-4 rounded overflow-x-auto">
          {`
<!-- Example: Using Container Queries with @container rule -->
<div class="container" style="resize: both; overflow: auto; max-width: 1000px;">
  <div class="content">
    <h3>Container Query Box</h3>
    <p>This box adjusts based on its container's size.</p>
  </div>
</div>

<style>
  .container {
    @container (min-width: 500px) {
      background-color: #ff6347; /* Tomato */
    }
    @container (min-width: 700px) {
      background-color: #32cd32; /* Lime Green */
    }
  }
</style>
          `}
        </pre>
      </div>
    </div>
  );
}
