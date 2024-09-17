import Meteors from '@/components/magicui/meteors';
import { Container, Main } from '@/components/ui/layout-components';
import WeatherApp from '@/components/weather/weather';

const Home = () => {
  return (
    <Main className="flex min-h-screen w-full">
      <Meteors number={30} />
      <Container className="flex w-full items-center justify-center p-0 md:p-8">
        <WeatherApp />
      </Container>
    </Main>
  );
};

export default Home;
