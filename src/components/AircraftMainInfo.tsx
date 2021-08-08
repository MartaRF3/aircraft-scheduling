import React from "react";

import { Heading, Box, Meter, Stack } from "grommet";
import { useAppContext } from "../context/AppContext";
import { totalMinutesInADay } from "../const/constants";
import { IFlight } from "../types/FlightTypes";

type Props = {};

export const AircraftMainInfo: React.FC<Props> = () => {
  const [appContext] = useAppContext();
  const { selectedFlights } = appContext;

  const setTimeUsageValues = () => {
    const timePerFlight = selectedFlights.map((flight: IFlight) => {
      return flight.arrivaltime - flight.departuretime;
    });
    timePerFlight.map((i) => {
      return 1;
    });
    // per defaul meter has to be all grey
    // delete value from grey to departuretime
    // add value from flight green
    // after selected flight include purple 20min
    // calculate which grey value has to be added
    // value -> arrivaltime- departuretime

    return [
      { value: 50000, color: "#de81ee" },
      { value: 4000, color: "#B8B8B8" },
      { value: 30000, color: "#C1ECC0" },
    ];
  };

  return (
    <Box direction="column" justify="between" style={{ flexBasis: "70%" }}>
      <Heading responsive level={3}>
        {new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString()}
      </Heading>
      <Stack anchor="top-left">
        <Stack anchor="top-right">
          <Stack anchor="top">
            <Box style={{ paddingTop: "1.5rem" }}>
              <Meter
                thickness="large"
                size="xxlarge"
                type="bar"
                max={totalMinutesInADay}
                values={setTimeUsageValues()}
              />
            </Box>
            <Box
              pad="xsmall"
              style={{ marginBottom: "2rem" }}
              round
              background={{ color: "white" }}
              elevation="small"
            >
              12:00
            </Box>
          </Stack>
          <Box
            pad="xsmall"
            style={{ marginBottom: "2rem" }}
            round
            background={{ color: "white" }}
            elevation="small"
          >
            23:59
          </Box>
        </Stack>
        <Box
          pad="xsmall"
          style={{ marginBottom: "2rem" }}
          round
          background={{ color: "white" }}
          elevation="small"
        >
          00:00
        </Box>
      </Stack>
    </Box>
  );
};
