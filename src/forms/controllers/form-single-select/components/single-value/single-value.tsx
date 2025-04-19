import { FC } from "react";
import { SingleValueProps } from "react-select";

import { Text } from "@typography/text/text";

import { SelectOption } from "../../types";

import styles from "./single-value.module.scss";

export const SingleValue: FC<SingleValueProps> = ({ data, innerProps }) => {
  const { label } = data as SelectOption;

  return (
    <div className={styles.text} tabIndex={0} {...innerProps}>
      <Text size="md">{label}</Text>
    </div>
  );
};
