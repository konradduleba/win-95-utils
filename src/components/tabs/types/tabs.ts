import { ReactNode } from "react";

export enum SupportedNavigationKeys {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

export type TabDefinition = {
  id: string;
  title: string;
  content: ReactNode;
};

export type TabsProps = {
  id: string;
  tabs: TabDefinition[];
  selectedTabId: string;
  onTabChange: (tabId: string) => void;
};

export type TabHeaderProps = {
  id: string;
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

export type TabsContextProps = Pick<TabsProps, "id"> & {
  tabHeaders: TabHeaderProps[];
  currentTabContent: ReactNode;
};
