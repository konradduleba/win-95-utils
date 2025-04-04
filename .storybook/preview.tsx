import React from "react";
import type { Preview } from "@storybook/react";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

import "normalize.css";
import "@styles/overrides.css";
import "@styles/colors.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Form"],
      },
    },
  },
  decorators: [
    (Story) => (
      <MainAppProviders>
        <Story />
      </MainAppProviders>
    ),
  ],
};

export default preview;
