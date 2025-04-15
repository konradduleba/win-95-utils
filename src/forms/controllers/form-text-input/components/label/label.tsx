import { FC } from "react";
import cn from "classnames";

import { Text } from "@typography/text";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { useFormTextInput } from "../../hooks";

import styles from "./label.module.scss";

export const Label: FC = () => {
  const { label, name, triggerKeys, disabled } = useFormTextInput();

  if (!label) {
    return null;
  }

  const decoratedLetter = Array.isArray(triggerKeys)
    ? triggerKeys[0]
    : triggerKeys;

  return (
    <label htmlFor={name} className={styles.label}>
      <Text size="md" className={cn({ [styles.disabled]: disabled })}>
        <TextWithDecoratedLetter
          text={label}
          letter={decoratedLetter}
          textDecoration="underline"
        />
      </Text>
    </label>
  );
};
