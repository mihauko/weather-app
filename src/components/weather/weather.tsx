'use client';

import { useState } from 'react';

import { Input } from '../ui/input';
import WeatherFullscreenDialog from './weather-fullscreen-dialog';
import StateHandler from './weather-state-handler';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { City } from '@/utils/constants';
import { useGetCitiesWeather } from '@/utils/hooks/useGetCitiesWeather';
import { WeatherData } from '@/utils/types/weather-types';

enum ForecastType {
  Daily = 'Dzienna',
  Weekly = 'Tygodniowa',
}

const MAX_CITIES = 5;

export default function WeatherApp() {
  const [cities, setCities] = useState<string[]>([
    City.Walencja,
    City.Alicante,
  ]);
  const [newCity, setNewCity] = useState<string>('');
  const [forecastType, setForecastType] = useState<ForecastType>(
    ForecastType.Daily
  );
  const [fullscreenCity, setFullscreenCity] = useState<{
    city: string;
    data?: WeatherData | null;
  } | null>(null);

  // Pobieramy dane pogodowe dla wszystkich miast
  const citiesData = useGetCitiesWeather(cities);

  const handleAddCity = () => {
    if (newCity && !cities.includes(newCity) && cities.length < MAX_CITIES) {
      setCities([...cities, newCity]);
      setNewCity('');
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    setCities(cities.filter((city) => city !== cityToRemove));
  };

  const handleExpandFullScreen = (cityData: {
    city: string;
    data?: WeatherData | null;
  }) => {
    setFullscreenCity(cityData);
  };

  const handleCloseFullScreen = () => {
    setFullscreenCity(null);
  };

  return (
    <div className="relative w-full">
      <Card className="w-full border-none bg-black/50 text-white">
        <CardHeader className="md:p-6">
          <CardTitle className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent sm:text-5xl dark:from-white dark:to-slate-900/10">
            Weather Forecast
          </CardTitle>
          <CardDescription className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-lg leading-none text-transparent sm:text-xl dark:from-white dark:to-slate-600/70">
            Porównaj pogodę w różnych miastach
          </CardDescription>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Input
                placeholder="np. Warsaw, Poland"
                value={newCity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewCity(e.target.value)
                }
                className="bg-black/30 text-white"
                disabled={cities.length >= MAX_CITIES}
              />
              <Button
                onClick={handleAddCity}
                variant="outline"
                className="bg-black/30 text-white"
                disabled={!newCity || cities.length >= MAX_CITIES}
              >
                Dodaj
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              Format: Miasto, Kraj (np. Warsaw, Poland)
            </p>
          </div>
          {cities.length >= MAX_CITIES && (
            <p className="mt-2 text-sm text-red-400">
              Osiągnięto maksymalną liczbę miast ({MAX_CITIES})
            </p>
          )}
        </CardHeader>
        <CardContent className="pb-6 md:px-6">
          <Tabs
            defaultValue={ForecastType.Daily}
            onValueChange={(value) => setForecastType(value as ForecastType)}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value={ForecastType.Daily}>
                {ForecastType.Daily}
              </TabsTrigger>
              <TabsTrigger value={ForecastType.Weekly}>
                {ForecastType.Weekly}
              </TabsTrigger>
            </TabsList>
            <div className="mt-2 w-full rounded-md border p-4">
              <StateHandler
                citiesData={citiesData}
                forecastType={forecastType}
                onRemoveCity={handleRemoveCity}
                onExpandFullScreen={handleExpandFullScreen}
              />
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Dialog pełnoekranowy */}
      <WeatherFullscreenDialog
        isOpen={!!fullscreenCity}
        onClose={handleCloseFullScreen}
        cityData={fullscreenCity}
      />
    </div>
  );
}
