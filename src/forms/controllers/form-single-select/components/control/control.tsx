import { FC } from "react";
import { ControlProps } from "react-select";

import { FormSingleSelectProps } from "../../types";

import styles from "./control.module.scss";

type ControlProperties = ControlProps & Pick<FormSingleSelectProps, "testId">;

export const Control: FC<ControlProperties> = ({
  children,
  innerProps,
  innerRef,
  testId,
}) => {
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={styles.control}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
