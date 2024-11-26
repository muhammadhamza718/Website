import React from "react";

// src/app/learning-platform/css/components/animation-section/BounceExercise.tsx
export default function BounceExercise() {
    return (
      <div>
        {/* Bounce In Animation */}
        <h3 className="text-xl font-semibold mb-2">3.1 Bounce In</h3>
        <p className="text-md mb-4">
          The `bounceIn` animation makes an element appear with a bouncing effect, creating a lively entrance.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Bounce In Animation */
@keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.9);
  }
  60% {
    opacity: 1;
    transform: scale(1.03);
  }
  80% {
    transform: scale(0.97);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.element {
  animation: bounceIn 2s ease-in-out;
}`}
        </pre>

        {/* Bounce Out Animation */}
        <h3 className="text-xl font-semibold mb-2">3.2 Bounce Out</h3>
        <p className="text-md mb-4">
          The `bounceOut` animation makes an element exit with a bouncing effect, creating a dynamic departure.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Bounce Out Animation */
@keyframes bounceOut {
  20% {
    transform: scale(0.9);
  }
  50%, 55% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
}

.element {
  animation: bounceOut 2s ease-in-out;
}`}
        </pre>

        {/* Bounce In Up Animation */}
        <h3 className="text-xl font-semibold mb-2">3.3 Bounce In Up</h3>
        <p className="text-md mb-4">
          The `bounceInUp` animation makes an element appear from below with a bouncing effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Bounce In Up Animation */
@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translateY(1000px);
  }
  60% {
    opacity: 1;
    transform: translateY(-30px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.element {
  animation: bounceInUp 2s ease-in-out;
}`}
        </pre>

        {/* Bounce In Down Animation */}
        <h3 className="text-xl font-semibold mb-2">3.4 Bounce In Down</h3>
        <p className="text-md mb-4">
          The `bounceInDown` animation makes an element appear from above with a bouncing effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Bounce In Down Animation */
@keyframes bounceInDown {
  0% {
    opacity: 0;
    transform: translateY(-1000px);
  }
  60% {
    opacity: 1;
    transform: translateY(30px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.element {
  animation: bounceInDown 2s ease-in-out;
}`}
        </pre>

        {/* Bounce Out Up Animation */}
        <h3 className="text-xl font-semibold mb-2">3.5 Bounce Out Up</h3>
        <p className="text-md mb-4">
          The `bounceOutUp` animation makes an element exit upward with a bouncing effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Bounce Out Up Animation */
@keyframes bounceOutUp {
  20% {
    transform: translateY(-10px);
  }
  40%, 45% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px);
  }
}

.element {
  animation: bounceOutUp 2s ease-in-out;
}`}
        </pre>

        {/* Bounce Out Down Animation */}
        <h3 className="text-xl font-semibold mb-2">3.6 Bounce Out Down</h3>
        <p className="text-md mb-4">
          The `bounceOutDown` animation makes an element exit downward with a bouncing effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Bounce Out Down Animation */
@keyframes bounceOutDown {
  20% {
    transform: translateY(10px);
  }
  40%, 45% {
    opacity: 1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    transform: translateY(1000px);
  }
}

.element {
  animation: bounceOutDown 2s ease-in-out;
}`}
        </pre>

        <p className="text-md">
          Use these bounce animations to create attention-grabbing transitions. Adjust the animation duration and easing functions to fit your design.
        </p>
      </div>
    );
}
