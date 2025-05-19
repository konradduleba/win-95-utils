import { FC } from "react";
import { OptionProps } from "react-select";
import cn from "classnames";

import { Typography } from "@typography/typography";

import { useSetOptionRef } from "./hooks";

import styles from "./option.module.scss";

export const Option: FC<OptionProps> = ({
  innerProps,
  innerRef,
  isSelected,
  label,
  isFocused,
}) => {
  const { setOptionRef } = useSetOptionRef({ innerRef, isFocused });

  return (
    <div
      ref={setOptionRef}
      {...innerProps}
      className={cn(styles.option, {
        [styles.focused]: isFocused,
        [styles.selected]: isSelected && isFocused,
      })}
    >
      <Typography variant="span">{label}</Typography>
    </div>
  );
};
