import { Meta, Story } from "@storybook/react/types-6-0";
import { AircraftManage } from "../components/AircraftManage";
import { AppContext } from "../context/AppContext";
import { Grommet } from "grommet";
import React from "react";
import { IAppContextProps, SortOption } from "../types/AppContextTypes";
import { rest } from "msw";
import selectedFlights from "../mocks/selectedFlights.json";
import flights0 from "../mocks/flights0.json";
import flights1 from "../mocks/flights1.json";

const apiGateway: string = `https://infinite-dawn-93085.herokuapp.com/flights?`;

export default {
  title: "AircraftManage",
  component: AircraftManage,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  const [context, setContext] = React.useState<IAppContextProps>({
    sort: SortOption.DepartureASC,
    flightsPerPage: "21",
    page: 1,
    selectedFlights: selectedFlights,
    usagePercentage: 19.1,
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
        <AircraftManage />
      </AppContext.Provider>
    </Grommet>
  );
};

/**
 * ResultsWithMockData of our App
 */
export const AircraftManageResultsWithMockData = Template.bind({});
AircraftManageResultsWithMockData.parameters = {
  msw: [
    rest.get(apiGateway.concat("offset=0&limit=21"), (req, res, ctx) => {
      return res(ctx.json(flights0));
    }),
  ],
};
