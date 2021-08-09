import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useAppContext } from "../context/AppContext";
import { IFlights } from "../types/FlightTypes";

export const useGetFlightsQuery = () => {
  const [appContext, setAppContext] = useAppContext();

  const { page, flightsPerPage } = appContext;

  const { data, isLoading, isSuccess, isError, error } = useQuery<
    any,
    AxiosError
  >(
    ["Flights", page, flightsPerPage],
    async (): Promise<any> =>
      await axios.get(
        `https://infinite-dawn-93085.herokuapp.com/flights?offset=${(
          page - 1
        ).toString()}&limit=${appContext.flightsPerPage}`
      ),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      onError: (error: Error) => console.error(`Error '${error.message}'`),
      onSuccess: () =>
        setAppContext({
          ...appContext,
        }),
    }
  );

  const flights: IFlights = data?.data;

  return { flights, isSuccess, isLoading, isError, error };
};
