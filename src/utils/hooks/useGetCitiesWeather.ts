import { WeatherData } from '../types/weather-types';
import { useGetCityWeatherAction } from './useGetCityWeather';

interface CityWeatherData {
  city: string;
  data?: WeatherData | null;
  isLoading: boolean;
  isError: boolean;
}

export const useGetCitiesWeather = (cities: string[]): CityWeatherData[] => {
  // Tworzymy osobne hooki dla każdego miasta
  const gliwiceData = useGetCityWeatherAction(cities[0] || '');
  const hamburgData = useGetCityWeatherAction(cities[1] || '');
  const city3Data = useGetCityWeatherAction(cities[2] || '');
  const city4Data = useGetCityWeatherAction(cities[3] || '');
  const city5Data = useGetCityWeatherAction(cities[4] || '');

  // Mapujemy dane na odpowiedni format
  return cities.map((city, index) => {
    let data;
    switch (index) {
      case 0:
        data = gliwiceData;
        break;
      case 1:
        data = hamburgData;
        break;
      case 2:
        data = city3Data;
        break;
      case 3:
        data = city4Data;
        break;
      case 4:
        data = city5Data;
        break;
      default:
        data = { data: null, isLoading: false, isError: true };
    }
    return { city, ...data };
  });
};
