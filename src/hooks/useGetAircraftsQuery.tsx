import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useAppContext } from "../context/AppContext";
import { Aircraft } from "../types/AircraftTypes";

export const useGetAircraftsQuery = () => {
  const [appContext, setAppContext] = useAppContext();

  const { data, isLoading, isSuccess, isError, error } = useQuery<
    any,
    AxiosError
  >(
    ["Aircraft"],
    async (): Promise<any> =>
      await axios.get(
        "https://infinite-dawn-93085.herokuapp.com/aircrafts/GABCD"
      ),
    {
      cacheTime: Infinity,
      onError: (error: Error) => console.error(`Error '${error.message}'`),
      onSuccess: () =>
        setAppContext({
          ...appContext,
        }),
    }
  );

  const aircraft: Aircraft = data?.data.data;
  aircraft.percent = 0;
  console.log("data", data);
  console.log("aircraft", aircraft);
  return { aircraft, isSuccess, isLoading, isError, error };
};
