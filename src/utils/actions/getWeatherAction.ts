'use server';

import { WeatherData } from '../types/weather-types';

export const getWeatherAction = async (
  name: string
): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${name}&days=3&aqi=no`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};
