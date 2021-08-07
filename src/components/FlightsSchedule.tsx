import React from "react";
import { Box } from "grommet";
import { FlightCard } from "./FlightCard";
import { useAppContext } from "../context/AppContext";
import { IFlight } from "../types/FlightTypes";

type Props = {};

export const FlightsSchedule: React.FC<Props> = () => {
  const [appContext] = useAppContext();
  const { selectedFlights } = appContext;
  const areSelectedFlights = selectedFlights.length > 0;

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
            {selectedFlights.map((flight: IFlight) => (
              <FlightCard key={flight.id.concat("sf")} flight={flight} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};
