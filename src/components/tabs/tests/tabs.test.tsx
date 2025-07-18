import { describe, test } from "vitest";
import { render } from "@testing-library/react";

import { TabsBuilder } from "./builders";

import { TABS_ID } from "./mocks";

import { DefaultTabs } from "./components";
import { SupportedNavigationKeys } from "../types";

const renderTabs = async () => {
  render(<DefaultTabs />);

  const tabs = new TabsBuilder({
    id: TABS_ID,
  });

  return {
    tabs,
  };
};

describe("Test coverage for Tabs", () => {
  test("Should initial tab be selected", async () => {
    const { tabs } = await renderTabs();

    tabs.checkIsInitialTabSelected();
  });
  test("Should change Tab onClick", async () => {
    const { tabs } = await renderTabs();

    const tabToSelect = tabs.tabItems[1];

    await tabs.changeSelectedTabUsingClick({ newTab: tabToSelect });
  });

  test("Should change Tab on Arrow Press Right", async () => {
    const { tabs } = await renderTabs();

    const tabToSelect = tabs.tabItems[1];

    await tabs.changeSelectedTabUsingArrow({
      direction: SupportedNavigationKeys.RIGHT,
      newTab: tabToSelect,
    });
  });

  test("Should change Tab on Arrow Press Left", async () => {
    const { tabs } = await renderTabs();

    const tabToSelect = tabs.tabItems[2];

    await tabs.changeSelectedTabUsingArrow({
      direction: SupportedNavigationKeys.LEFT,
      newTab: tabToSelect,
    });
  });
});
