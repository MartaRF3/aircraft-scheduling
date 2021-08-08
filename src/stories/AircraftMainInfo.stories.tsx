import { Meta, Story } from "@storybook/react/types-6-0";
import { AircraftMainInfo } from "../components/AircraftMainInfo";

export default {
  title: "AircraftMainInfo",
  component: AircraftMainInfo,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <AircraftMainInfo />;
};

/**
 * UsersPerPageIndex of our App
 */
export const AircraftMainInfoDefault = Template.bind({});
