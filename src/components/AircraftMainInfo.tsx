import React from "react";

import { Heading, Box, Meter, Stack } from "grommet";

type Props = {};

export const AircraftMainInfo: React.FC<Props> = () => {
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
                max={12}
                values={[
                  { value: 5, color: "#de81ee" },
                  { value: 4, color: "#B8B8B8" },
                  { value: 3, color: "#C1ECC0" },
                ]}
              />
            </Box>
            <Box
              pad="xsmall"
              style={{ marginBottom: "2rem" }}
              round
              background={{ color: "white" }}
            >
              12:00
            </Box>
          </Stack>
          <Box
            pad="xsmall"
            style={{ marginBottom: "2rem" }}
            round
            background={{ color: "white" }}
          >
            23:59
          </Box>
        </Stack>
        <Box
          pad="xsmall"
          style={{ marginBottom: "2rem" }}
          round
          background={{ color: "white" }}
        >
          00:00
        </Box>
      </Stack>
    </Box>
  );
};
