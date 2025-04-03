import { FC } from "react";

import { Text } from "@typography/text";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { useFormTextInput } from "../../hooks";

import styles from "./label.module.scss";

export const Label: FC = () => {
  const { label, name, triggerKeys } = useFormTextInput();

  if (!label) {
    return null;
  }

  const decoratedLetter = Array.isArray(triggerKeys)
    ? triggerKeys[0]
    : triggerKeys;

  return (
    <label htmlFor={name} className={styles.label}>
      <Text size="md">
        <TextWithDecoratedLetter
          text={label}
          letter={decoratedLetter}
          textDecoration="underline"
        />
      </Text>
    </label>
  );
};
