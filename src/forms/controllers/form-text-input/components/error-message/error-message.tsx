import { FC } from "react";
import { Trans } from "@lingui/react";

import { Typography } from "@typography/typography";

import { useFormTextInput } from "../../hooks";

import styles from "./error-message.module.scss";

export const ErrorMessage: FC = () => {
  const { errorMessage, isInvalid } = useFormTextInput();

  if (!isInvalid || !errorMessage) {
    return null;
  }

  return (
    <Typography size="sm" className={styles.error} variant="span" role="alert">
      <Trans id={errorMessage} />
    </Typography>
  );
};
