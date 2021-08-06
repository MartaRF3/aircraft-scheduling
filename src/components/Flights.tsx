import React from "react";
import { Box, Grid } from "grommet";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { FlightCard } from "./FlightCard";
import { useAppContext } from "../context/AppContext";
import { SortOption } from "../types/AppContextTypes";
import { Flight } from "../types/FlightTypes";

type Props = {};

export const Flights: React.FC<Props> = () => {
  const {
    flights,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetFlightsQuery();

  const [appContext] = useAppContext();
  const { sort } = appContext;

  const sortFlights = (): Flight[] => {
    let orderedList: Flight[] = [];

    switch (sort) {
      case SortOption.DepartureASC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          a.readable_departure.localeCompare(b.readable_departure)
        );
        return orderedList;
      }
      case SortOption.ArrivalASC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          a.readable_arrival.localeCompare(b.readable_arrival)
        );
        return orderedList;
      }
      case SortOption.DestinationASC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          a.destination.localeCompare(b.destination)
        );
        return orderedList;
      }
      case SortOption.OriginASC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          a.origin.localeCompare(b.origin)
        );
        return orderedList;
      }
      case SortOption.DepartureDESC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          b.readable_departure.localeCompare(a.readable_departure)
        );
        return orderedList;
      }
      case SortOption.ArrivalDESC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          b.readable_arrival.localeCompare(a.readable_arrival)
        );
        return orderedList;
      }
      case SortOption.DestinationDESC: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          b.destination.localeCompare(a.destination)
        );
        return orderedList;
      }

      default: {
        orderedList = flights.data.sort((a: Flight, b: Flight) =>
          b.origin.localeCompare(a.origin)
        );
        return orderedList;
      }
    }
  };

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (isSuccess) {
    return (
      <Box pad="small" fill>
        <Grid
          gap="small"
          rows="small"
          columns={{ count: "fill", size: ["small"] }}
        >
          {sortFlights().map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </Grid>
      </Box>
    );
  }
  return <></>;
};
