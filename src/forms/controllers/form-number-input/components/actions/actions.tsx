import { FC } from "react";

import { DecrementButton, IncrementButton } from "./components";

import styles from "./actions.module.scss";

export const Actions: FC = () => {
  return (
    <div className={styles.container}>
      <IncrementButton />
      <DecrementButton />
    </div>
  );
};
