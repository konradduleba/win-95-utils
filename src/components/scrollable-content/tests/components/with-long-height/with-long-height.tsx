import { FC } from "react";

import { ScrollableContent } from "../../../scrollable-content";

import { TEST_SCROLL_STEP } from "../../mocks";

import styles from "./with-long-height.module.scss";

export const WithLongHeight: FC = () => {
  return (
    <ScrollableContent scrollStep={TEST_SCROLL_STEP}>
      <div className={styles.content} />
    </ScrollableContent>
  );
};
