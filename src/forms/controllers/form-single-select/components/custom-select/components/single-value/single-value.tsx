import { FC } from "react";
import cn from "classnames";
import { SingleValueProps } from "react-select";

import { Text } from "@typography/text/text";

import { useFocusOnKeyPress } from "@hooks/useFocusOnKeyPress";

import { SelectOption } from "../../../../types";

import { useFormSingleSelect } from "../../../../hooks";

import { SINGLE_SELECT_VALUE } from "../../../../constants";

import styles from "./single-value.module.scss";

export const SingleValue: FC<SingleValueProps> = ({
  data,
  innerProps,
  isDisabled,
}) => {
  const { triggerKeys } = useFormSingleSelect();

  const { label } = data as SelectOption;

  const { elementRef } = useFocusOnKeyPress<HTMLDivElement>({ triggerKeys });

  return (
    <div
      className={cn(styles.text, { [styles.disabled]: isDisabled })}
      tabIndex={isDisabled ? -1 : 0}
      {...innerProps}
      ref={elementRef}
      data-testid={SINGLE_SELECT_VALUE}
    >
      <Text size="md">{label}</Text>
    </div>
  );
};
