"use client";
import { useState } from "react";

export default function AutoFlowExample() {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  const [flowType, setFlowType] = useState<"row" | "column" | "dense">("row");

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const handleFlowChange = (flow: "row" | "column" | "dense") => {
    setFlowType(flow);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Auto Flow Layout Example</h2>
      <p className="mb-6">Click the buttons below to change the grid behavior:</p>

      {/* Buttons to change auto-flow behavior */}
      <div className="mb-6">
        <button
          onClick={() => handleFlowChange("row")}
          className="px-6 py-2 bg-blue-600 text-white rounded mr-4"
        >
          Flow in Rows
        </button>
        <button
          onClick={() => handleFlowChange("column")}
          className="px-6 py-2 bg-blue-600 text-white rounded mr-4"
        >
          Flow in Columns
        </button>
        <button
          onClick={() => handleFlowChange("dense")}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Dense Flow
        </button>
      </div>

      {/* Add item button */}
      <button
        onClick={addItem}
        className="px-6 py-2 bg-green-600 text-white rounded mb-6"
      >
        Add Item
      </button>

      {/* Grid layout */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns:
            flowType === "row" || flowType === "dense"
              ? "repeat(auto-fill, minmax(150px, 1fr))"
              : "repeat(3, 1fr)", // Fixed 3 columns for column flow
          gridAutoFlow: flowType, // Apply selected auto-flow behavior
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            className="bg-gray-400 p-6 text-white rounded"
            style={{
              gridColumn: flowType === "dense" ? "auto" : "span 1", // Dense flow will span across available spaces
            }}
          >
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
}
