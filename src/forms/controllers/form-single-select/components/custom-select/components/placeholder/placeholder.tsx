import { FC } from "react";
import { PlaceholderProps } from "react-select";

import { Text } from "@typography/text/text";

import { useFocusOnKeyPress } from "@hooks/useFocusOnKeyPress";

import { useFormSingleSelect } from "../../../../hooks";

import { SINGLE_SELECT_PLACEHOLDER } from "../../../../constants";

import styles from "./placeholder.module.scss";

export const Placeholder: FC<PlaceholderProps> = ({
  innerProps,
  children,
  isDisabled,
}) => {
  const { triggerKeys } = useFormSingleSelect();

  const { elementRef } = useFocusOnKeyPress<HTMLDivElement>({ triggerKeys });

  return (
    <div
      className={styles.placeholder}
      {...innerProps}
      tabIndex={isDisabled ? -1 : 0}
      ref={elementRef}
      data-testid={SINGLE_SELECT_PLACEHOLDER}
    >
      <Text size="md">{children}</Text>
    </div>
  );
};
