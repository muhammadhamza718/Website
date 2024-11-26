import React from "react";
// src/app/learning-platform/css/components/animation-section/FadeExercise.tsx
export default function FadeExercise() {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">1.1 Fade In</h3>
             <p className="text-md mb-4">
               The `fadeIn` animation smoothly transitions an element&lsquo;s opacity from 0 to 1, creating 
               a gradual appearance effect.
             </p>
             <pre className="bg-gray-800 text-white p-4 rounded mb-4">
               {`/* Fade In Animation */
@keyframes fadeIn {
 0% { opacity: 0; }
 100% { opacity: 1; }
}

.element {
 animation: fadeIn 2s ease-in-out;
}`}
             </pre>

             {/* Fade Out Animation */}
             <h3 className="text-xl font-semibold mb-2">1.2 Fade Out</h3>
             <p className="text-md mb-4">
               The fadeOut animation transitions an element&lsquo;s opacity from 1 to 0, making it gradually 
               disappear from view.
             </p>
             <pre className="bg-gray-800 text-white p-4 rounded mb-4">
               {`/* Fade Out Animation */
@keyframes fadeOut {
 0% { opacity: 1; }
 100% { opacity: 0; }
}

.element {
 animation: fadeOut 2s ease-in-out;
}`}
             </pre>

             {/* Fade In Up Animation */}
             <h3 className="text-xl font-semibold mb-2">1.3 Fade In Up</h3>
             <p className="text-md mb-4">
               The fadeInUp animation combines a fade-in effect with upward movement, creating an 
               entrance animation that fades in while moving up.
             </p>
             <pre className="bg-gray-800 text-white p-4 rounded mb-4">
               {`/* Fade In Up Animation */
@keyframes fadeInUp {
 0% {
   opacity: 0;
   transform: translateY(20px);
 }
 100% {
   opacity: 1;
   transform: translateY(0);
 }
}

.element {
 animation: fadeInUp 2s ease-in-out;
}`}
             </pre>

             {/* Fade In Down Animation */}
             <h3 className="text-xl font-semibold mb-2">1.4 Fade In Down</h3>
             <p className="text-md mb-4">
               The fadeInDown animation fades in an element while moving it down from an initial position.
             </p>
             <pre className="bg-gray-800 text-white p-4 rounded mb-4">
               {`/* Fade In Down Animation */
@keyframes fadeInDown {
 0% {
   opacity: 0;
   transform: translateY(-20px);
 }
 100% {
   opacity: 1;
   transform: translateY(0);
 }
}

.element {
 animation: fadeInDown 2s ease-in-out;
}`}
             </pre>

             {/* Fade Out Up Animation */}
             <h3 className="text-xl font-semibold mb-2">1.5 Fade Out Up</h3>
             <p className="text-md mb-4">
               The fadeOutUp animation moves an element up while simultaneously fading it out.
             </p>
             <pre className="bg-gray-800 text-white p-4 rounded mb-4">
               {`/* Fade Out Up Animation */
@keyframes fadeOutUp {
 0% {
   opacity: 1;
   transform: translateY(0);
 }
 100% {
   opacity: 0;
   transform: translateY(-20px);
 }
}

.element {
 animation: fadeOutUp 2s ease-in-out;
}`}
             </pre>

             {/* Fade Out Down Animation */}
             <h3 className="text-xl font-semibold mb-2">1.6 Fade Out Down</h3>
             <p className="text-md mb-4">
               The fadeOutDown animation moves an element down while fading it out.
             </p>
             <pre className="bg-gray-800 text-white p-4 rounded mb-4">
               {`/* Fade Out Down Animation */
@keyframes fadeOutDown {
 0% {
   opacity: 1;
   transform: translateY(0);
 }
 100% {
   opacity: 0;
   transform: translateY(20px);
 }
}

.element {
 animation: fadeOutDown 2s ease-in-out;
}`}
             </pre>

             <p className="text-md">
               Use these animations to create visually appealing transitions that enhance user experience.
               You can customize the duration and easing function to suit your design needs.
             </p>
      </div>
    );
  }
  