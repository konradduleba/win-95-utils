import type { Meta, StoryObj } from "@storybook/react";

import { DefaultButton, TextDecoratedButton } from "./components";

const meta: Meta = {
  title: "Buttons",
};

export default meta;

export const DefaultButtonStory: StoryObj<typeof DefaultButton> = {
  name: "Default",
  render: (args) => <DefaultButton {...args} />,
  args: {
    textValue: "Apply",
    disabled: false,
  },
};

export const TextDecoratedStory: StoryObj<typeof TextDecoratedButton> = {
  name: "Text Decorated",
  render: (args) => <TextDecoratedButton {...args} />,
  args: {
    textValue: "Apply",
    disabled: false,
    triggerKeys: ["A", "a"],
  },
};
