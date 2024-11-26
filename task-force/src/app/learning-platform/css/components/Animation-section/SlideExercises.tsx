import React from "react";

// src/app/learning-platform/css/components/animation-section/SlideExercise.tsx
export default function SlideExercise() {
    return (
      <div>
        {/* Slide In Animation */}
        <h3 className="text-xl font-semibold mb-2">2.1 Slide In</h3>
        <p className="text-md mb-4">
          The `slideIn` animation moves an element into view from the left while maintaining opacity, creating a smooth entrance.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Slide In Animation */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: slideIn 2s ease-in-out;
}`}
        </pre>

        {/* Slide Out Animation */}
        <h3 className="text-xl font-semibold mb-2">2.2 Slide Out</h3>
        <p className="text-md mb-4">
          The `slideOut` animation moves an element out of view to the left while maintaining opacity, creating a smooth exit.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Slide Out Animation */
@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.element {
  animation: slideOut 2s ease-in-out;
}`}
        </pre>

        {/* Slide In Up Animation */}
        <h3 className="text-xl font-semibold mb-2">2.3 Slide In Up</h3>
        <p className="text-md mb-4">
          The `slideInUp` animation moves an element into view from below while maintaining opacity, creating an upward entrance.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Slide In Up Animation */
@keyframes slideInUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.element {
  animation: slideInUp 2s ease-in-out;
}`}
        </pre>

        {/* Slide In Down Animation */}
        <h3 className="text-xl font-semibold mb-2">2.4 Slide In Down</h3>
        <p className="text-md mb-4">
          The `slideInDown` animation moves an element into view from above while maintaining opacity, creating a downward entrance.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Slide In Down Animation */
@keyframes slideInDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.element {
  animation: slideInDown 2s ease-in-out;
}`}
        </pre>

        {/* Slide Out Up Animation */}
        <h3 className="text-xl font-semibold mb-2">2.5 Slide Out Up</h3>
        <p className="text-md mb-4">
          The `slideOutUp` animation moves an element out of view to the top while maintaining opacity, creating an upward exit.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Slide Out Up Animation */
@keyframes slideOutUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

.element {
  animation: slideOutUp 2s ease-in-out;
}`}
        </pre>

        {/* Slide Out Down Animation */}
        <h3 className="text-xl font-semibold mb-2">2.6 Slide Out Down</h3>
        <p className="text-md mb-4">
          The `slideOutDown` animation moves an element out of view to the bottom while maintaining opacity, creating a downward exit.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`/* Slide Out Down Animation */
@keyframes slideOutDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

.element {
  animation: slideOutDown 2s ease-in-out;
}`}
        </pre>

        <p className="text-md">
          Use these slide animations to add dynamic movement and engaging transitions to your UI elements. Customize the duration and easing as needed.
        </p>
      </div>
    );
}
