import React from "react";
import { Box, Grid } from "grommet";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { FlightCard } from "./FlightCard";
import { useAppContext } from "../context/AppContext";
import { SortOption } from "../types/AppContextTypes";
import { IFlight } from "../types/FlightTypes";
import { turnaroundTime } from "../const/constants";

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
  const { sort, selectedFlights } = appContext;

  const flightCanBeBefore = (
    flight: IFlight,
    selectedFlight: IFlight
  ): boolean => {
    if (flight.arrivaltime + turnaroundTime <= selectedFlight.departuretime) {
      if (flight.destination === selectedFlight.origin) {
        return true;
      }
    }

    return false;
  };

  const flightCanBeAfter = (
    flight: IFlight,
    selectedFlight: IFlight
  ): boolean => {
    if (flight.departuretime - turnaroundTime >= selectedFlight.departuretime) {
      if (flight.origin === selectedFlight.destination) {
        return true;
      }
    }

    return false;
  };

  const flightCanBeBetweenFlights = (
    flight: IFlight,
    selectedFlightBefore: IFlight,
    selectedFlightAfter: IFlight
  ): boolean => {
    const timeBetweenSelectedFlights =
      selectedFlightAfter.departuretime -
      selectedFlightBefore.arrivaltime -
      2 * turnaroundTime;
    const flightDuration = flight.arrivaltime - flight.departuretime;

    if (flightDuration <= timeBetweenSelectedFlights) {
      if (selectedFlightBefore.destination === flight.origin) {
        if (selectedFlightAfter.origin === flight.destination) {
          return true;
        }
      }
    }
    return false;
  };

  const setFlightsAvailability = (flights: IFlight[]): IFlight[] => {
    switch (selectedFlights.length) {
      case 0: {
        return flights.map((flight) => {
          return { ...flight, avalableForScheduling: true };
        });
      }
      case 1: {
        return flights.map((flight) => {
          if (
            selectedFlights.filter(
              (selectedFlight) => selectedFlight.id === flight.id
            ).length === 1
          ) {
            return { ...flight, avalableForScheduling: false };
          }
          if (
            flightCanBeBefore(flight, selectedFlights[0]) ||
            flightCanBeAfter(flight, selectedFlights[0])
          ) {
            return { ...flight, avalableForScheduling: true };
          }
          return { ...flight, avalableForScheduling: false };
        });
      }
      default: {
        return flights.map((flight) => {
          if (
            selectedFlights.filter(
              (selectedFlight) => selectedFlight.id === flight.id
            ).length === 1
          ) {
            return { ...flight, avalableForScheduling: false };
          }
          if (
            flightCanBeBefore(flight, selectedFlights[0]) ||
            flightCanBeAfter(
              flight,
              selectedFlights[selectedFlights.length - 1]
            )
          ) {
            return { ...flight, avalableForScheduling: true };
          }
          const flightInBetween = selectedFlights
            .map((selectedFlight, i, selectedFlights) => {
              if (i < selectedFlights.length - 1) {
                if (
                  flightCanBeBetweenFlights(
                    flight,
                    selectedFlight,
                    selectedFlights[i + 1]
                  )
                ) {
                  return true;
                }
              }
              return false;
            })
            .filter((item) => item === true).length;

          return {
            ...flight,
            avalableForScheduling: flightInBetween === 1 ? true : false,
          };
        });
      }
    }
  };

  const sortFlights = (): IFlight[] => {
    let orderedList: IFlight[] = [];

    switch (sort) {
      case SortOption.DepartureASC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          a.readable_departure.localeCompare(b.readable_departure)
        );
        return orderedList;
      }
      case SortOption.ArrivalASC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          a.readable_arrival.localeCompare(b.readable_arrival)
        );
        return orderedList;
      }
      case SortOption.DestinationASC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          a.destination.localeCompare(b.destination)
        );
        return orderedList;
      }
      case SortOption.OriginASC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          a.origin.localeCompare(b.origin)
        );
        return orderedList;
      }
      case SortOption.DepartureDESC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          b.readable_departure.localeCompare(a.readable_departure)
        );
        return orderedList;
      }
      case SortOption.ArrivalDESC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          b.readable_arrival.localeCompare(a.readable_arrival)
        );
        return orderedList;
      }
      case SortOption.DestinationDESC: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
          b.destination.localeCompare(a.destination)
        );
        return orderedList;
      }

      default: {
        orderedList = flights.data.sort((a: IFlight, b: IFlight) =>
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
          {setFlightsAvailability(sortFlights()).map((flight) => {
            return <FlightCard key={flight.id} flight={flight} />;
          })}
        </Grid>
      </Box>
    );
  }
  return <></>;
};
