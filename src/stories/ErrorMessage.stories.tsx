import { Meta, Story } from "@storybook/react/types-6-0";
import { ErrorMessage } from "../components/ErrorMessage";

export default {
  title: "ErrorMessage",
  component: ErrorMessage,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = () => {
  return <ErrorMessage error={"error"} />;
};

/**
 * UsersPerPageIndex of our App
 */
export const ErrorMessageDefault = Template.bind({});
