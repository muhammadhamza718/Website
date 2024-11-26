import React from 'react';

const CenteringExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl font-semibold mb-4">Centering Items with Flexbox</h3>

      <p className="mb-4">Flexbox is an excellent tool for centering elements both horizontally and vertically. You can use properties like <code>justify-content</code> and <code>align-items</code> to center items within a container. Below, we will cover various methods for centering using Flexbox.</p>

      <h4 className="text-lg font-semibold mb-2">1. <code>justify-content: center;</code> for Horizontal Centering</h4>
      <p>This property is used to align flex items horizontally along the main axis. The <code>justify-content: center</code> value centers the items within the flex container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Horizontally Center Items */
.container {
  display: flex;
  justify-content: center;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', justifyContent: 'center', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">2. <code>align-items: center;</code> for Vertical Centering</h4>
      <p>This property is used to align flex items vertically along the cross axis. The <code>align-items: center</code> value centers the items along the vertical axis within the container.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Vertically Center Items */
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

      <h4 className="text-lg font-semibold mb-2">3. Centering Both Horizontally and Vertically</h4>
      <p>To center items both horizontally and vertically, you can combine <code>justify-content: center</code> and <code>align-items: center</code>.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Center Items Horizontally and Vertically */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">4. Full Height and Width Centering</h4>
      <p>You can also center elements in a container that takes the full height and width of the viewport by setting the container’s height to <code>100vh</code>.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Full Height and Width Centering */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="flex-item bg-red-500 w-20 h-20 m-2">Item 1</div>
        <div className="flex-item bg-green-500 w-20 h-20 m-2">Item 2</div>
        <div className="flex-item bg-blue-500 w-20 h-20 m-2">Item 3</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">5. Centering with Fixed Size Items</h4>
      <p>You can center an item that has a fixed width and height just like flexible items. Flexbox makes it easy to center regardless of the item size.</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        {`/* Center Items with Fixed Size */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.item {
  width: 150px;
  height: 100px;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <div className="flex-item bg-red-500 text-white p-4" style={{ width: '150px', height: '100px' }}>Centered Item</div>
      </div>

      <h4 className="text-lg font-semibold mb-2">Summary of Centering with Flexbox:</h4>
      <ul className="list-disc pl-6">
        <li><code>justify-content: center</code> – centers items horizontally within the container.</li>
        <li><code>align-items: center</code> – centers items vertically within the container.</li>
        <li>Combining both <code>justify-content: center</code> and <code>align-items: center</code> centers the items in both axes.</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Exercise</h4>
      <p>Try changing the values of <code>justify-content</code> and <code>align-items</code> to experiment with centering. You can also try centering multiple items within the container and see how it behaves.</p>
    </div>
  );
};

export default CenteringExercises;
