import React from "react";

import { Box, Spinner } from "grommet";

type Props = {};

const gradient =
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(77,76,219,1) 100%)";

export const LoadingSpinner: React.FC<Props> = () => {
  return (
    <Box
      responsive
      justify="center"
      alignSelf="center"
      margin={{ top: "large", bottom: "large" }}
    >
      <Spinner
        background={gradient}
        size="large"
        animation={[
          { type: "fadeIn", duration: 1900, size: "large" },
          { type: "pulse", duration: 1450, size: "large" },
        ]}
        border={false}
      />
    </Box>
  );
};
