import React, { useState } from 'react';

// Example of a simple CSS Grid with grid-template-columns
const GridTemplateColumnsExercises = () => {
  const [gridStyle, setGridStyle] = useState<string>('1fr 1fr 1fr'); // Default: 3 equal columns

  // Function to update the grid style based on user input
  const updateGridStyle = (newStyle: string) => {
    setGridStyle(newStyle);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-4">CSS Grid: Template Columns</h2>
      <p className="text-lg mb-8">Learn how to use <code>grid-template-columns</code> to define the number and size of columns in a grid layout.</p>

      {/* Example Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Example 1: Basic Grid</h3>
        <p className="text-md mb-4">This example demonstrates how to create a simple grid with three equal-width columns.</p>
        
        <div className="grid" style={{ gridTemplateColumns: gridStyle }}>
          <div className="bg-gray-300 p-4 text-center">Item 1</div>
          <div className="bg-gray-400 p-4 text-center">Item 2</div>
          <div className="bg-gray-500 p-4 text-center">Item 3</div>
        </div>
      </section>

      {/* Exercise Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Exercise: Adjust Grid Columns</h3>
        <p className="text-md mb-4">Use the buttons below to change the number and size of columns in the grid:</p>

        <div className="mb-8">
          <button
            onClick={() => updateGridStyle('1fr 1fr 1fr')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            3 Equal Columns
          </button>
          <button
            onClick={() => updateGridStyle('1fr 2fr 1fr')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            Unequal Columns (1:2:1)
          </button>
          <button
            onClick={() => updateGridStyle('repeat(4, 1fr)')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            4 Equal Columns
          </button>
          <button
            onClick={() => updateGridStyle('200px 1fr 2fr')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            Fixed and Flexible Columns (200px, 1fr, 2fr)
          </button>
        </div>

        <p className="text-md mb-4">Notice how the grid layout changes as you select different column configurations.</p>
      </section>

      {/* Explanation Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Explanation of <code>grid-template-columns</code></h3>
        <p className="text-md mb-4">
          The <code>grid-template-columns</code> property defines the number and size of columns in a grid layout.
          The value can be a combination of length values (like pixels or percentages), fractional units (<code>fr</code>), or even <code>auto</code>.
        </p>

        <h4 className="text-xl font-semibold mb-2">Common Syntax</h4>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`grid-template-columns: <value> <value> <value>;`}
        </pre>

        <h4 className="text-xl font-semibold mb-2">Examples:</h4>
        <ul className="list-disc ml-6">
          <li><code>grid-template-columns: 100px 200px 100px;</code> – Three fixed-width columns.</li>
          <li><code>grid-template-columns: 1fr 1fr 1fr;</code> – Three equal-width columns.</li>
          <li><code>grid-template-columns: 2fr 1fr;</code> – Two columns where the first takes up twice the space of the second.</li>
          <li><code>grid-template-columns: repeat(4, 1fr);</code> – Four equal columns using the <code>repeat()</code> function.</li>
        </ul>
      </section>

      {/* Flexibility Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Advanced Usage</h3>
        <p className="text-md mb-4">
          You can also use the <code>minmax()</code> function to create flexible column sizes that adjust to available space:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`grid-template-columns: repeat(3, minmax(100px, 1fr));`}
        </pre>
        <p className="text-md mb-4">
          This creates a grid where each column has a minimum width of 100px and a maximum width of 1fr.
        </p>
      </section>
    </div>
  );
};

export default GridTemplateColumnsExercises;
