import React from "react";

// src/app/learning-platform/css/components/animation-section/ShakeExercise.tsx
export default function ShakeExercise() {
    return (
      <div>
        {/* Shake Animation */}
        <h3 className="text-xl font-semibold mb-2">9.1 Shake</h3>
        <p className="text-md mb-4">
          The `shake` animation creates a horizontal shaking effect, making the element appear as if it is vibrating.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Shake Animation */
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: shake 0.5s ease-in-out;
}`}
        </pre>

        {/* Shake X Animation */}
        <h3 className="text-xl font-semibold mb-2">9.2 Shake X</h3>
        <p className="text-md mb-4">
          The `shakeX` animation causes an element to shake horizontally, similar to the standard shake, but you can customize the amplitude or speed.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Shake X Animation */
@keyframes shakeX {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(15px);
  }
  75% {
    transform: translateX(-15px);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: shakeX 0.6s ease-in-out;
}`}
        </pre>

        {/* Shake Y Animation */}
        <h3 className="text-xl font-semibold mb-2">9.3 Shake Y</h3>
        <p className="text-md mb-4">
          The `shakeY` animation shakes the element vertically, creating an up-and-down movement.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Shake Y Animation */
@keyframes shakeY {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(15px);
  }
  75% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

.element {
  animation: shakeY 0.6s ease-in-out;
}`}
        </pre>

        {/* Shake Rotate Animation */}
        <h3 className="text-xl font-semibold mb-2">9.4 Shake Rotate</h3>
        <p className="text-md mb-4">
          The `shakeRotate` animation shakes the element while also rotating it slightly, adding a more dynamic effect.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Shake Rotate Animation */
@keyframes shakeRotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.element {
  animation: shakeRotate 0.5s ease-in-out;
}`}
        </pre>

        <p className="text-md">
          The shake animations can add some fun and emphasis to elements, particularly when you want to grab the user&lsquo;s attention. You can adjust the intensity and duration of the shake for different effects.
        </p>
      </div>
    );
}
