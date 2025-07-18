import { SupportedNavigationKeys } from "../../types";

export type TabsBuilderProps = {
  id: string;
};

export type ChangeSelectedTabUsingClickProps = {
  newTab: HTMLLIElement;
};

export type ChangeSelectedTabUsingArrowProps = {
  newTab: HTMLLIElement;
  direction: SupportedNavigationKeys;
};
