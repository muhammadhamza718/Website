import React from 'react';

const FlexStartExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl font-semibold mb-4">Align Items to the Start in Flexbox</h3>

      <p className="mb-4">
        The <code>align-items</code> property in Flexbox is used to align items along the cross axis (vertically in a row-based layout). When set to <code>flex-start</code>, it aligns all flex items to the start of the container along the cross axis.
      </p>

      <h4 className="text-lg font-semibold mb-2">1. Align Items to the Start</h4>
      <p>When <code>align-items: flex-start</code> is applied, the flex items align at the start of the container along the cross axis. In a row-based layout, this means they align to the top of the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Align items to the start of the container */
.container {
  display: flex;
  align-items: flex-start;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div className="flex-item bg-red-500 w-48 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-48 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-48 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">2. Align Items to the Start with Different Heights</h4>
      <p>In this example, we will show how the flex items with different heights align to the start of the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Align items to the start with different heights */
.container {
  display: flex;
  align-items: flex-start;
}

.item {
  height: 100px; /* Adjust height to see the effect */
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div className="flex-item bg-red-500 w-48 h-24 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-48 h-48 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-48 h-12 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">3. Summary of <code>align-items: flex-start</code></h4>
      <p>The <code>align-items: flex-start</code> property is useful when you want all items to start from the top (in a row-based layout) or from the left (in a column-based layout), making it easier to create layouts where items are aligned consistently from one edge.</p>

      <h4 className="text-lg font-semibold mb-2">Exercise</h4>
      <p>Experiment with changing the heights and widths of the flex items, and observe how the items align to the top of the container when <code>align-items: flex-start</code> is set. Try using different combinations of values for item sizes to better understand the effect of flexbox alignment.</p>
    </div>
  );
};

export default FlexStartExercises;
