import { Meta, Story } from "@storybook/react/types-6-0";
import { FlightCard } from "../components/FlightCard";
import flight from "../mocks/flight.json";

export default {
  title: "FlightCard",
  component: FlightCard,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <FlightCard flight={flight} />;
};

/**
 * UsersPerPageIndex of our App
 */
export const FlightCardDefault = Template.bind({});
