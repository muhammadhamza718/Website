// app/weather-app/page.tsx

import React from 'react';
import WeatherWidget from '../../components/WeatherWidget';
import "@/styles/components/page.modules.css";

export default function WeatherApp() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 animate-fadeInUp text-white">
      <WeatherWidget />
    </div>
  );
}
