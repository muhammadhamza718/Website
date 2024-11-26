import React from 'react';

const AlignItemExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl font-semibold mb-4">Align Items in Flexbox</h3>

      <p className="mb-4">The <code>align-items</code> property in Flexbox allows you to align flex items along the cross axis (the vertical axis if the flex direction is row). This property helps in aligning items inside a flex container. Below, you’ll learn the different values of <code>align-items</code> and see their effects in action.</p>

      <h4 className="text-lg font-semibold mb-2">1. <code>align-items: flex-start;</code></h4>
      <p>This aligns the flex items to the start of the cross axis. If the flex direction is row (default), this will align items to the top of the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Align Items to the Start */
.container {
  display: flex;
  align-items: flex-start;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'flex-start', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">2. <code>align-items: flex-end;</code></h4>
      <p>This aligns the flex items to the end of the cross axis. If the flex direction is row, this will align items to the bottom of the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Align Items to the End */
.container {
  display: flex;
  align-items: flex-end;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'flex-end', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">3. <code>align-items: center;</code></h4>
      <p>This centers the flex items along the cross axis. If the flex direction is row, this will align the items vertically in the middle of the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Center Items Vertically */
.container {
  display: flex;
  align-items: center;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'center', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">4. <code>align-items: baseline;</code></h4>
      <p>This aligns the flex items along their baseline. This is useful when aligning text or items that should align based on their text baseline.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Align Items to the Baseline */
.container {
  display: flex;
  align-items: baseline;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'baseline', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-16 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-24 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">5. <code>align-items: stretch;</code></h4>
      <p>This is the default value. It stretches the flex items to fill the container along the cross axis.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Stretch Items */
.container {
  display: flex;
  align-items: stretch;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', alignItems: 'stretch', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">Summary of <code>align-items</code> values:</h4>
      <ul className="list-disc pl-6">
        <li><code>flex-start</code> – aligns items to the start of the cross axis.</li>
        <li><code>flex-end</code> – aligns items to the end of the cross axis.</li>
        <li><code>center</code> – aligns items at the center of the cross axis.</li>
        <li><code>baseline</code> – aligns items along their baseline.</li>
        <li><code>stretch</code> – stretches items to fill the container (default).</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Exercise</h4>
      <p>Try changing the value of the <code>align-items</code> property to see how it affects the layout. For example, try switching between <code>flex-start</code>, <code>center</code>, and <code>flex-end</code> to see the difference.</p>
    </div>
  );
};

export default AlignItemExercises;
