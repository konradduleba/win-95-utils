import { FieldGroup } from "@components/field-group/field-group";

import { Meta, StoryObj } from "@storybook/react";

import { FieldGroupExample } from "./components";

const meta: Meta = {
  title: "Wrappers",
};

export default meta;

export const FieldGroupStory: StoryObj<typeof FieldGroup> = {
  name: "Field Group",
  render: (args) => <FieldGroupExample {...args} />,
  args: {
    title: "A long example of field group title",
    focusLetter: "x",
  },
};
