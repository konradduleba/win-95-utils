import { FC } from "react";
import cn from "classnames";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { Text } from "@typography/text";

import { useFormRadiobox } from "../../../../hooks/useFormRadiobox";

import styles from "./label-text.module.scss";

export const LabelText: FC = () => {
  const { label, triggerKeys, disabled } = useFormRadiobox();

  const decoratedLetter = Array.isArray(triggerKeys)
    ? triggerKeys[0]
    : triggerKeys;

  return (
    <Text
      size="md"
      className={cn(styles.text, {
        [styles.disabled]: disabled,
      })}
    >
      <TextWithDecoratedLetter
        text={label}
        letter={decoratedLetter}
        textDecoration="underline"
      />
    </Text>
  );
};
