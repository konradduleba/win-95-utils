import { FC } from "react";
import cn from "classnames";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import { useFormCheckbox } from "../../../../hooks/useFormCheckbox";
import { LABEL_TEST_ID } from "../../../../constants";

import styles from "./label-text.module.scss";

export const LabelText: FC = () => {
  const { label, triggerKeys, disabled } = useFormCheckbox();

  const decoratedLetter = Array.isArray(triggerKeys)
    ? triggerKeys[0]
    : triggerKeys;

  return (
    <div
      className={cn(styles.text, {
        [styles.disabled]: disabled,
      })}
      data-testid={LABEL_TEST_ID}
    >
      <TextWithDecoratedLetter
        text={label}
        letter={decoratedLetter}
        textDecoration="underline"
      />
    </div>
  );
};
