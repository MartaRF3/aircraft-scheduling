import React from "react";

import { Box, Grid, Pagination } from "grommet";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";
import { Aircraft } from "./Aircraft";
import { SortRadioButtons } from "./SortRadioButtons";
import { useAppContext } from "../context/AppContext";
import { Flights } from "./Flights";

type Props = {};

export const AircraftManage: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext();
  const { page, flightsPerPage } = appContext;

  const { flights, isSuccess } = useGetFlightsQuery();

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
        <Box margin="medium">
          <SortRadioButtons />
        </Box>
        <Flights />
        {isSuccess && (
          <Box>
            <Pagination
              step={Number(flightsPerPage)}
              numberEdgePages={2}
              page={page}
              numberMiddlePages={4}
              alignSelf="center"
              numberItems={flights?.pagination.total}
              onChange={({ page }) => {
                setAppContext({ ...appContext, page });
              }}
            />
          </Box>
        )}
      </Box>
      <Box gridArea="schedule">
        <h1>Schedule</h1>
      </Box>
    </Grid>
  );
};
