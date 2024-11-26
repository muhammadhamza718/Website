"use client";
import { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [location, setLocation] = useState<string>('Karachi, Pakistan');
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = '0134e7ac084488365cd553dadec32213';

  const fetchWeather = async (location: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0134e7ac084488365cd553dadec32213&units=metric`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather(location);
  };

  return (
    <div style={{ backgroundColor: '#1f2937' }} className="weather-widget p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Weather Widget</h2>
      <div className="flex justify-around mb-4">
        <input
          type="text"
          value={location}
          onChange={handleChangeLocation}
          className="p-2 border border-gray-300 text-black rounded-md w-3/4"
          placeholder="Enter city, country name or country code (e.g., Karachi, Pakistan or Karachi,PK)"
        />
        <button
          onClick={handleSearch}
          className="ml-2 w-1/4 p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-blue-600">Loading...</p>}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && !loading && (
        <div className="weather-info">
          <p className="text-xl font-semibold">Weather in {weather.name}, {weather.sys.country}</p>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Wind Direction: {weather.wind.deg}°</p>
          <p>Cloudiness: {weather.clouds.all}%</p>
          <p>Visibility: {weather.visibility / 1000} km</p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
