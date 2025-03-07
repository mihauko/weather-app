export function WeatherConditions({ text }: { text: string }) {
  return <p className="flex">Warunki: {text}</p>;
}

export function WeatherTemperature({ text }: { text: string }) {
  return <p>Temperatura: {text}</p>;
}

export function WeatherHumidity({ value }: { value?: number }) {
  if (value === undefined) return null;
  return <p>Wilgotność: {value}%</p>;
}

export function WeatherWind({
  speed,
  direction,
}: {
  speed?: number;
  direction?: string;
}) {
  if (speed === undefined || direction === undefined) return null;
  return (
    <p>
      Wiatr: {speed} km/h, {direction}
    </p>
  );
}

export default function WeatherBasicContent({
  textTemp,
  textConditions,
  humidity,
  windSpeed,
  windDirection,
}: {
  textTemp: string;
  textConditions: string;
  humidity?: number;
  windSpeed?: number;
  windDirection?: string;
}) {
  return (
    <div className="space-y-1">
      <WeatherTemperature text={textTemp} />
      <WeatherConditions text={textConditions} />
      {humidity !== undefined && <WeatherHumidity value={humidity} />}
      {windSpeed !== undefined && windDirection !== undefined && (
        <WeatherWind speed={windSpeed} direction={windDirection} />
      )}
    </div>
  );
}
