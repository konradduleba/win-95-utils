import type { Meta, StoryObj } from "@storybook/react";

import {
  AUTO_COMPLETE_OPTIONS,
  LABEL_POSITIONS,
} from "./components/text-input/mocks";

import { TextInput } from "./components";

const meta: Meta = {
  title: "Forms",
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const TextInputStory: Story = {
  name: "Text input",
  render: (args) => <TextInput {...args} />,
  args: {
    label: "Example label",
    isPassword: false,
    autocompleteId: "off",
    triggerKeys: ["E", "e"],
  },
  argTypes: {
    autocompleteId: {
      control: "select",
      options: AUTO_COMPLETE_OPTIONS,
      if: {
        arg: "isPassword",
        eq: false,
      },
    },
    labelPosition: {
      control: "select",
      options: LABEL_POSITIONS,
      if: {
        arg: "label",
        neq: "",
      },
    },
  },
};
