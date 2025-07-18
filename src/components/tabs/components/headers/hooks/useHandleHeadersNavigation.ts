import { KeyboardEvent } from "react";

import { useTabs } from "../../../hooks";

import { SupportedNavigationKeys } from "../../../types";

export const useHandleHeadersNavigation = () => {
  const { tabHeaders } = useTabs();
  const selectedIndex = tabHeaders.findIndex(({ isSelected }) => isSelected);

  const onHandleKeyDown = ({ key }: KeyboardEvent<HTMLUListElement>) => {
    if (
      key !== SupportedNavigationKeys.RIGHT &&
      key !== SupportedNavigationKeys.LEFT
    ) {
      return;
    }

    if (tabHeaders.length === 0 || selectedIndex === -1) {
      return;
    }

    let nextIndex = selectedIndex;

    if (
      key === SupportedNavigationKeys.RIGHT &&
      selectedIndex < tabHeaders.length - 1
    ) {
      nextIndex = selectedIndex + 1;
    } else if (key === SupportedNavigationKeys.LEFT && selectedIndex > 0) {
      nextIndex = selectedIndex - 1;
    } else {
      return;
    }

    if (nextIndex < 0 || nextIndex >= tabHeaders.length) {
      return;
    }

    const nextTab = tabHeaders[nextIndex];

    nextTab.onClick();
  };

  return {
    onHandleKeyDown,
  };
};
