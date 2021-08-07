import React from "react";
import { Box } from "grommet";
import { FlightCard } from "./FlightCard";
import { useAppContext } from "../context/AppContext";
import { Flight } from "../types/FlightTypes";

type Props = {};

export const FlightsSchedule: React.FC<Props> = () => {
  const [appContext] = useAppContext();
  const { selectedFlights } = appContext;
  const areSelectedFlights = selectedFlights.length > 0;

  const sortFlightsSchedule = (): Flight[] => {
    let orderedList: Flight[] = [];

    orderedList = selectedFlights.sort((a: Flight, b: Flight) =>
      a.readable_departure.localeCompare(b.readable_departure)
    );

    return orderedList;
  };

  return (
    <>
      {areSelectedFlights && (
        <Box align="center" margin="small">
          <Box
            background="#C1ECC0"
            pad="small"
            fill
            direction="column"
            gap="small"
          >
            {sortFlightsSchedule().map((flight) => (
              <FlightCard key={flight.id.concat("sf")} flight={flight} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};
