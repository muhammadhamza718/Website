"use client";
import React from "react";

const GapExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        Gap in Flexbox
      </h3>

      <p className="mb-4 text-sm sm:text-base">
        The <code>gap</code> property in Flexbox allows you to define the space between flex items. It can be used to create consistent spacing between items in a flex container without needing to use margin on the items themselves. This property is supported in both flexbox and grid layouts.
      </p>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        1. <code>gap: 10px;</code>
      </h4>
      <p className="text-sm sm:text-base">
        This will apply a <code>10px</code> gap between all flex items in the container.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Set a 10px gap between flex items */
.container {
  display: flex;
  gap: 10px;
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6"
        style={{ display: "flex", gap: "10px" }}
      >
        <div className="flex-item bg-red-500 h-20 w-20">Item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">Item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">Item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        2. <code>gap: 20px;</code>
      </h4>
      <p className="text-sm sm:text-base">
        This will apply a <code>20px</code> gap between all flex items in the container.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Set a 20px gap between flex items */
.container {
  display: flex;
  gap: 20px;
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6"
        style={{ display: "flex", gap: "20px" }}
      >
        <div className="flex-item bg-red-500 h-20 w-20">Item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">Item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">Item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        3. <code>gap: 1rem;</code>
      </h4>
      <p className="text-sm sm:text-base">
        This will apply a <code>1rem</code> gap between all flex items in the container.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Set a 1rem gap between flex items */
.container {
  display: flex;
  gap: 1rem;
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6"
        style={{ display: "flex", gap: "1rem" }}
      >
        <div className="flex-item bg-red-500 h-20 w-20">Item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">Item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">Item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        4. Responsive Gap Adjustment
      </h4>
      <p className="text-sm sm:text-base">
        Tailwind allows you to change the gap dynamically based on the screen size. For example, you can set a smaller gap for mobile screens and a larger gap for desktop screens.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Set different gaps based on screen size */
.container {
  display: flex;
  gap: 1rem; /* Default gap */
}

@media (min-width: 640px) {
  .container {
    gap: 2rem; /* Gap for medium screens */
  }
}

@media (min-width: 1024px) {
  .container {
    gap: 3rem; /* Gap for large screens */
  }
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6"
        style={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <div className="flex-item bg-red-500 h-20 w-20">Item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">Item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">Item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">Summary of Gap</h4>
      <ul className="list-disc pl-6 text-sm sm:text-base">
        <li>
          <code>gap</code> can be used to set the space between flex or grid items, which is more efficient than applying margin to each item individually.
        </li>
        <li>
          The gap property works on both horizontal and vertical spacing, and can be adjusted for different screen sizes using media queries or Tailwind&lsquo;s responsive utilities.
        </li>
      </ul>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">Exercise</h4>
      <p className="text-sm sm:text-base">
        Experiment with different gap values and see how it affects the layout. Try adjusting the gap values based on different screen sizes to create a responsive design that looks great on any device.
      </p>
    </div>
  );
};

export default GapExercises;
