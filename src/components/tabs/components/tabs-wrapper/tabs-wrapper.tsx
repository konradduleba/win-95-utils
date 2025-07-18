import { FC, PropsWithChildren } from "react";

import { useTabs } from "../../hooks";

import styles from "./tabs-wrapper.module.scss";

export const TabsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useTabs();

  return (
    <div className={styles.tabsWrapper} id={id}>
      {children}
    </div>
  );
};
