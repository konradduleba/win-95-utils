import type { Meta, StoryObj } from "@storybook/react";

import {
  AUTO_COMPLETE_OPTIONS,
  LABEL_POSITIONS,
} from "./components/text-input/mocks";
import { RADIOBOX_OPTIONS } from "./components/radiobox/mocks";
import { SINGLE_SELECT_OPTIONS } from "./components/single-select/mocks";

import { Checkbox, Radiobox, SingleSelect, TextInput } from "./components";

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
    disabled: false,
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

export const RadioboxStory: StoryObj<typeof Radiobox> = {
  name: "Radiobox",
  render: (args) => <Radiobox {...args} />,
  args: {
    options: RADIOBOX_OPTIONS,
    initialValue: undefined,
  },
  argTypes: {
    initialValue: {
      control: "select",
      options: RADIOBOX_OPTIONS.map(({ value }) => value),
    },
  },
};

export const SingleSelectStory: StoryObj<typeof SingleSelect> = {
  name: "Single Select",
  render: (args) => <SingleSelect {...args} />,
  args: {
    options: SINGLE_SELECT_OPTIONS,
    disabled: false,
    placeholder: "Placeholder",
  },
};
