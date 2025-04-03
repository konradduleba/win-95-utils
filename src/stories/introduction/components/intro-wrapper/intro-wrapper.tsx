import { FC, PropsWithChildren } from "react";

import styles from "./intro-wrapper.module.scss";

export const IntroWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
