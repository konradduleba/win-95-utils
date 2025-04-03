import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { FormTextInputLabelProps } from "../../types";

import { useFormTextInput } from "../../hooks";

import styles from "./wrapper.module.scss";

type LabelPositions = Record<FormTextInputLabelProps["labelPosition"], string>;

const LABEL_POSITIONS: LabelPositions = {
  column: styles.column,
  row: styles.row,
};

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { name, labelPosition } = useFormTextInput();

  const testId = `text-input-wrapper-${name}`;

  return (
    <div
      data-testid={testId}
      className={cn(
        styles.wrapper,
        labelPosition ? LABEL_POSITIONS[labelPosition] : styles.noLabel
      )}
    >
      {children}
    </div>
  );
};
