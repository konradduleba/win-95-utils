import { FC } from "react";

import { useTabs } from "../../hooks";

import { CONTENT_TEST_ID } from "../../constants";

import styles from "./content.module.scss";

export const Content: FC = () => {
  const { currentTabContent } = useTabs();

  return (
    <div className={styles.content} data-testid={CONTENT_TEST_ID}>
      {currentTabContent}
    </div>
  );
};
