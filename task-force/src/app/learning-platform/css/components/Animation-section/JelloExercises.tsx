import React from "react";

// src/app/learning-platform/css/components/animation-section/JelloExercise.tsx
export default function JelloExercise() {
    return (
      <div>
        {/* Jello Animation */}
        <h3 className="text-xl font-semibold mb-2">10.1 Jello</h3>
        <p className="text-md mb-4">
          The `jello` animation creates a wobbly effect that makes the element appear as though it is jiggling in place, much like a gelatin dessert.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Jello Animation */
@keyframes jello {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1) skewX(-10deg) skewY(-10deg);
  }
  50% {
    transform: scale(1) skewX(10deg) skewY(10deg);
  }
  75% {
    transform: scale(1.1) skewX(-10deg) skewY(-10deg);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: jello 1s ease-in-out;
}`}
        </pre>

        {/* Jello Invert Animation */}
        <h3 className="text-xl font-semibold mb-2">10.2 Jello Invert</h3>
        <p className="text-md mb-4">
          The `jelloInvert` animation inverts the direction of the `jello` effect, making the element appear to wiggle in reverse.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Jello Invert Animation */
@keyframes jelloInvert {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1) skewX(10deg) skewY(10deg);
  }
  50% {
    transform: scale(1) skewX(-10deg) skewY(-10deg);
  }
  75% {
    transform: scale(1.1) skewX(10deg) skewY(10deg);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: jelloInvert 1s ease-in-out;
}`}
        </pre>

        {/* Jello Horizontal Animation */}
        <h3 className="text-xl font-semibold mb-2">10.3 Jello Horizontal</h3>
        <p className="text-md mb-4">
          The `jelloHorizontal` animation adds a horizontal jiggling effect that makes the element shake back and forth.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Jello Horizontal Animation */
@keyframes jelloHorizontal {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1) skewX(-10deg);
  }
  50% {
    transform: scale(1) skewX(10deg);
  }
  75% {
    transform: scale(1.1) skewX(-10deg);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: jelloHorizontal 1s ease-in-out;
}`}
        </pre>

        {/* Jello Vertical Animation */}
        <h3 className="text-xl font-semibold mb-2">10.4 Jello Vertical</h3>
        <p className="text-md mb-4">
          The `jelloVertical` animation adds a vertical jiggling effect, making the element shake up and down.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Jello Vertical Animation */
@keyframes jelloVertical {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1) skewY(-10deg);
  }
  50% {
    transform: scale(1) skewY(10deg);
  }
  75% {
    transform: scale(1.1) skewY(-10deg);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: jelloVertical 1s ease-in-out;
}`}
        </pre>

        <p className="text-md">
          The jello animations add a playful, dynamic effect to elements, giving them a fun and eye-catching wiggle. You can customize the duration and intensity of the animation to suit your design.
        </p>
      </div>
    );
}
