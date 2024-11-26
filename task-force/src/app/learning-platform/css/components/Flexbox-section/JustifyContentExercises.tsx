"use client";
import React from "react";

const JustifyContentExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        Justify Content in Flexbox
      </h3>

      <p className="mb-4 text-sm sm:text-base">
        The <code>justify-content</code> property in Flexbox aligns flex items along the main axis. It controls how extra space is distributed around flex items in the container.
      </p>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        1. <code>justify-content: flex-start;</code>
      </h4>
      <p className="text-sm sm:text-base">
        This is the default value. Flex items are packed at the start of the container.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Align items at the start */
.container {
  display: flex;
  justify-content: flex-start;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex", justifyContent: "flex-start" }}>
        <div className="flex-item bg-red-500 h-20 w-20">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        2. <code>justify-content: center;</code>
      </h4>
      <p className="text-sm sm:text-base">
        Flex items are centered along the main axis.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Center items */
.container {
  display: flex;
  justify-content: center;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex", justifyContent: "center" }}>
        <div className="flex-item bg-red-500 h-20 w-20">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        3. <code>justify-content: space-between;</code>
      </h4>
      <p className="text-sm sm:text-base">
        Flex items are evenly distributed, with the first item at the start and the last item at the end.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Space between items */
.container {
  display: flex;
  justify-content: space-between;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="flex-item bg-red-500 h-20 w-20">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        4. <code>justify-content: space-around;</code>
      </h4>
      <p className="text-sm sm:text-base">
        Flex items are evenly distributed with equal space around them.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Space around items */
.container {
  display: flex;
  justify-content: space-around;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="flex-item bg-red-500 h-20 w-20">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        5. <code>justify-content: space-evenly;</code>
      </h4>
      <p className="text-sm sm:text-base">
        Flex items are evenly distributed, with equal space between and around them.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Space evenly between items */
.container {
  display: flex;
  justify-content: space-evenly;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="flex-item bg-red-500 h-20 w-20">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">Exercise</h4>
      <p className="text-sm sm:text-base">
        Try different values of <code>justify-content</code> and observe the behavior of the items. Experiment with other properties like <code>align-items</code> for vertical alignment.
      </p>
    </div>
  );
};

export default JustifyContentExercises;
