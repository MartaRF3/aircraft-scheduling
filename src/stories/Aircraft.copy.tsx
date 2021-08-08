import { Meta, Story } from "@storybook/react/types-6-0";
import { Aircraft } from "../components/Aircraft";

export default {
  title: "Aircraft",
  component: Aircraft,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <Aircraft />;
};

/**
 * UsersPerPageIndex of our App
 */
export const AircraftDefault = Template.bind({});
