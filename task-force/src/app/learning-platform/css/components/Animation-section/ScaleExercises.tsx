import React from "react";

// src/app/learning-platform/css/components/animation-section/ScaleExercise.tsx
export default function ScaleExercise() {
    return (
      <div>
        {/* Scale Animation */}
        <h3 className="text-xl font-semibold mb-2">5.1 Scale</h3>
        <p className="text-md mb-4">
          The `scale` animation increases the size of an element from its original size to a larger size.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Scale Animation */
@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

.element {
  animation: scale 2s ease-in-out infinite;
}`}
        </pre>

        {/* Scale In Animation */}
        <h3 className="text-xl font-semibold mb-2">5.2 Scale In</h3>
        <p className="text-md mb-4">
          The `scaleIn` animation smoothly scales up an element from 0 to its original size.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Scale In Animation */
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: scaleIn 2s ease-out;
}`}
        </pre>

        {/* Scale Out Animation */}
        <h3 className="text-xl font-semibold mb-2">5.3 Scale Out</h3>
        <p className="text-md mb-4">
          The `scaleOut` animation smoothly scales down an element from its normal size to 0, making it disappear.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Scale Out Animation */
@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

.element {
  animation: scaleOut 2s ease-in;
}`}
        </pre>

        {/* Scale Up Animation */}
        <h3 className="text-xl font-semibold mb-2">5.4 Scale Up</h3>
        <p className="text-md mb-4">
          The `scaleUp` animation increases the size of an element from its initial size to a larger size.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Scale Up Animation */
@keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.8);
  }
}

.element {
  animation: scaleUp 2s ease-in-out;
}`}
        </pre>

        {/* Scale Down Animation */}
        <h3 className="text-xl font-semibold mb-2">5.5 Scale Down</h3>
        <p className="text-md mb-4">
          The `scaleDown` animation decreases the size of an element, making it shrink to a smaller size.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Scale Down Animation */
@keyframes scaleDown {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}

.element {
  animation: scaleDown 2s ease-in-out;
}`}
        </pre>

        <p className="text-md">
          Scale animations can be used to make elements grow or shrink, adding depth and focus to your design. Customize the duration and easing function to fit your needs.
        </p>
      </div>
    );
}
