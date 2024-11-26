"use client";

export default function TemplateColumnsDenseExample() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Template Columns with Dense Flow</h2>
      <p className="mb-6">
        This example demonstrates how dense flow rearranges grid items to fill gaps while adapting to a responsive column layout.
      </p>

      <div
        className="grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsive columns
          gridAutoFlow: "dense", // Fill gaps with smaller items
          gridGap: "10px",
        }}
      >
        {/* Grid Items */}
        <div className="bg-red-400 p-4 rounded col-span-2">Item 1 (Wide)</div>
        <div className="bg-blue-400 p-4 rounded">Item 2</div>
        <div className="bg-green-400 p-4 rounded">Item 3</div>
        <div className="bg-yellow-400 p-4 rounded col-span-2 row-span-2">
          Item 4 (Large)
        </div>
        <div className="bg-purple-400 p-4 rounded">Item 5</div>
        <div className="bg-teal-400 p-4 rounded">Item 6</div>
        <div className="bg-gray-400 p-4 rounded">Item 7</div>
        <div className="bg-pink-400 p-4 rounded col-span-3">Item 8 (Extra Wide)</div>
        <div className="bg-orange-400 p-4 rounded">Item 9</div>
      </div>
    </div>
  );
}
