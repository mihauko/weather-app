'use client';

import { useState } from 'react';

import StateHandler from './weather-state-handler';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { City } from '@/utils/constants';
import { useGetCityWeatherAction } from '@/utils/hooks/useGetCityWeather';

export default function WeatherApp() {
  const [activeCity, setActiveCity] = useState<City | string>(City.Gliwice);
  const { data, isLoading, isError } = useGetCityWeatherAction(activeCity);

  return (
    <div className="relative w-full overflow-hidden">
      <Card className="w-full border-none bg-black/50 text-white">
        <CardHeader className="md:p-8">
          <CardTitle className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent sm:text-6xl dark:from-white dark:to-slate-900/10">
            Weather Forecast
          </CardTitle>
          <CardDescription className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-lg leading-none text-transparent sm:text-2xl dark:from-white dark:to-slate-600/70">
            Select a city to view weather
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={City.Gliwice} onValueChange={setActiveCity}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value={City.Gliwice}>{City.Gliwice}</TabsTrigger>
              <TabsTrigger value={City.Hamburg}>{City.Hamburg}</TabsTrigger>
            </TabsList>
            <ScrollArea className="mt-2 h-[450px] w-full rounded-md border p-4">
              <StateHandler
                isLoading={isLoading}
                isError={isError}
                data={data}
              />
            </ScrollArea>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
