import React from "react";

import { Heading } from "grommet";
import { useGetAircraftsQuery } from "../hooks/useGetAircraftsQuery";
import { useGetFlightsQuery } from "../hooks/useGetFlightsQuery";

type Props = {};

export const Header: React.FC<Props> = () => {
  const { aircraft } = useGetAircraftsQuery();

  const { flights } = useGetFlightsQuery("1", "10");

  console.log(aircraft);
  console.log(flights);
  return (
    <Heading responsive level={1} size="large">
      Welcome to Aircraft Airlane Rotation Management!
    </Heading>
  );
};
