import { FC } from "react";
import { OptionProps } from "react-select";
import cn from "classnames";

import { Text } from "@typography/text/text";

import styles from "./option.module.scss";

export const Option: FC<OptionProps> = ({
  innerProps,
  innerRef,
  isSelected,
  label,
  isFocused,
}) => {
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={cn(styles.option, {
        [styles.focused]: isFocused,
        [styles.selected]: isSelected && isFocused,
      })}
    >
      <Text size="md">{label}</Text>
    </div>
  );
};
