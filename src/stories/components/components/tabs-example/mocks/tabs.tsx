import { TabDefinition } from "@components/tabs";
import { Typography } from "@typography/typography";

export const MOCKED_TABS: TabDefinition[] = [
  {
    id: "first-tab",
    content: <Typography variant="h1">First Tab Content</Typography>,
    title: "First Tab",
  },
  {
    id: "second-tab",
    content: <Typography variant="h1">Second Tab Content</Typography>,
    title: "Second Tab",
  },
  {
    id: "third-tab",
    content: <Typography variant="h1">Third Tab Content</Typography>,
    title: "Third Tab",
  },
  {
    id: "fourth-tab",
    content: <Typography variant="h1">Fourth Tab Content</Typography>,
    title: "Fourth Tab",
  },
];

export const TABS_ID = "example-tabs-id";
