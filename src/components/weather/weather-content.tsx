import WeatherBasicContent from './weather-basic-content';

import { WeatherData } from '@/utils/types/weather-types';

export default function WeatherContent({ data }: { data?: WeatherData }) {
  if (!data?.current || !data?.forecast) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Current Weather</h3>
        <WeatherBasicContent
          textConditions={data.current.condition.text}
          src={data.current.condition.icon}
          textTemp={`${data.current.temp_c}°C`}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">
          {data.forecast.forecastday.length}-Day Forecast
        </h3>
        {data.forecast.forecastday.map((fday, index) => {
          return (
            <div key={index} className="mt-2">
              <p>{fday.date}</p>
              <WeatherBasicContent
                textConditions={fday.day.condition?.text}
                src={fday.day.condition.icon}
                textTemp={`${fday.day.mintemp_c}°C - ${fday.day.maxtemp_c}°C,`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
