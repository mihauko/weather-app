import WeatherBasicContent from './weather-basic-content';

import { WeatherData } from '@/utils/types/weather-types';

enum ForecastType {
  Daily = 'Dzienna',
  Weekly = 'Tygodniowa',
}

export default function WeatherContent({
  data,
  forecastType,
  isExpanded = false,
}: {
  data?: WeatherData;
  forecastType: string;
  isExpanded?: boolean;
}) {
  if (!data?.current || !data?.forecast) {
    return null;
  }

  // Pobierz aktualną godzinę z danych lokalizacji
  const currentDateTime = new Date(data.location.localtime);
  const currentHour = currentDateTime.getHours();

  // Filtruj godziny, aby pokazać tylko od aktualnej godziny do końca dnia
  const filteredHours = data.forecast.forecastday[0].hour.filter((hour) => {
    const hourTime = new Date(hour.time);
    return hourTime.getHours() >= currentHour;
  });

  // Dodaj godziny z następnego dnia, aby uzupełnić 24 godziny
  if (filteredHours.length < 24 && data.forecast.forecastday.length > 1) {
    const nextDayHours = data.forecast.forecastday[1].hour.slice(
      0,
      24 - filteredHours.length
    );
    filteredHours.push(...nextDayHours);
  }

  return (
    <div className="space-y-2">
      {isExpanded && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold">Aktualna pogoda</h3>
          <WeatherBasicContent
            textConditions={data.current.condition.text}
            textTemp={`${data.current.temp_c}°C`}
            humidity={data.current.humidity}
            windSpeed={data.current.wind_kph}
            windDirection={data.current.wind_dir}
          />
        </div>
      )}

      {forecastType === ForecastType.Daily ? (
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {filteredHours.map((hour, index) => (
              <div
                key={index}
                className="inline-block min-w-[100px] rounded-md border p-2"
              >
                <p className="text-center text-xs font-medium">
                  {hour.time.split(' ')[1]}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={hour.condition.icon}
                    alt={hour.condition.text}
                    className="size-8"
                  />
                  <p className="text-center text-sm font-bold">
                    {hour.temp_c}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {data.forecast.forecastday.map((fday, index) => (
              <div
                key={index}
                className="inline-block min-w-[100px] rounded-md border p-2"
              >
                <p className="text-center text-xs font-medium">{fday.date}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={fday.day.condition?.icon}
                    alt={fday.day.condition?.text}
                    className="size-8"
                  />
                  <p className="text-center text-sm font-bold">
                    {fday.day.avgtemp_c}°C
                  </p>
                  <p className="text-center text-xs">
                    {fday.day.mintemp_c}°C - {fday.day.maxtemp_c}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
