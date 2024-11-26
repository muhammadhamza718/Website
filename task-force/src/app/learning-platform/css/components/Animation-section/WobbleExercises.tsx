import React from "react";

// src/app/learning-platform/css/components/animation-section/WobbleExercise.tsx
export default function WobbleExercise() {
    return (
      <div>
        {/* Wobble Animation */}
        <h3 className="text-xl font-semibold mb-2">6.1 Wobble</h3>
        <p className="text-md mb-4">
          The `wobble` animation creates a shaking effect, making an element move back and forth.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Wobble Animation */
@keyframes wobble {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-25px);
  }
  30% {
    transform: translateX(20px);
  }
  45% {
    transform: translateX(-15px);
  }
  60% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: wobble 1.5s ease-in-out;
}`}
        </pre>

        {/* Wobble In Animation */}
        <h3 className="text-xl font-semibold mb-2">6.2 Wobble In</h3>
        <p className="text-md mb-4">
          The `wobbleIn` animation makes an element enter the screen with a shaking effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Wobble In Animation */
@keyframes wobbleIn {
  0% {
    transform: translateX(-2000px);
  }
  60% {
    transform: translateX(30px);
  }
  80% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: wobbleIn 1.5s ease-out;
}`}
        </pre>

        {/* Wobble Out Animation */}
        <h3 className="text-xl font-semibold mb-2">6.3 Wobble Out</h3>
        <p className="text-md mb-4">
          The `wobbleOut` animation moves an element off the screen with a shaking motion.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Wobble Out Animation */
@keyframes wobbleOut {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(15px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(2000px);
  }
}

.element {
  animation: wobbleOut 1.5s ease-in-out;
}`}
        </pre>

        {/* Wobble In Up Animation */}
        <h3 className="text-xl font-semibold mb-2">6.4 Wobble In Up</h3>
        <p className="text-md mb-4">
          The `wobbleInUp` animation combines a wobble effect with upward movement, making an element shake as it enters the screen.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Wobble In Up Animation */
@keyframes wobbleInUp {
  0% {
    transform: translateY(2000px);
  }
  60% {
    transform: translateY(-30px);
  }
  80% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

.element {
  animation: wobbleInUp 1.5s ease-out;
}`}
        </pre>

        {/* Wobble Out Up Animation */}
        <h3 className="text-xl font-semibold mb-2">6.5 Wobble Out Up</h3>
        <p className="text-md mb-4">
          The `wobbleOutUp` animation moves an element off the screen while wobbling upwards.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Wobble Out Up Animation */
@keyframes wobbleOutUp {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(15px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(-2000px);
  }
}

.element {
  animation: wobbleOutUp 1.5s ease-in-out;
}`}
        </pre>

        <p className="text-md">
          The wobble animations can be used to create attention-grabbing effects for elements, especially when they appear or disappear from the screen.
        </p>
      </div>
    );
}
