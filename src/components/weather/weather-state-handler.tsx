import { useState } from 'react';
import { ChevronDown, ChevronUp, Maximize2, X } from 'lucide-react';

import WeatherContent from './weather-content';

import { Button } from '@/components/ui/button';
import { WeatherData } from '@/utils/types/weather-types';

interface CityData {
  city: string;
  data?: WeatherData | null;
  isLoading: boolean;
  isError: boolean;
}

const StateHandler = ({
  citiesData,
  forecastType,
  onRemoveCity,
  onExpandFullScreen,
}: {
  citiesData: CityData[];
  forecastType: string;
  onRemoveCity: (city: string) => void;
  onExpandFullScreen?: (cityData: CityData) => void;
}) => {
  // Stan do śledzenia, które miasta mają rozwinięte aktualne dane
  const [expandedCities, setExpandedCities] = useState<Record<string, boolean>>(
    {}
  );

  // Funkcja do przełączania stanu rozwinięcia dla danego miasta
  const toggleCityExpansion = (cityKey: string) => {
    setExpandedCities((prev) => ({
      ...prev,
      [cityKey]: !prev[cityKey],
    }));
  };

  // Funkcja do formatowania daty i godziny
  const formatDateTime = (dateTimeStr: string) => {
    const date = new Date(dateTimeStr);
    const formattedTime = date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedTime;
  };

  if (citiesData.length === 0) {
    return <p>Dodaj miasto, aby zobaczyć prognozę pogody</p>;
  }

  return (
    <div className="space-y-4">
      {citiesData.map((cityData, index) => {
        const cityKey = `${cityData.city}-${index}`;
        const isExpanded = expandedCities[cityKey] || false;
        const cityParts = cityData.city.split(',');
        const cityName = cityParts[0].trim();
        const countryName = cityParts.length > 1 ? cityParts[1].trim() : '';
        const localTime = cityData.data?.location?.localtime
          ? formatDateTime(cityData.data.location.localtime)
          : '';

        return (
          <div key={cityKey} className="relative rounded-md border p-3">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <h2 className="text-base font-bold">
                    {cityName}
                    {countryName && (
                      <span className="ml-1 text-sm font-normal">
                        ({countryName})
                      </span>
                    )}
                  </h2>
                  {localTime && (
                    <p className="text-xs text-gray-400">{localTime}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCityExpansion(cityKey)}
                  className="size-6 p-0"
                >
                  {isExpanded ? (
                    <ChevronUp className="size-3" />
                  ) : (
                    <ChevronDown className="size-3" />
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-1">
                {onExpandFullScreen && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onExpandFullScreen(cityData)}
                    className="size-6 p-0"
                  >
                    <Maximize2 className="size-3" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveCity(cityData.city)}
                  className="size-6 p-0"
                >
                  <X className="size-3" />
                </Button>
              </div>
            </div>

            {cityData.isError ? (
              <p className="text-xs">
                Błąd podczas ładowania danych dla {cityData.city}
              </p>
            ) : cityData.isLoading ? (
              <p className="text-xs">Ładowanie danych dla {cityData.city}...</p>
            ) : (
              <WeatherContent
                data={cityData.data as WeatherData}
                forecastType={forecastType}
                isExpanded={isExpanded}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StateHandler;
