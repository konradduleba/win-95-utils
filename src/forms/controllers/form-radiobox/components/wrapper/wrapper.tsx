import { FC, PropsWithChildren } from "react";

import { useFormRadiobox } from "../../hooks";

import styles from "./wrapper.module.scss";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useFormRadiobox();

  const testId = `radiobox-wrapper-${name}`;

  return (
    <div data-testid={testId} className={styles.wrapper}>
      {children}
    </div>
  );
};
