import type { Meta, StoryObj } from "@storybook/react";

import {
  AUTO_COMPLETE_OPTIONS,
  LABEL_POSITIONS,
} from "./components/text-input/mocks";

import { Checkbox, TextInput } from "./components";

const meta: Meta = {
  title: "Forms",
};

export default meta;

export const TextInputStory: StoryObj<typeof TextInput> = {
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

export const CheckboxStory: StoryObj<typeof Checkbox> = {
  name: "Checkbox",
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "Example label",
    triggerKeys: ["E", "e"],
    disabled: false,
    required: false,
  },
};
