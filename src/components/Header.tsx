import React from "react";

import { Heading } from "grommet";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Heading responsive level={2} margin="xlarge" size="large">
        Aircraft Scheduling
      </Heading>
    </>
  );
};
