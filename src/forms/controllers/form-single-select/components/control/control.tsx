import { FC } from "react";
import cn from "classnames";
import { ControlProps } from "react-select";

import { useFormSingleSelect } from "../../hooks";

import styles from "./control.module.scss";

export const Control: FC<ControlProps> = ({
  children,
  innerProps,
  innerRef,
  isDisabled,
}) => {
  const { isInvalid } = useFormSingleSelect();

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={cn(styles.control, {
        [styles.disabled]: isDisabled,
        [styles.invalid]: isInvalid,
      })}
    >
      {children}
    </div>
  );
};
