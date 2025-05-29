import { FC, PropsWithChildren } from "react";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { Typography } from "@typography/typography";

import styles from "./field-group.module.scss";

export type FieldGroupProps = {
  title: string;
  focusLetter?: string;
};

export const FieldGroup: FC<PropsWithChildren<FieldGroupProps>> = ({
  title,
  focusLetter,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="p" className={styles.title}>
        {focusLetter ? (
          <TextWithDecoratedLetter
            letter={focusLetter}
            textDecoration="underline"
            text={title}
          />
        ) : (
          title
        )}
      </Typography>
      {children}
    </div>
  );
};
