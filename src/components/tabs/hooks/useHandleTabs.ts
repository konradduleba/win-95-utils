import { ReactNode } from "react";

import {
  TabsProps,
  TabsContextProps,
  TabDefinition,
  TabHeaderProps,
} from "../types";

export const useHandleTabs = ({
  onTabChange,
  selectedTabId,
  tabs,
}: TabsProps): TabsContextProps => {
  const tabHeaders: TabHeaderProps[] = [];
  let currentTabContent: ReactNode;

  tabs.forEach(({ id, title, content }: TabDefinition) => {
    const isSelected = id === selectedTabId;

    if (isSelected) {
      currentTabContent = content;
    }

    tabHeaders.push({
      id,
      title,
      isSelected,
      onClick: () => onTabChange(id),
    });
  });

  return {
    currentTabContent,
    tabHeaders,
  };
};
