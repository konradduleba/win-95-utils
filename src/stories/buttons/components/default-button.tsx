import { FC } from "react";

import { Button, ButtonProps } from "@buttons/button/button";

type DefaultButtonProps = ButtonProps & {
  textValue: string;
};

export const DefaultButton: FC<DefaultButtonProps> = ({
  textValue,
  disabled,
}) => {
  return <Button disabled={disabled}>{textValue}</Button>;
};
