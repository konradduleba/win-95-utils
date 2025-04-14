import { FC, PropsWithChildren } from "react";

import { useFormCheckbox } from "../../hooks";

import styles from "./wrapper.module.scss";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useFormCheckbox();

  const testId = `checkbox-wrapper-${name}`;

  return (
    <div data-testid={testId} className={styles.wrapper}>
      {children}
    </div>
  );
};
