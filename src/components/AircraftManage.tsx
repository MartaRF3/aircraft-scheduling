import React from "react";

import { Box, Grid, Pagination } from "grommet";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";
import { Aircraft } from "./Aircraft";
import { SortRadioButtons } from "./SortRadioButtons";
import { useAppContext } from "../context/AppContext";
import { Flights } from "./Flights";
import { AircraftMainInfo } from "./AircraftMainInfo";
import { FlightsSchedule } from "./FlightsSchedule";

type Props = {};

export const AircraftManage: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext();
  const { page, flightsPerPage } = appContext;

  const { flights, isSuccess } = useGetFlightsQuery();

  const [aircraftSelected, setAircraftSelected] = React.useState(false);
  return (
    <Grid
      pad="small"
      fill
      areas={[
        { name: "aircraft", start: [0, 0], end: [1, 0] },
        { name: "flights", start: [0, 1], end: [0, 1] },
        { name: "schedule", start: [1, 1], end: [1, 1] },
      ]}
      columns={["flex", "15%"]}
      rows={["small", "flex"]}
    >
      <Box
        pad="small"
        gap="medium"
        gridArea="aircraft"
        direction="row-responsive"
        hoverIndicator={{
          elevation: "large",
        }}
        background="#F5F5F5"
        elevation="medium"
        onClick={() => {
          setAircraftSelected(!aircraftSelected);
        }}
      >
        <Aircraft />
        <AircraftMainInfo />
      </Box>
      {aircraftSelected && (
        <>
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
            <FlightsSchedule />
          </Box>
        </>
      )}
    </Grid>
  );
};
