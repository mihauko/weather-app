export function WeatherConditions({ text }: { text: string }) {
  return <p className="flex">Conditions: {text}</p>;
}

export function WeatherTemperature({ text }: { text: string }) {
  return <p>Tem.: {text}</p>;
}

export default function WeatherBasicContent({
  textTemp,
  textConditions,
}: {
  textTemp: string;
  textConditions: string;
}) {
  return (
    <>
      <WeatherTemperature text={textTemp} />
      <WeatherConditions text={textConditions} />
    </>
  );
}
