import { Meta, Story } from "@storybook/react/types-6-0";
import { FlightsSchedule } from "../components/FlightsSchedule";

export default {
  title: "FlightsSchedule",
  component: FlightsSchedule,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <FlightsSchedule />;
};

/**
 * ResultsWithMockData of our App
 */
export const ScheduleWithMockData = Template.bind({});
