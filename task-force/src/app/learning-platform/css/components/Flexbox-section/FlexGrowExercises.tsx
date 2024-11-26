import React from 'react';

const FlexGrowExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl font-semibold mb-4">Flex Grow in Flexbox</h3>

      <p className="mb-4">
        The <code>flex-grow</code> property in Flexbox specifies how much a flex item should grow relative to the other items in the flex container when there is extra space. It is a unitless value, and the default value is <code>0</code>, which means the item will not grow. If you set a value greater than 0, the item will grow proportionally to the other items based on its value.
      </p>

      <h4 className="text-lg font-semibold mb-2">1. <code>flex-grow: 1;</code></h4>
      <p>This means the item will take up the same proportion of the available space as other flex items with the same grow factor.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Grow to 1 */
.container {
  display: flex;
}

.item {
  flex-grow: 1;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">2. <code>flex-grow: 2;</code></h4>
      <p>This means the item will take up twice as much of the available space as an item with a <code>flex-grow: 1</code> value.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Grow to 2 */
.container {
  display: flex;
}

.item {
  flex-grow: 2;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexGrow: 2 }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">3. <code>flex-grow: 0;</code></h4>
      <p>This means the item will not grow at all, even if there is extra space available. The item will remain at its original size, defined by other properties like <code>flex-basis</code> or content size.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Grow to 0 */
.container {
  display: flex;
}

.item {
  flex-grow: 0;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexGrow: 0 }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexGrow: 0 }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexGrow: 0 }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">4. <code>flex-grow: 3;</code></h4>
      <p>This means the item will take up three times as much of the available space as an item with a <code>flex-grow: 1</code> value.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Grow to 3 */
.container {
  display: flex;
}

.item {
  flex-grow: 3;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexGrow: 3 }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexGrow: 1 }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">Summary of <code>flex-grow</code> values:</h4>
      <ul className="list-disc pl-6">
        <li><code>1</code> – the item grows to take up an equal share of the available space.</li>
        <li><code>2</code> – the item grows to take up twice as much space as an item with <code>flex-grow: 1</code>.</li>
        <li><code>0</code> – the item will not grow at all, it will keep its original size.</li>
        <li><code>3</code> – the item grows to take up three times as much space as an item with <code>flex-grow: 1</code>.</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Exercise</h4>
      <p>Experiment with different values of <code>flex-grow</code> and observe how it affects the layout of the items in the container. For instance, try adjusting the <code>flex-grow</code> values to <code>1</code>, <code>2</code>, and <code>0</code> to see how the items grow or stay fixed in size.</p>
    </div>
  );
};

export default FlexGrowExercises;
