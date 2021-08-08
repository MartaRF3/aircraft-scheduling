import { Meta, Story } from "@storybook/react/types-6-0";
import { Flights } from "../components/Flights";

export default {
  title: "Flights",
  component: Flights,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <Flights />;
};

/**
 * Search of our App
 */
export const FlightsResultsWithMockData = Template.bind({});
