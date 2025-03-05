import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import WeatherContent from './weather-content';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WeatherData } from '@/utils/types/weather-types';

enum ForecastType {
  Daily = 'Dzienna',
  Weekly = 'Tygodniowa',
}

interface WeatherFullscreenDialogProps {
  isOpen: boolean;
  onClose: () => void;
  cityData: {
    city: string;
    data?: WeatherData | null;
  } | null;
}

export default function WeatherFullscreenDialog({
  isOpen,
  onClose,
  cityData,
}: WeatherFullscreenDialogProps) {
  const [forecastType, setForecastType] = useState<ForecastType>(
    ForecastType.Daily
  );
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    if (cityData?.data?.location?.localtime) {
      const date = new Date(cityData.data.location.localtime);
      const formattedDate = date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      const formattedTime = date.toLocaleTimeString('pl-PL', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentDateTime(`${formattedDate}, ${formattedTime}`);
    }
  }, [cityData]);

  if (!cityData || !cityData.data) {
    return null;
  }

  const cityParts = cityData.city.split(',');
  const cityName = cityParts[0].trim();
  const countryName = cityParts.length > 1 ? cityParts[1].trim() : '';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="m-0 h-screen max-h-screen w-full max-w-full overflow-hidden bg-black/90 p-0 text-white">
        <div className="flex h-full flex-col">
          <DialogHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl">
                  {cityName} {countryName && <span>({countryName})</span>}
                </DialogTitle>
                {currentDateTime && (
                  <p className="mt-1 text-sm text-gray-400">
                    {currentDateTime}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="size-8 p-0"
              >
                <X className="size-5" />
              </Button>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-4">
            <Tabs
              defaultValue={forecastType}
              onValueChange={(value) => setForecastType(value as ForecastType)}
            >
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value={ForecastType.Daily}>
                  {ForecastType.Daily}
                </TabsTrigger>
                <TabsTrigger value={ForecastType.Weekly}>
                  {ForecastType.Weekly}
                </TabsTrigger>
              </TabsList>

              <div className="rounded-md border p-4">
                {/* Aktualna pogoda zawsze widoczna w trybie pełnoekranowym */}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">
                    Aktualna pogoda
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <img
                        src={cityData.data.current.condition.icon}
                        alt={cityData.data.current.condition.text}
                        className="size-16"
                      />
                      <p className="text-center text-2xl font-bold">
                        {cityData.data.current.temp_c}°C
                      </p>
                    </div>
                    <div>
                      <p className="text-lg">
                        {cityData.data.current.condition.text}
                      </p>
                      <p>Wilgotność: {cityData.data.current.humidity}%</p>
                      <p>
                        Wiatr: {cityData.data.current.wind_kph} km/h, kierunek:{' '}
                        {cityData.data.current.wind_dir}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prognoza */}
                <WeatherContent
                  data={cityData.data}
                  forecastType={forecastType}
                  isExpanded={false}
                />
              </div>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
