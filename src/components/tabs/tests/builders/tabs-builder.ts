import { expect } from "vitest";

import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  ChangeSelectedTabUsingArrowProps,
  ChangeSelectedTabUsingClickProps,
  TabsBuilderProps,
} from "../types";

import { SupportedNavigationKeys } from "../../types";

import { CONTENT_TEST_ID, HEADER_LABEL_NAME } from "../../constants";

export class TabsBuilder {
  wrapper: HTMLDivElement;
  header: HTMLButtonElement;
  content: HTMLDivElement;
  tabItems: HTMLLIElement[];
  selectedTab?: HTMLLIElement;

  constructor({ id }: TabsBuilderProps) {
    this.wrapper = document.getElementById(id) as HTMLDivElement;
    this.header = within(this.wrapper).getByRole("list", {
      name: HEADER_LABEL_NAME,
    });
    this.content = within(this.wrapper).getByTestId(CONTENT_TEST_ID);
    this.tabItems = within(this.header).getAllByRole("listitem");
    this.selectedTab = this.tabItems.find(
      (tab: HTMLLIElement) => tab.getAttribute("aria-selected") === "true"
    );
  }

  changeSelectedTabUsingClick = async ({
    newTab,
  }: ChangeSelectedTabUsingClickProps) => {
    await userEvent.click(newTab);

    const newSelectedTab = this.tabItems.find(
      (tab: HTMLLIElement) => tab.getAttribute("aria-selected") === "true"
    );

    if (!newSelectedTab) {
      throw new Error("At least one Tab should be selected");
    }

    this.selectedTab = newSelectedTab;
    this.tabItems = within(this.header).getAllByRole("listitem");

    expect(this.tabItems).toContain(newSelectedTab);
  };

  changeSelectedTabUsingArrow = async ({
    direction,
  }: ChangeSelectedTabUsingArrowProps) => {
    if (!this.selectedTab) {
      throw new Error("At least one Tab should be selected");
    }

    this.selectedTab.focus();

    if (direction === SupportedNavigationKeys.RIGHT) {
      await userEvent.keyboard("{ArrowRight}");
    } else {
      await userEvent.keyboard("{ArrowLeft}");
    }

    const newSelectedTab = this.tabItems.find(
      (tab: HTMLLIElement) => tab.getAttribute("aria-selected") === "true"
    );

    if (!newSelectedTab) {
      throw new Error("At least one Tab should be selected");
    }

    this.selectedTab = newSelectedTab;
    this.tabItems = within(this.header).getAllByRole("listitem");

    expect(this.tabItems).toContain(newSelectedTab);
  };

  checkIsInitialTabSelected = () => {
    const selectedTabs = this.tabItems.filter(
      (tab) => tab.getAttribute("aria-selected") === "true"
    );

    expect(selectedTabs).toHaveLength(1);
    expect(selectedTabs[0]).toBe(this.tabItems[0]);
  };
}
