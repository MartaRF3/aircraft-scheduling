import React from "react";

import { Box, Grid } from "grommet";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";
import { Aircraft } from "./Aircraft";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { FlightCard } from "./FlightCard";
import { SortRadioButtons } from "./SortRadioButtons";

type Props = {};

export const AircraftManage: React.FC<Props> = () => {
  const { flights, isSuccess, isLoading, isError, error } = useGetFlightsQuery(
    "1",
    "25"
  );

  console.log(flights?.data);

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (isSuccess) {
    return (
      <Grid
        fill
        areas={[
          { name: "aircraft", start: [0, 0], end: [0, 0] },
          { name: "flights", start: [1, 0], end: [1, 0] },
          { name: "schedule", start: [2, 0], end: [2, 0] },
        ]}
        columns={["small", "flex", "small"]}
        rows={["flex"]}
      >
        <Box pad="small" gridArea="aircraft">
          <Aircraft />
        </Box>
        <Box gridArea="flights" direction="column">
          <Box>
            <SortRadioButtons />
          </Box>
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
        </Box>
        <Box gridArea="schedule">
          <h1>Schedule</h1>
        </Box>
      </Grid>
    );
  }
  return <></>;
};
