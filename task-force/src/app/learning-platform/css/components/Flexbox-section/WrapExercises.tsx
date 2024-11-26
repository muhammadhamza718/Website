"use client";
import React from "react";

const WrapExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        Flexbox Wrap Property
      </h3>

      <p className="mb-4 text-sm sm:text-base">
        The <code>flex-wrap</code> property determines whether the flex items should wrap onto multiple lines or stay on a single line.
      </p>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        1. Default Behavior: No Wrap
      </h4>
      <p className="text-sm sm:text-base">
        By default, items do not wrap, even if they overflow the container.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Default: nowrap */
.container {
  display: flex;
  flex-wrap: nowrap;
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6 overflow-auto"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          maxWidth: "400px",
          border: "1px solid #ccc",
        }}
      >
        <div className="flex-item bg-red-500 h-20 w-20 flex-shrink-0">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20 flex-shrink-0">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20 flex-shrink-0">item 3</div>
        <div className="flex-item bg-yellow-500 h-20 w-20 flex-shrink-0">item 4</div>
        <div className="flex-item bg-purple-500 h-20 w-20 flex-shrink-0">item 5</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        2. Wrapping Items
      </h4>
      <p className="text-sm sm:text-base">
        Use <code>flex-wrap: wrap;</code> to make items wrap to the next line when needed.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Wrapping items */
.container {
  display: flex;
  flex-wrap: wrap;
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6"
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "400px",
          border: "1px solid #ccc",
        }}
      >
        <div className="flex-item bg-red-500 h-20 w-20 flex-shrink-0">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20 flex-shrink-0">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20 flex-shrink-0">item 3</div>
        <div className="flex-item bg-yellow-500 h-20 w-20 flex-shrink-0">item 4</div>
        <div className="flex-item bg-purple-500 h-20 w-20 flex-shrink-0">item 5</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        3. Reverse Wrapping
      </h4>
      <p className="text-sm sm:text-base">
        Use <code>flex-wrap: wrap-reverse;</code> to make items wrap to the next line in reverse order.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Reverse wrapping */
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}`}
      </pre>

      <div
        className="flex-container bg-gray-300 p-4 mb-6"
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          maxWidth: "400px",
          border: "1px solid #ccc",
        }}
      >
        <div className="flex-item bg-red-500 h-20 w-20 flex-shrink-0">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20 flex-shrink-0">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20 flex-shrink-0">item 3</div>
        <div className="flex-item bg-yellow-500 h-20 w-20 flex-shrink-0">item 4</div>
        <div className="flex-item bg-purple-500 h-20 w-20 flex-shrink-0">item 5</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">Exercise</h4>
      <p className="text-sm sm:text-base mb-4">
        Experiment with different <code>flex-wrap</code> properties:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>`}
      </pre>
      <pre className="bg-gray-800 text-white p-4 rounded text-sm sm:text-base">
        {`/* CSS */
.container {
  display: flex;
  flex-wrap: wrap; /* Try: nowrap, wrap, wrap-reverse */
}

.item {
  width: 100px;
  height: 100px;
}`}
      </pre>
    </div>
  );
};

export default WrapExercises;
