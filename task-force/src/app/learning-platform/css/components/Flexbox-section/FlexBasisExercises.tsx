import React from 'react';

const FlexBasisExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl font-semibold mb-4">Flex Basis in Flexbox</h3>

      <p className="mb-4">The <code>flex-basis</code> property in Flexbox defines the initial size of a flex item before any space distribution. It sets the base size of the item along the main axis before applying the <code>flex-grow</code> or <code>flex-shrink</code> properties. Below, you&lsquo;ll learn how different values of <code>flex-basis</code> impact the layout.</p>

      <h4 className="text-lg font-semibold mb-2">1. <code>flex-basis: 200px;</code></h4>
      <p>This sets the flex item&lsquo;s initial size to 200px, regardless of the container&lsquo;s size.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Basis to 200px */
.container {
  display: flex;
}

.item {
  flex-basis: 200px;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexBasis: '200px' }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexBasis: '200px' }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexBasis: '200px' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">2. <code>flex-basis: 50%;</code></h4>
      <p>This sets the flex item&lsquo;s initial size to 50% of the container&lsquo;s width, causing the items to take up half of the container&lsquo;s space.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Basis to 50% */
.container {
  display: flex;
}

.item {
  flex-basis: 50%;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexBasis: '50%' }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexBasis: '50%' }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexBasis: '50%' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">3. <code>flex-basis: auto;</code></h4>
      <p>This sets the flex item&lsquo;s initial size based on its content, with a default size of the item&lsquo;s natural width or height (depending on the flex direction).</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Basis to Auto */
.container {
  display: flex;
}

.item {
  flex-basis: auto;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexBasis: 'auto' }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexBasis: 'auto' }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexBasis: 'auto' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">4. <code>flex-basis: 0;</code></h4>
      <p>This sets the flex item&lsquo;s initial size to 0, and its size will be influenced only by the <code>flex-grow</code> or <code>flex-shrink</code> properties.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Set Flex Basis to 0 */
.container {
  display: flex;
}

.item {
  flex-basis: 0;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2" style={{ flexBasis: '0' }}>Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2" style={{ flexBasis: '0' }}>Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2" style={{ flexBasis: '0' }}>Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">Summary of <code>flex-basis</code> values:</h4>
      <ul className="list-disc pl-6">
        <li><code>200px</code> – sets the initial size to 200px.</li>
        <li><code>50%</code> – sets the initial size to 50% of the container&lsquo;s width.</li>
        <li><code>auto</code> – sets the initial size to the item’s natural width or height.</li>
        <li><code>0</code> – sets the initial size to 0, with other flex properties determining the size.</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Exercise</h4>
      <p>Experiment with different values of <code>flex-basis</code> to see how the items resize. For example, try switching between <code>200px</code>, <code>auto</code>, and <code>0</code> to observe the differences in behavior.</p>
    </div>
  );
};

export default FlexBasisExercises;
