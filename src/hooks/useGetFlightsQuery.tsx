import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useAppContext } from "../context/AppContext";
import { Flights } from "../types/FlightTypes";

// https://infinite-dawn-93085.herokuapp.com/flights?offset=1&limit=10(max 25)
// https://infinite-dawn-93085.herokuapp.com/flights/AS1234
export const useGetFlightsQuery = (offset = "0", limit = "25") => {
  const [appContext, setAppContext] = useAppContext();

  const { data, isLoading, isSuccess, isError, error } = useQuery<
    any,
    AxiosError
  >(
    ["Flights", offset, limit],
    async (): Promise<any> =>
      await axios.get(
        `https://infinite-dawn-93085.herokuapp.com/flights?offset=${offset}&limit=${limit}`
      ),
    {
      onError: (error: Error) => console.error(`Error '${error.message}'`),
      onSuccess: () =>
        setAppContext({
          ...appContext,
          submitted: false,
          usersPerPageChanged: false,
        }),
    }
  );

  const flights: Flights = data?.data;

  return { flights, isSuccess, isLoading, isError, error };
};
