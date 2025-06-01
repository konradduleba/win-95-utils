import { FC } from "react";

import { ActionButton } from "@buttons/action-button/action-button";
import { ButtonProps } from "@buttons/button/button";

import SvgClose from "@icons/close";

export const ActionButtonExample: FC<ButtonProps> = ({ disabled }) => {
  return (
    <ActionButton disabled={disabled}>
      <SvgClose />
    </ActionButton>
  );
};
