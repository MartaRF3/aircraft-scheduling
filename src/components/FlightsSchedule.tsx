import React from "react";
import { Box, Heading } from "grommet";
import { FlightCard } from "./FlightCard";
import { useAppContext } from "../context/AppContext";
import { Flight } from "../types/FlightTypes";

type Props = {};

export const FlightsSchedule: React.FC<Props> = () => {
  const [appContext] = useAppContext();
  const { selectedFlights } = appContext;

  const sortFlightsSchedule = (): Flight[] => {
    let orderedList: Flight[] = [];

    orderedList = selectedFlights.sort((a: Flight, b: Flight) =>
      a.readable_departure.localeCompare(b.readable_departure)
    );

    return orderedList;
  };

  return (
    <Box border align="center" margin="small">
      <Heading responsive level={3}>
        Schedule
      </Heading>
      <Box pad="small" fill direction="column" gap="small">
        {sortFlightsSchedule().map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </Box>
    </Box>
  );
};
