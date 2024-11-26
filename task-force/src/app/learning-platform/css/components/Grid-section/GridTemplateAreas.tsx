"use client";
import { useState } from "react";

export default function GridTemplateAreasExercises() {
  // Initial state for grid template areas and content
  const [gridTemplateAreas, setGridTemplateAreas] = useState<string[]>(
    [
      "header header header", 
      "content content sidebar", 
      "footer footer footer"
    ]
  );
  
  const [content, setContent] = useState<string>("Welcome to the default layout!");

  // Handle template area change
  const handleTemplateAreaChange = (layout: string) => {
    switch (layout) {
      case "default":
        setGridTemplateAreas([
          "header header header",
          "content content sidebar",
          "footer footer footer"
        ]);
        setContent("Welcome to the default layout!");
        break;
      case "overlay":
        setGridTemplateAreas([
          "header header header",
          "content content content",
          "sidebar sidebar sidebar"
        ]);
        setContent("This is the overlay layout where elements overlap.");
        break;
      case "centered":
        setGridTemplateAreas([
          "header header header",
          "content content content",
          "footer footer footer"
        ]);
        setContent("Everything is now centered on the page.");
        break;
      case "fullWidth":
        setGridTemplateAreas([
          "header header header",
          "content content content",
          "footer footer footer"
        ]);
        setContent("The content now spans the entire width of the page.");
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Grid Layout Changes</h3>
      <p className="text-md mb-4">
        Adjust the layout by clicking on the buttons below. The layout changes based on the grid-template-areas
        configuration.
      </p>

      {/* Buttons to change grid layout */}
      <div className="mb-8">
        <button
          onClick={() => handleTemplateAreaChange("default")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mr-4"
        >
          Default Layout
        </button>
        <button
          onClick={() => handleTemplateAreaChange("overlay")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mr-4"
        >
          Overlay Layout
        </button>
        <button
          onClick={() => handleTemplateAreaChange("centered")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mr-4"
        >
          Centered Layout
        </button>
        <button
          onClick={() => handleTemplateAreaChange("fullWidth")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mr-4"
        >
          Full-Width Layout
        </button>
      </div>

      {/* Explanation of the layout changes */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Layout Descriptions:</h4>
        <p className="text-md mb-4">
          <strong>1. Default Layout:</strong> Classic grid layout with header, content, sidebar, and footer.
        </p>
        <p className="text-md mb-4">
          <strong>2. Overlay Layout:</strong> Content and sidebar overlap, creating a more dynamic effect.
        </p>
        <p className="text-md mb-4">
          <strong>3. Centered Layout:</strong> Everything is centered vertically and horizontally within the grid.
        </p>
        <p className="text-md mb-4">
          <strong>4. Full-Width Layout:</strong> The content now spans the full width of the page, leaving no space for the sidebar.
        </p>
      </div>

      {/* The actual grid layout */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns in the grid
          gridTemplateRows: "auto auto auto", // Rows will automatically adjust to content
          gridTemplateAreas: gridTemplateAreas.join(" "), // Apply the selected grid layout
        }}
      >
        {/* Grid Items */}
        <div
          className="bg-gray-300 p-4 border"
          style={{
            gridArea: "header",
            transition: "all 0.5s ease",
            zIndex: 1, // To bring it forward in case of overlap
          }}
        >
          <h4 className="font-semibold">Header</h4>
          <p>Header Content</p>
        </div>
        <div
          className="bg-gray-400 p-4 border"
          style={{
            gridArea: "content",
            transition: "all 0.5s ease",
            zIndex: 2, // Overlaying content
          }}
        >
          <h4 className="font-semibold">Content</h4>
          <p>{content}</p>
        </div>
        <div
          className="bg-gray-500 p-4 border"
          style={{
            gridArea: "sidebar",
            transition: "all 0.5s ease",
            zIndex: 1, // Background layer, behind content
          }}
        >
          <h4 className="font-semibold">Sidebar</h4>
          <p>Sidebar Content</p>
        </div>
        <div
          className="bg-gray-600 p-4 border"
          style={{
            gridArea: "footer",
            transition: "all 0.5s ease",
          }}
        >
          <h4 className="font-semibold">Footer</h4>
          <p>Footer Content</p>
        </div>
      </div>
    </section>
  );
}
