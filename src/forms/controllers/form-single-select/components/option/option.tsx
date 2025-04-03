import { FC } from "react";
import { OptionProps } from "react-select";
import cn from "classnames";

import { Text } from "@typography/text";

import { SELECT_OPTION_TEST_ID } from "../../constants";

import styles from "./option.module.scss";

export const Option: FC<OptionProps> = ({
  innerProps,
  innerRef,
  isSelected,
  label,
  isFocused,
}) => {
  return (
    <div ref={innerRef} {...innerProps} data-testid={SELECT_OPTION_TEST_ID}>
      <Text
        size="sm"
        className={cn(styles.option, {
          [styles.focused]: isFocused,
          [styles.selected]: isSelected,
        })}
      >
        {label}
      </Text>
    </div>
  );
};
