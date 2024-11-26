import React from 'react';

const FlexShrinkExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl font-semibold mb-4">Flex Shrink in Flexbox</h3>

      <p className="mb-4">
        The <code>flex-shrink</code> property in Flexbox specifies how much a flex item should shrink relative to the other items in the flex container when there is not enough space. The default value is <code>1</code>, which means the item will shrink if necessary. If you set it to <code>0</code>, the item will not shrink at all, even if there is insufficient space.
      </p>

      <h4 className="text-lg font-semibold mb-2">1. <code>flex-shrink: 1;</code></h4>
      <p>This means the item will shrink proportionally to other flex items when there is not enough space in the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Shrink to 1 */
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%; /* Ensure it fits */
}

.item {
  flex-shrink: 1;
  width: 200px;
  max-width: 100%;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 min-w-[40%] mb-6" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', boxSizing: 'border-box' }}>
        <div className="flex-item bg-red-500 h-20 m-2" style={{ flexShrink: 1, width: '300px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 1</div>
        <div className="flex-item bg-green-500 h-20 m-2" style={{ flexShrink: 1, width: '400px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 2</div>
        <div className="flex-item bg-blue-500 h-20 m-2" style={{ flexShrink: 1, width: '500px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">2. <code>flex-shrink: 0;</code></h4>
      <p>This means the item will not shrink at all, regardless of how much space is available in the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Shrink to 0 */
.container {
  display: flex;
  width: 100%; /* Make container flexible */
}

.item {
  flex-shrink: 0;
  width: 200px;
  max-width: 100%;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 min-w-[40%] mb-6" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', boxSizing: 'border-box' }}>
        <div className="flex-item bg-red-500 h-20 m-2" style={{ flexShrink: 0, width: '250px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 1</div>
        <div className="flex-item bg-green-500 h-20 m-2" style={{ flexShrink: 0, width: '350px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 2</div>
        <div className="flex-item bg-blue-500 h-20 m-2" style={{ flexShrink: 0, width: '450px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">3. <code>flex-shrink: 3;</code></h4>
      <p>This means the item will shrink three times as much as an item with a <code>flex-shrink: 1</code> value when there is not enough space.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Shrink to 3 */
.container {
  display: flex;
  width: 100%;
}

.item {
  flex-shrink: 3;
  width: 200px;
  max-width: 100%;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 min-w-[40%] mb-6" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', boxSizing: 'border-box' }}>
        <div className="flex-item bg-red-500 h-20 m-2" style={{ flexShrink: 1, width: '300px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 1</div>
        <div className="flex-item bg-green-500 h-20 m-2" style={{ flexShrink: 3, width: '500px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 2</div>
        <div className="flex-item bg-blue-500 h-20 m-2" style={{ flexShrink: 1, width: '350px', maxWidth: '100%', boxSizing: 'border-box' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">Summary of <code>flex-shrink</code> values:</h4>
      <ul className="list-disc pl-6">
        <li><code>1</code> – the item shrinks to take up less space proportionally to the other items in the container.</li>
        <li><code>2</code> – the item shrinks twice as much as an item with <code>flex-shrink: 1</code>.</li>
        <li><code>0</code> – the item does not shrink at all, maintaining its original size.</li>
        <li><code>3</code> – the item shrinks three times as much as an item with <code>flex-shrink: 1</code>.</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Exercise</h4>
      <p>Experiment with different values of <code>flex-shrink</code> and observe how it affects the layout of the items in the container. For example, try adjusting the <code>flex-shrink</code> values to <code>1</code>, <code>2</code>, and <code>0</code> to see how the items shrink or stay fixed in size.</p>
    </div>
  );
};

export default FlexShrinkExercises;
