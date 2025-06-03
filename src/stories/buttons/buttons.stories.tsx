import type { Meta, StoryObj } from "@storybook/react-vite";

import { DefaultButton, ActionButtonExample } from "./components";

const meta: Meta = {
  title: "Buttons",
};

export default meta;

export const DefaultButtonStory: StoryObj<typeof DefaultButton> = {
  name: "Button",
  render: (args) => <DefaultButton {...args} />,
  args: {
    textValue: "Apply",
    disabled: false,
  },
};

export const ActionButtonStory: StoryObj<typeof DefaultButton> = {
  name: "Action Button",
  render: (args) => <ActionButtonExample {...args} />,
  args: {
    disabled: false,
  },
};
