import React from "react";

// src/app/learning-platform/css/components/animation-section/RubberBandExercise.tsx
export default function RubberBandExercise() {
    return (
      <div>
        {/* Rubber Band Animation */}
        <h3 className="text-xl font-semibold mb-2">8.1 Rubber Band</h3>
        <p className="text-md mb-4">
          The `rubberBand` animation gives an element a stretchy, rubber-like effect by scaling it in 
          both directions before returning to its normal size.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Rubber Band Animation */
@keyframes rubberBand {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.25) translateX(-10px) translateY(-10px);
  }
  50% {
    transform: scale(0.75) translateX(10px) translateY(10px);
  }
  70% {
    transform: scale(1.15) translateX(-5px) translateY(-5px);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: rubberBand 1s ease-in-out;
}`}
        </pre>

        {/* Rubber Band In Animation */}
        <h3 className="text-xl font-semibold mb-2">8.2 Rubber Band In</h3>
        <p className="text-md mb-4">
          The `rubberBandIn` animation gives an element a stretching effect while it enters, creating 
          a dynamic and bouncy entrance.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Rubber Band In Animation */
@keyframes rubberBandIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  animation: rubberBandIn 1s ease-out;
}`}
        </pre>

        {/* Rubber Band Out Animation */}
        <h3 className="text-xl font-semibold mb-2">8.3 Rubber Band Out</h3>
        <p className="text-md mb-4">
          The `rubberBandOut` animation makes an element stretch and then return to its original size 
          before disappearing, creating a bouncy exit effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Rubber Band Out Animation */
@keyframes rubberBandOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0);
  }
}

.element {
  animation: rubberBandOut 1s ease-in;
}`}
        </pre>

        {/* Rubber Band In Up Animation */}
        <h3 className="text-xl font-semibold mb-2">8.4 Rubber Band In Up</h3>
        <p className="text-md mb-4">
          The `rubberBandInUp` animation combines the rubber band effect with upward movement, making 
          the element stretch and move up while entering the screen.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Rubber Band In Up Animation */
@keyframes rubberBandInUp {
  0% {
    transform: scale(0) translateY(100px);
  }
  50% {
    transform: scale(1.25) translateY(-20px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

.element {
  animation: rubberBandInUp 1.5s ease-out;
}`}
        </pre>

        {/* Rubber Band Out Up Animation */}
        <h3 className="text-xl font-semibold mb-2">8.5 Rubber Band Out Up</h3>
        <p className="text-md mb-4">
          The `rubberBandOutUp` animation creates a stretching and upward motion as the element exits, 
          making it feel like it’s bouncing off the top of the screen.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Rubber Band Out Up Animation */
@keyframes rubberBandOutUp {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(0.75) translateY(-20px);
  }
  100% {
    transform: scale(0) translateY(-100px);
  }
}

.element {
  animation: rubberBandOutUp 1.5s ease-in;
}`}
        </pre>

        <p className="text-md">
          The rubber band animations are perfect for adding a fun, bouncy effect to elements on your page, 
          whether you&lsquo;re introducing them or making them exit. Feel free to customize the timing and scale 
          factors to get the desired effect.
        </p>
      </div>
    );
}
