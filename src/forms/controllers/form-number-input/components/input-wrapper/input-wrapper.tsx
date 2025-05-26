import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { useFormNumberInput } from "../../hooks";

import { INPUT_WRAPPER_LABEL } from "../../constants";

import styles from "./input-wrapper.module.scss";

export const InputWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isInvalid, disabled } = useFormNumberInput();

  return (
    <div
      className={cn(styles.inputWrapper, {
        [styles.invalid]: isInvalid,
        [styles.disabled]: disabled,
      })}
      aria-invalid={isInvalid}
      aria-disabled={disabled}
      aria-label={INPUT_WRAPPER_LABEL}
    >
      {children}
    </div>
  );
};
