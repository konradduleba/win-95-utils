import { FC, PropsWithChildren } from "react";
import { Trans } from "@lingui/react";

import { MESSAGES } from "./translations";

import styles from "./form-container.module.scss";

export const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <button>
        <Trans id={MESSAGES.SUBMIT.id} />
      </button>
    </div>
  );
};
