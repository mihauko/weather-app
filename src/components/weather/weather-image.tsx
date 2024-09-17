import Image from 'next/image';

export default function WeatherImage({ src }: { src: string }) {
  return <Image width={24} height={24} alt="" src={`https://${src}`} />;
}
