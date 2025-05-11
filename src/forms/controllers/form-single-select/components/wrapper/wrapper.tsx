import { FC, PropsWithChildren } from "react";

import { useFormSingleSelect } from "../../hooks";

import styles from "./wrapper.module.scss";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useFormSingleSelect();

  const testId = `single-select-wrapper-${name}`;

  return (
    <div data-testid={testId} className={styles.wrapper}>
      {children}
    </div>
  );
};
