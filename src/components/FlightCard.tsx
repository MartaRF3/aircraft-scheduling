import React from "react";

import { Card, Heading, CardBody, CardHeader, Box, Text } from "grommet";

import { Flight } from "../types/FlightTypes";
import { useAppContext } from "../context/AppContext";

type Props = {
  flight: Flight;
};

export const FlightCard: React.FC<Props> = ({ flight }) => {
  const [appContext, setAppContext] = useAppContext();

  const handleOnClick = () => {
    let newSelectedFlights: Flight[] = [];

    if (
      appContext.selectedFlights.find(
        (flightItem) => flightItem.id === flight.id
      )
    ) {
      newSelectedFlights = appContext.selectedFlights.filter(
        (flightItem) => flightItem.id !== flight.id
      );
    } else {
      newSelectedFlights = [...appContext.selectedFlights, flight];
    }
    setAppContext({
      ...appContext,
      selectedFlights: newSelectedFlights,
    });
    console.log(appContext);
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
