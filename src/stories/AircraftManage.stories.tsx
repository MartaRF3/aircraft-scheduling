import { Meta, Story } from "@storybook/react/types-6-0";
import { AircraftManage } from "../components/AircraftManage";
import flight from "../mocks/flight.json";

export default {
  title: "AircraftManage",
  component: AircraftManage,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <AircraftManage />;
};

/**
 * UsersPerPageIndex of our App
 */
export const AircraftManageDefault = Template.bind({});
