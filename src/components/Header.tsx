import React from "react";

import { Heading } from "grommet";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Heading responsive level={2} margin="medium" size="large">
        Aircraft Scheduling
      </Heading>
      <Heading responsive level={3} size="large">
        {new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString()}
      </Heading>
    </>
  );
};
