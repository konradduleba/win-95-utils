import type { Meta, StoryObj } from "@storybook/react-vite";

import { IntroWrapper, General } from "./components";

const meta: Meta = {
  title: "Introduction",
  component: IntroWrapper,
};

export default meta;

type Story = StoryObj;

export const GeneralStory: Story = {
  name: "General",
  args: {
    children: <General />,
  },
};
