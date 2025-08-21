import { FieldGroup } from "@components/field-group/field-group";
import { ScrollableContent } from "@components/scrollable-content/scrollable-content";
import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";
import { Tabs } from "@components/tabs/tabs";
import { Tooltip } from "@components/tooltip/tooltip";
import { DraggableWindow } from "@components/draggable-window/draggable-window";

import { Meta, StoryObj } from "@storybook/react-vite";

import {
  FieldGroupExample,
  ScrollableContentExample,
  BoxBorderExample,
  TabsExample,
  TooltipExample,
  DraggableWindowExample,
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
  render: (args) => <BoxBorderExample {...args} />,
  args: {
    backgroundColor: "#54A8A8",
    variant: "01",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["01", "02"],
    },
  },
};

export const TabsStory: StoryObj<typeof Tabs> = {
  name: "Tabs",
  render: () => <TabsExample />,
};

export const TooltipStory: StoryObj<typeof Tooltip> = {
  name: "Tooltip",
  render: (args) => <TooltipExample {...args} />,
  args: {
    message: "Tooltip custom Message",
    placement: "bottomRight",
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["bottomRight", "bottomLeft", "topRight", "topLeft"],
    },
  },
};

export const DraggableWindowStory: StoryObj<typeof DraggableWindow> = {
  name: "Draggable Window",
  render: (args) => <DraggableWindowExample {...args} />,
  args: {
    title: "Welcome",
  },
};
