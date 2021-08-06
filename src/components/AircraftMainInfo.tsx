import React from "react";

import { Heading, Box, Meter } from "grommet";

type Props = {};

export const AircraftMainInfo: React.FC<Props> = () => {
  return (
    <Box direction="column" justify="between" style={{ flexBasis: "70%" }}>
      <Heading responsive level={3}>
        {new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString()}
      </Heading>
      <Meter
        thickness="large"
        size="large"
        type="bar"
        values={[
          { value: 70, color: "purple" },
          { value: 10, color: "grey" },
          { value: 30, color: "green" },
        ]}
      />
    </Box>
  );
};
