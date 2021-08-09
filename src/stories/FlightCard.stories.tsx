import { Meta, Story } from "@storybook/react/types-6-0";
import { FlightCard } from "../components/FlightCard";
import flight from "../mocks/flight.json";
import React from "react";
import { IAppContextProps, SortOption } from "../types/AppContextTypes";
import selectedFlights from "../mocks/selectedFlights.json";
import { AppContext } from "../context/AppContext";
import { Grommet } from "grommet";

export default {
  title: "FlightCard",
  component: FlightCard,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  const [context, setContext] = React.useState<IAppContextProps>({
    sort: SortOption.DepartureASC,
    flightsPerPage: "21",
    page: 1,
    selectedFlights: selectedFlights,
    usagePercentage: 0,
  });
  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };
  return (
    <Grommet theme={theme}>
      <AppContext.Provider value={[context, setContext]}>
        <FlightCard flight={flight} />
      </AppContext.Provider>
    </Grommet>
  );
};

/**
 * UsersPerPageIndex of our App
 */
export const FlightCardDefault = Template.bind({});
