import WeatherImage from './weather-image';

export function WeatherConditions({
  src,
  text,
}: {
  src: string;
  text: string;
}) {
  return (
    <p className="flex">
      Conditions: {text}
      <WeatherImage src={src} />
    </p>
  );
}

export function WeatherTemperature({ text }: { text: string }) {
  return <p>Tem.: {text}</p>;
}

export default function WeatherBasicContent({
  src,
  textTemp,
  textConditions,
}: {
  src: string;
  textTemp: string;
  textConditions: string;
}) {
  return (
    <>
      <WeatherTemperature text={textTemp} />
      <WeatherConditions text={textConditions} src={src} />
    </>
  );
}
