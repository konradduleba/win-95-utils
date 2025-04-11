import { FC, PropsWithChildren } from "react";
import { Trans } from "@lingui/react";

import { Button } from "@buttons/button";

import { MESSAGES } from "./translations";

import styles from "./form-container.module.scss";

export const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <Button type="submit">
        <Trans id={MESSAGES.SUBMIT.id} />
      </Button>
    </div>
  );
};
