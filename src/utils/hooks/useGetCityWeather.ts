import { useQuery } from '@tanstack/react-query';

import { getWeatherAction } from '../actions/getWeatherAction';

export const useGetCityWeatherAction = (city: string) => {
  return useQuery({
    queryKey: ['get-weather', city],
    queryFn: () => getWeatherAction(city),
  });
};
