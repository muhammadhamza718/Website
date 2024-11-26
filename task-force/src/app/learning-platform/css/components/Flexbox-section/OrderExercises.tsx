"use client";
import React from "react";

const OrderExercises = () => {
  return (
    <div className="exercise-container">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        Flexbox Order Property
      </h3>

      <p className="mb-4 text-sm sm:text-base">
        The <code>order</code> property defines the order of flex items within their container. By default, all flex items have an order value of <code>0</code>, but you can use the <code>order</code> property to rearrange them visually, independent of their source order in the HTML.
      </p>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        1. Default Order
      </h4>
      <p className="text-sm sm:text-base">
        By default, flex items are displayed in the same order as they appear in the HTML.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Default order (HTML order) */
.container {
  display: flex;
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex" }}>
        <div className="flex-item bg-red-500 h-20 w-20">item 1</div>
        <div className="flex-item bg-green-500 h-20 w-20">item 2</div>
        <div className="flex-item bg-blue-500 h-20 w-20">item 3</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        2. Custom Order
      </h4>
      <p className="text-sm sm:text-base">
        You can assign custom order values to flex items to rearrange them.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Custom order values */
.container {
  display: flex;
}

.item-1 {
  order: 2; /* Item 1 will be displayed last */
}

.item-2 {
  order: 1; /* Item 2 will be displayed second */
}

.item-3 {
  order: 0; /* Item 3 will be displayed first */
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex" }}>
        <div className="flex-item bg-red-500 h-20 w-20" style={{ order: 2 }}>
        item 1
        </div>
        <div className="flex-item bg-green-500 h-20 w-20" style={{ order: 1 }}>
        item 2
        </div>
        <div className="flex-item bg-blue-500 h-20 w-20" style={{ order: 0 }}>
        item 3
        </div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">
        3. Negative Order Values
      </h4>
      <p className="text-sm sm:text-base">
        Negative values can be used to move items before the default order.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
        {`/* Using negative order */
.container {
  display: flex;
}

.item-1 {
  order: -1; /* Item 1 will be displayed first */
}`}
      </pre>

      <div className="flex-container bg-gray-300 p-4 mb-6" style={{ display: "flex" }}>
        <div className="flex-item bg-red-500 h-20 w-20" style={{ order: -1 }}>
        item 1
        </div>
        <div className="flex-item bg-green-500 h-20 w-20">
        item 2
        </div>
        <div className="flex-item bg-blue-500 h-20 w-20">
        item 3
        </div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold mb-2">Exercise</h4>
      <p className="text-sm sm:text-base mb-4">
        Experiment with different <code>order</code> values to see how they affect the visual arrangement of flex items.
      </p>
      <div className="exercise-box bg-gray-100 p-6 border border-gray-300 rounded">
        <p className="text-sm sm:text-base mb-4">Try changing the <code>order</code> property:</p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 text-sm sm:text-base">
          {`<div class="container">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
</div>`}
        </pre>
        <pre className="bg-gray-800 text-white p-4 rounded text-sm sm:text-base">
          {`/* Example custom order */
.item-1 {
  order: 3;
}
.item-2 {
  order: 1;
}
.item-3 {
  order: 2;
}`}
        </pre>
      </div>
    </div>
  );
};

export default OrderExercises;
