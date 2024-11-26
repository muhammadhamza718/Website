import React from "react";

// src/app/learning-platform/css/components/animation-section/SpinExercise.tsx
export default function SpinExercise() {
    return (
      <div>
        {/* Spin Animation */}
        <h3 className="text-xl font-semibold mb-2">4.1 Spin</h3>
        <p className="text-md mb-4">
          The `spin` animation rotates an element 360 degrees, creating a spinning effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Spin Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.element {
  animation: spin 2s linear infinite;
}`}
        </pre>

        {/* Spin In Animation */}
        <h3 className="text-xl font-semibold mb-2">4.2 Spin In</h3>
        <p className="text-md mb-4">
          The `spinIn` animation rotates an element from 0 to 360 degrees while fading in, creating an entrance effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Spin In Animation */
@keyframes spinIn {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: rotate(360deg);
  }
}

.element {
  animation: spinIn 2s ease-in-out;
}`}
        </pre>

        {/* Spin Out Animation */}
        <h3 className="text-xl font-semibold mb-2">4.3 Spin Out</h3>
        <p className="text-md mb-4">
          The `spinOut` animation rotates an element from 0 to 360 degrees while fading out, creating an exit effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Spin Out Animation */
@keyframes spinOut {
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}

.element {
  animation: spinOut 2s ease-in-out;
}`}
        </pre>

        {/* Spin Clockwise Animation */}
        <h3 className="text-xl font-semibold mb-2">4.4 Spin Clockwise</h3>
        <p className="text-md mb-4">
          The `spinClockwise` animation rotates an element clockwise in a continuous loop.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Spin Clockwise Animation */
@keyframes spinClockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.element {
  animation: spinClockwise 2s linear infinite;
}`}
        </pre>

        {/* Spin Counterclockwise Animation */}
        <h3 className="text-xl font-semibold mb-2">4.5 Spin Counterclockwise</h3>
        <p className="text-md mb-4">
          The `spinCounterclockwise` animation rotates an element in the opposite direction of a standard spin.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Spin Counterclockwise Animation */
@keyframes spinCounterclockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.element {
  animation: spinCounterclockwise 2s linear infinite;
}`}
        </pre>

        <p className="text-md">
          These spin animations add motion to elements, enhancing visual appeal. Customize the speed and easing as needed to create the perfect effect for your project.
        </p>
      </div>
    );
}
