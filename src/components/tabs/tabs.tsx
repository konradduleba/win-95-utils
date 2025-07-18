import { FC } from "react";
import { TabsContextProps, TabsProps } from "./types";

import { TabsContext } from "./tabs.context";

import { Content, Headers, TabsWrapper } from "./components";

import { useHandleTabs } from "./hooks";

export const Tabs: FC<TabsProps> = (props) => {
  const { id } = props;
  const { currentTabContent, tabHeaders } = useHandleTabs(props);

  const properties: TabsContextProps = {
    currentTabContent,
    tabHeaders,
    id,
  };

  return (
    <TabsContext.Provider value={properties}>
      <TabsWrapper>
        <Headers />
        <Content />
      </TabsWrapper>
    </TabsContext.Provider>
  );
};
