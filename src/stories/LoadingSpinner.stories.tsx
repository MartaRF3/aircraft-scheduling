import { Meta, Story } from "@storybook/react/types-6-0";
import { LoadingSpinner } from "../components/LoadingSpinner";

export default {
  title: "LoadingSpinner",
  component: LoadingSpinner,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <LoadingSpinner />;
};

/**
 * UsersPerPageIndex of our App
 */
export const LoadingSpinnerDefault = Template.bind({});
