"use client";

export default function ResponsiveNestedGrid() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Responsive Nested Grid Layout</h2>
      <p className="mb-6">This example demonstrates how a nested grid adjusts for different screen sizes.</p>

      {/* Outer Grid */}
      <div
        className="grid gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive columns
          gridGap: "20px",
          padding: "20px",
        }}
      >
        {/* Nested Grid in the First Section */}
        <div
          className="bg-gray-200 p-4 rounded"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", // Responsive columns in nested grid
            gap: "10px",
            padding: "10px",
          }}
        >
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-blue-400 text-white text-center p-3 rounded"
            >
              Nested Item {index + 1}
            </div>
          ))}
        </div>

        {/* Second Section */}
        <div className="bg-teal-600 text-white text-center p-6 rounded">
          <h3 className="text-lg font-bold">Standalone Section</h3>
          <p>Second section without nested grid.</p>
        </div>
      </div>
    </div>
  );
}
