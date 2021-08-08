import React from "react";

import { Heading, Box, Meter, Stack } from "grommet";
import { useAppContext } from "../context/AppContext";
import {
  iddleTimeColor,
  midnite,
  scheduledTimeColor,
  totalMinutesInADay,
  turnaroundTime,
  turnaroundTimeColor,
} from "../const/constants";
import { IFlight } from "../types/FlightTypes";

type Props = {};

export const AircraftMainInfo: React.FC<Props> = () => {
  const [appContext] = useAppContext();
  const { selectedFlights } = appContext;

  const setTimeUsageValues = (): Array<any> => {
    let values: Array<any> = [];
    if (selectedFlights.length === 0) {
      values.push({ value: totalMinutesInADay, color: iddleTimeColor });
    } else {
      selectedFlights.map((flight: IFlight, i, selectedFlights) => {
        if (flight.departuretime > midnite && i === 0) {
          values.push({ value: flight.departuretime, color: iddleTimeColor });
        } else {
          if (
            selectedFlights[i - 1].arrivaltime + turnaroundTime !==
            flight.departuretime
          ) {
            values.push({
              value:
                flight.departuretime -
                selectedFlights[i - 1].arrivaltime +
                turnaroundTime,
              color: iddleTimeColor,
            });
          }
        }
        values.push({
          value: flight.arrivaltime - flight.departuretime,
          color: scheduledTimeColor,
        });
        values.push({ value: turnaroundTime, color: turnaroundTimeColor });
        if (
          flight.arrivaltime + turnaroundTime < totalMinutesInADay &&
          i === selectedFlights.length - 1
        ) {
          values.push({
            value: totalMinutesInADay - flight.arrivaltime + turnaroundTime,
            color: iddleTimeColor,
          });
        }
        return 1;
      });
    }

    return values;
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
