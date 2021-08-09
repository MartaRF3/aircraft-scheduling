import React from "react";

import {
  Card,
  Heading,
  Image,
  CardBody,
  CardHeader,
  Box,
  Text,
  CardFooter,
} from "grommet";
import { useGetAircraftsQuery } from "../hooks/useGetAircraftsQuery";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingSpinner } from "./LoadingSpinner";
import { useAppContext } from "../context/AppContext";

type Props = {};

export const Aircraft: React.FC<Props> = () => {
  const {
    aircraft,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetAircraftsQuery();
  const [appContext] = useAppContext();
  const { usagePercentage } = appContext;

  if (isLoading) return <LoadingSpinner />;

  if (isSuccess) {
    return (
      <Card style={{ borderRadius: "0px" }} width="medium" key={aircraft.ident}>
        <CardBody height="medium">
          <Image
            fit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6jsRElCg1kArT5CAVcH-yHruOJfUXNrdhg&usqp=CAU"
            a11yTitle="avatar_url"
          />
        </CardBody>
        <CardHeader
          pad={{ horizontal: "small", vertical: "small" }}
          background="#000000A0"
          width="medium"
          justify="start"
        >
          <Box>
            <Heading truncate level="3" margin="none">
              {aircraft.ident}
            </Heading>
            <Text truncate size="medium">
              {aircraft.type}
            </Text>
          </Box>
        </CardHeader>
        <CardFooter justify="center">
          <Heading truncate level="3" margin="none">
            {usagePercentage}%
          </Heading>
        </CardFooter>
      </Card>
    );
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return <></>;
};
