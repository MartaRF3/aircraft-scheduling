import React from "react";

import { Box, Paragraph } from "grommet";

type Props = {
  error: any;
};

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <>
      <Box margin={{ top: "large", bottom: "large" }}>
        <Paragraph responsive textAlign="center">
          An Error had occured, please load the page again.
        </Paragraph>
        <Paragraph responsive textAlign="center">
          The Aircrafts API is responding: {error?.response?.data.data.message}
        </Paragraph>
      </Box>
    </>
  );
};
