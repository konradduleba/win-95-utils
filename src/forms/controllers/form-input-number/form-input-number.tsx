import { FC } from "react";
import cn from "classnames";

import { useHandleValueChange } from "./hooks";

import { FormInputNumberProps } from "./types";

import { ActionButton } from "./components";

import styles from "./form-input-number.module.scss";

export const FormInputNumber: FC<FormInputNumberProps> = (props) => {
  const { testId } = props;

  const {
    onHandleChange,
    value,
    onDecrementValue,
    onInrementValue,
    isInvalid,
  } = useHandleValueChange(props);

  return (
    <div className={styles.container} data-testid={testId}>
      <input
        type="text"
        value={value}
        onChange={onHandleChange}
        className={cn(styles.input, { [styles.invalid]: isInvalid })}
        data-testid={`${testId}-input`}
      />
      <div className={styles.actions} data-testid={`${testId}-actions`}>
        <ActionButton
          onClick={onInrementValue}
          testId={`${testId}-increment-button`}
          isIncrement
        />
        <ActionButton
          onClick={onDecrementValue}
          testId={`${testId}-decrement-button`}
        />
      </div>
    </div>
  );
};
