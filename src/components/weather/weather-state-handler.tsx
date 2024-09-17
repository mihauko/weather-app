import { TabsContent } from '../ui/tabs';
import WeatherContent from './weather-content';

import { City } from '@/utils/constants';
import { WeatherData } from '@/utils/types/weather-types';

const StateHandler = ({
  data,
  isError,
  isLoading,
}: {
  data?: WeatherData | null;
  isError: boolean;
  isLoading: boolean;
}) => {
  if (isError) {
    return <p>Error loading data</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <TabsContent value={City.Gliwice}>
          {data?.location?.name === City.Gliwice && (
            <WeatherContent data={data} />
          )}
        </TabsContent>
        <TabsContent value={City.Hamburg}>
          {data?.location?.name === City.Hamburg && (
            <WeatherContent data={data} />
          )}
        </TabsContent>
      </>
    );
  }
};

export default StateHandler;
