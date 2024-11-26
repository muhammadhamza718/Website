"use client";
import { useState } from "react";

export default function ResponsiveLayout() {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Responsive Layout</h2>
      <p className="mb-6">The layout adapts based on the screen size:</p>

      {/* Add item button */}
      <button
        onClick={addItem}
        className="px-6 py-2 bg-green-600 text-white rounded mb-6"
      >
        Add Item
      </button>

      {/* Responsive grid layout */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Default grid layout
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            className="bg-gray-400 p-6 text-white rounded"
            style={{
              minHeight: "150px",
            }}
          >
            Item {item}
          </div>
        ))}
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 767px) {
          .grid {
            grid-template-columns: 1fr; /* 1 column for small screens */
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
          }
        }

        @media (min-width: 1025px) {
          .grid {
            grid-template-columns: repeat(3, 1fr); /* 3 columns for larger screens */
          }
        }
      `}</style>
    </div>
  );
}
