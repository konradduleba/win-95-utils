import { FC } from "react";
import cn from "classnames";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { useFormSingleSelect } from "../../hooks";

import styles from "./label.module.scss";

export const Label: FC = () => {
  const { label, name, triggerKeys, disabled } = useFormSingleSelect();

  if (!label) {
    return null;
  }

  const decoratedLetter = Array.isArray(triggerKeys)
    ? triggerKeys[0]
    : triggerKeys;

  return (
    <label
      htmlFor={name}
      className={cn(styles.label, { [styles.disabled]: disabled })}
    >
      <TextWithDecoratedLetter
        text={label}
        letter={decoratedLetter}
        textDecoration="underline"
      />
    </label>
  );
};
