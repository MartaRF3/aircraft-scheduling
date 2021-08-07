import React from "react";

import { Card, Heading, CardBody, CardHeader, Box, Text } from "grommet";

import { IFlight } from "../types/FlightTypes";
import { useAppContext } from "../context/AppContext";
import { totalMinutesInADay } from "../const/constants";

type Props = {
  flight: IFlight;
};

export const FlightCard: React.FC<Props> = ({ flight }) => {
  const [appContext, setAppContext] = useAppContext();
  const { selectedFlights } = appContext;

  const sortFlightsSchedule = (newSelectedFlights: IFlight[]): IFlight[] => {
    let orderedList: IFlight[] = [];

    orderedList = newSelectedFlights.sort((a: IFlight, b: IFlight) =>
      a.readable_departure.localeCompare(b.readable_departure)
    );

    return orderedList;
  };

  const updateUsagePercentage = (newSelectedFlights: IFlight[]): number => {
    const timePerFlight = newSelectedFlights.map((flight) => {
      return flight.arrivaltime - flight.departuretime;
    });
    const totalTimeScheduled = timePerFlight.reduce(
      (timeA, timeB) => timeA + timeB,
      0
    );
    const newUsagePercentage = Number(
      ((totalTimeScheduled / totalMinutesInADay) * 100).toFixed(2)
    );
    return newUsagePercentage;
  };

  const handleOnClick = () => {
    let newSelectedFlights: IFlight[] = [];

    if (
      appContext.selectedFlights.find(
        (flightItem: IFlight) => flightItem.id === flight.id
      )
    ) {
      newSelectedFlights = selectedFlights.filter(
        (flightItem: IFlight) => flightItem.id !== flight.id
      );
    } else {
      newSelectedFlights = [...selectedFlights, flight];
    }

    setAppContext({
      ...appContext,
      selectedFlights: sortFlightsSchedule(newSelectedFlights),
      usagePercentage: updateUsagePercentage(newSelectedFlights),
    });
  };
  return (
    <Card
      style={{ borderRadius: "0px", marginLeft: "0.5rem" }}
      hoverIndicator={{
        background: {
          color: "#F5F5F5",
        },
        elevation: "medium",
      }}
      background={"#ffffff"}
      onClick={handleOnClick}
      width="small"
    >
      <CardBody margin="small" height="small">
        <Heading truncate level="3" margin="none">
          {flight.id}
        </Heading>
      </CardBody>
      <CardHeader
        pad={{ horizontal: "small", vertical: "small" }}
        background="#000000A0"
        width="medium"
        justify="start"
        direction="column"
      >
        <Box direction="row" justify="around" fill>
          <Heading truncate level="3" margin="none">
            {flight.origin}
          </Heading>
          <Heading truncate level="3" margin="none">
            {flight.destination}
          </Heading>
        </Box>
        <Box direction="row" justify="around" fill>
          <Text truncate size="medium">
            {flight.readable_departure}
          </Text>
          <Text truncate size="medium">
            {flight.readable_arrival}
          </Text>
        </Box>
      </CardHeader>
    </Card>
  );
};
