import { FC } from "react";

import { Button, type ButtonProps } from "@buttons/button/button";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import {
  useFocusOnKeyPress,
  UseFocusOnKeyPressProps,
} from "@hooks/useFocusOnKeyPress";

type TextDecoratedButtonProps = UseFocusOnKeyPressProps &
  ButtonProps & {
    textValue: string;
  };

export const TextDecoratedButton: FC<TextDecoratedButtonProps> = ({
  triggerKeys,
  textValue,
  disabled,
}) => {
  const { elementRef } = useFocusOnKeyPress<HTMLButtonElement>({ triggerKeys });

  const decoratedLetter = Array.isArray(triggerKeys)
    ? triggerKeys[0]
    : triggerKeys;

  return (
    <Button buttonRef={elementRef} disabled={disabled}>
      <TextWithDecoratedLetter
        text={textValue}
        letter={decoratedLetter}
        textDecoration="underline"
      />
    </Button>
  );
};
