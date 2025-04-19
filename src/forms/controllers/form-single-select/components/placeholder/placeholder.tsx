import { FC } from "react";
import { PlaceholderProps } from "react-select";

import { Text } from "@typography/text/text";

import styles from "./placeholder.module.scss";

export const Placeholder: FC<PlaceholderProps> = ({ innerProps, children }) => {
  return (
    <div className={styles.placeholder} tabIndex={0} {...innerProps}>
      <Text size="md">{children}</Text>
    </div>
  );
};
