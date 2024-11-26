import React from "react";

// src/app/learning-platform/css/components/animation-section/PulseExercise.tsx
export default function PulseExercise() {
    return (
      <div>
        {/* Pulse Animation */}
        <h3 className="text-xl font-semibold mb-2">7.1 Pulse</h3>
        <p className="text-md mb-4">
          The `pulse` animation creates a continuous expanding and contracting effect on an element, 
          simulating a &quot;breathing&quot; or pulsing effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Pulse Animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: pulse 2s infinite;
}`}
        </pre>

        {/* Pulse In Animation */}
        <h3 className="text-xl font-semibold mb-2">7.2 Pulse In</h3>
        <p className="text-md mb-4">
          The `pulseIn` animation makes an element gradually grow from 0 to its normal size, creating a pulsing effect as it enters.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Pulse In Animation */
@keyframes pulseIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: pulseIn 1s ease-out;
}`}
        </pre>

        {/* Pulse Out Animation */}
        <h3 className="text-xl font-semibold mb-2">7.3 Pulse Out</h3>
        <p className="text-md mb-4">
          The `pulseOut` animation makes an element shrink out to 0, creating a pulsing effect as it disappears.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Pulse Out Animation */
@keyframes pulseOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0);
  }
}

.element {
  animation: pulseOut 1s ease-in;
}`}
        </pre>

        {/* Pulse In Up Animation */}
        <h3 className="text-xl font-semibold mb-2">7.4 Pulse In Up</h3>
        <p className="text-md mb-4">
          The `pulseInUp` animation combines a pulsing effect with upward movement, making an element scale up while moving up.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Pulse In Up Animation */
@keyframes pulseInUp {
  0% {
    transform: scale(0) translateY(100px);
  }
  50% {
    transform: scale(1.1) translateY(-20px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

.element {
  animation: pulseInUp 1.5s ease-out;
}`}
        </pre>

        {/* Pulse Out Up Animation */}
        <h3 className="text-xl font-semibold mb-2">7.5 Pulse Out Up</h3>
        <p className="text-md mb-4">
          The `pulseOutUp` animation scales an element down while moving it upwards, creating a shrinking effect as it exits the screen.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Pulse Out Up Animation */
@keyframes pulseOutUp {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(0.9) translateY(-20px);
  }
  100% {
    transform: scale(0) translateY(-100px);
  }
}

.element {
  animation: pulseOutUp 1.5s ease-in;
}`}
        </pre>

        <p className="text-md">
          These pulse animations can add subtle yet noticeable effects to emphasize elements in your design. 
          You can adjust the scale factor, duration, and easing to fit your design.
        </p>
      </div>
    );
}
