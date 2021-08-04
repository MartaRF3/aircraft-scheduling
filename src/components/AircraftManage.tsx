import React from "react";

import { Box, Grid } from "grommet";
import { useGetAircraftsQuery } from "../hooks/useGetAircraftsQuery";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";

type Props = {};

export const AircraftManage: React.FC<Props> = () => {
  const { aircraft } = useGetAircraftsQuery();

  const { flights } = useGetFlightsQuery("1", "10");

  console.log(aircraft);
  console.log(flights);
  return (
    <Grid
      fill
      areas={[
        { name: "aircraft", start: [0, 0], end: [0, 0] },
        { name: "flights", start: [1, 0], end: [1, 0] },
        { name: "schedule", start: [2, 0], end: [2, 0] },
      ]}
      columns={["medium", "flex", "medium"]}
      rows={["flex"]}
    >
      <Box gridArea="aircraft">
        <h1>Aircraft</h1>
      </Box>
      <Box gridArea="flights">
        <h1>Flights</h1>
      </Box>
      <Box gridArea="schedule">
        <h1>Schedule</h1>
      </Box>
    </Grid>
  );
};
