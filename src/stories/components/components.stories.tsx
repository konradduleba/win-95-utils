import { FieldGroup } from "@components/field-group/field-group";
import { ScrollableContent } from "@components/scrollable-content/scrollable-content";
import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { Meta, StoryObj } from "@storybook/react-vite";

import {
  FieldGroupExample,
  ScrollableContentExample,
  BoxBorderExample,
  BoxBorderExampleProps,
} from "./components";

const meta: Meta = {
  title: "Components",
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

export const ScrollableContentStory: StoryObj<typeof ScrollableContent> = {
  name: "Scrollable Content",
  render: (args) => <ScrollableContentExample {...args} />,
  args: {
    customHeight: 200,
    scrollStep: 30,
  },
};

export const TextWithDecoratedLetterStory: StoryObj<
  typeof TextWithDecoratedLetter
> = {
  name: "Text With Decorated Letter",
  render: (args) => <TextWithDecoratedLetter {...args} />,
  args: {
    letter: "E",
    text: "Text with Example",
    textDecoration: "none",
  },
  argTypes: {
    textDecoration: {
      control: "select",
      options: ["underline", "overline", "line-through", "none"],
    },
  },
};

export const BoxBorderStory: StoryObj<typeof BoxBorderExample> = {
  name: "Box Border",
  render: (args: BoxBorderExampleProps) => <BoxBorderExample {...args} />,
  args: {
    backgroundColor: "#54A8A8",
  },
};
