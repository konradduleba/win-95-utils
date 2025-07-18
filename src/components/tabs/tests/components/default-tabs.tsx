import { FC, useState } from "react";

import { Tabs } from "@components/tabs/tabs";

import { MOCKED_TABS, TABS_ID } from "../mocks";

export const DefaultTabs: FC = () => {
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
