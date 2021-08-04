import React from "react";
import { Box, Grid } from "grommet";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { FlightCard } from "./FlightCard";

type Props = {};

export const Flights: React.FC<Props> = () => {
  const {
    flights,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetFlightsQuery();

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
          {flights?.data.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </Grid>
      </Box>
    );
  }
  return <></>;
};
