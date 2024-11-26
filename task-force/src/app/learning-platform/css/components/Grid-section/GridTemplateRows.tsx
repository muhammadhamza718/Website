import React, { useState } from 'react';

// Example of a simple CSS Grid with grid-template-rows
const GridTemplateRowsExercises = () => {
  const [gridStyle, setGridStyle] = useState<string>('1fr 1fr 1fr'); // Default: 3 equal rows

  // Function to update the grid style based on user input
  const updateGridStyle = (newStyle: string) => {
    setGridStyle(newStyle);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-4">CSS Grid: Template Rows</h2>
      <p className="text-lg mb-8">Learn how to use <code>grid-template-rows</code> to define the number and size of rows in a grid layout.</p>

      {/* Example Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Example 1: Basic Grid</h3>
        <p className="text-md mb-4">This example demonstrates how to create a simple grid with three equal-height rows.</p>
        
        <div className="grid" style={{ gridTemplateRows: gridStyle }}>
          <div className="bg-gray-300 text-center border">Row 1</div>
          <div className="bg-gray-400 text-center border">Row 2</div>
          <div className="bg-gray-500 text-center border">Row 3</div>
          {/* Add a 4th row to the grid */}
          {gridStyle === 'repeat(4, 1fr)' && (
            <div className="bg-gray-600 text-center border">Row 4</div>
          )}
        </div>
      </section>

      {/* Exercise Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Exercise: Adjust Grid Rows</h3>
        <p className="text-md mb-4">Use the buttons below to change the number and size of rows in the grid:</p>

        <div className="mb-8">
          <button
            onClick={() => updateGridStyle('1fr 1fr 1fr')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            3 Equal Rows
          </button>
          <button
            onClick={() => updateGridStyle('1fr 2fr 1fr')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            Unequal Rows (1:2:1)
          </button>
          <button
            onClick={() => updateGridStyle('repeat(4, 1fr)')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            4 Equal Rows
          </button>
          <button
            onClick={() => updateGridStyle('100px 1fr 2fr')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white rounded mr-4"
          >
            Fixed and Flexible Rows (100px, 1fr, 2fr)
          </button>
        </div>

        <p className="text-md mb-4">Notice how the grid layout changes as you select different row configurations.</p>
      </section>

      {/* Explanation Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Explanation of <code>grid-template-rows</code></h3>
        <p className="text-md mb-4">
          The <code>grid-template-rows</code> property defines the number and size of rows in a grid layout.
          The value can be a combination of length values (like pixels or percentages), fractional units (<code>fr</code>), or even <code>auto</code>.
        </p>

        <h4 className="text-xl font-semibold mb-2">Common Syntax</h4>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`grid-template-rows: <value> <value> <value>;`}
        </pre>

        <h4 className="text-xl font-semibold mb-2">Examples:</h4>
        <ul className="list-disc ml-6">
          <li><code>grid-template-rows: 100px 200px 100px;</code> – Three fixed-height rows.</li>
          <li><code>grid-template-rows: 1fr 1fr 1fr;</code> – Three equal-height rows.</li>
          <li><code>grid-template-rows: 2fr 1fr;</code> – Two rows where the first takes up twice the space of the second.</li>
          <li><code>grid-template-rows: repeat(4, 1fr);</code> – Four equal rows using the <code>repeat()</code> function.</li>
        </ul>
      </section>

      {/* Flexibility Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Advanced Usage</h3>
        <p className="text-md mb-4">
          You can also use the <code>minmax()</code> function to create flexible row sizes that adjust to available space:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`grid-template-rows: repeat(3, minmax(100px, 1fr));`}
        </pre>
        <p className="text-md mb-4">
          This creates a grid where each row has a minimum height of 100px and a maximum height of 1fr.
        </p>
      </section>
    </div>
  );
};

export default GridTemplateRowsExercises;
