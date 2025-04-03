import { FC } from "react";
import { Trans } from "@lingui/react";

import { Text } from "@typography/text";

import { useFormTextInput } from "../../hooks";

import styles from "./error-message.module.scss";

export const ErrorMessage: FC = () => {
  const { errorMessage } = useFormTextInput();

  if (!errorMessage) {
    return null;
  }

  return (
    <Text size="sm" className={styles.error} role="alert">
      <Trans id={errorMessage} />
    </Text>
  );
};
