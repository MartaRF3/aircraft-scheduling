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

type Props = {};

export const Aircraft: React.FC<Props> = () => {
  const {
    aircraft,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetAircraftsQuery();

  console.log(aircraft);

  if (isLoading) return <LoadingSpinner />;

  if (isSuccess) {
    return (
      <Card
        hoverIndicator={{
          background: {
            color: "background-contrast",
          },
          elevation: "medium",
        }}
        onClick={() => {
          alert("clicked");
        }}
        width="small"
        key={aircraft?.data.data.ident}
      >
        <CardBody height="small">
          <Image
            fit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6jsRElCg1kArT5CAVcH-yHruOJfUXNrdhg&usqp=CAU"
            a11yTitle="avatar_url"
          />
        </CardBody>
        <CardHeader
          pad={{ horizontal: "small", vertical: "small" }}
          background="#000000A0"
          width="small"
          justify="start"
        >
          <Box>
            <Heading truncate level="3" margin="none">
              {aircraft?.data.data.ident}
            </Heading>
            <Text truncate size="medium">
              {aircraft?.data.data.type}
            </Text>
          </Box>
        </CardHeader>
        <CardFooter justify="center">
          <Heading truncate level="3" margin="none">
            53%
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
