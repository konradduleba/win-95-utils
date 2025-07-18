import { FC, useState } from "react";

import { Tabs } from "@components/tabs";

import { MOCKED_TABS, TABS_ID } from "./mocks";

export const TabsExample: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(MOCKED_TABS[0].id);

  return (
    <Tabs
      id={TABS_ID}
      tabs={MOCKED_TABS}
      selectedTabId={selectedTabId}
      onTabChange={setSelectedTabId}
    />
  );
};
